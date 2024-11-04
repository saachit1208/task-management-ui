/**
 * TaskForm Component
 * 
 * Form component for creating new tasks.
 * Features:
 * - Input validation
 * - Loading states
 * - Error handling
 * - Success feedback
 */

import { useState } from 'react';
import { CreateTaskDTO } from '../types/task';

interface TaskFormProps {
  onCreateTask: (task: CreateTaskDTO) => Promise<boolean>;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onCreateTask }) => {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!description.trim()) {
      setError('Description is required');
      return;
    }

    try {
      setIsLoading(true);
      const success = await onCreateTask({ description });
      if (success) {
        setDescription(''); // Clear form only on success
      }
    } catch (err) {
      setError('Failed to create task');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task description..."
          rows={3}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Creating...' : 'Create Task'}
      </button>
    </form>
  );
};