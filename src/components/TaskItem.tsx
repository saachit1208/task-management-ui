/**
 * TaskItem Component
 * 
 * Individual task display component.
 * Features:
 * - Displays task information
 * - Handles delete action
 * - Shows task creation date
 */

import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  const formattedDate = new Date(task.created_at).toLocaleString();

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-gray-800 whitespace-pre-wrap">{task.description}</p>
          <p className="text-sm text-gray-500 mt-2">{formattedDate}</p>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};