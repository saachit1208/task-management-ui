/**
 * TaskList Component
 * 
 * Main component for displaying the list of tasks.
 * Features:
 * - Fetches and displays tasks
 * - Handles task deletion
 * - Shows loading states
 * - Displays success/error messages
 */

import { useEffect, useState } from 'react';
import { getTasks, deleteTask, createTask } from '../services/api';
import { Task, CreateTaskDTO } from '../types/task';
import { TaskItem } from './TaskItem';
import { TaskForm } from './TaskForm';

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to fetch tasks');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const handleCreateTask = async (taskData: CreateTaskDTO) => {
    try {
      const newTask = await createTask(taskData);
      setTasks(prevTasks => [newTask, ...prevTasks]); // Add new task at the beginning
      return true; // Return success
    } catch (err) {
      setError('Failed to create task');
      return false; // Return failure
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (isLoading) {
    return <div className="text-center py-4">Loading tasks...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
        <TaskForm onCreateTask={handleCreateTask} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">No tasks yet</p>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};