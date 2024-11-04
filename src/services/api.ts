
/*
 * API Service Module
 * 
 * Handles all API communications with the backend server.
 * Includes typed functions for:
 * - Getting all tasks
 * - Creating new tasks
 * - Deleting tasks
 * 
 * Uses axios for HTTP requests and includes error handling.
 */

import axios from 'axios';
import { Task, CreateTaskDTO } from '../types/task';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export const getTasks = async (): Promise<Task[]> => {
  const response = await api.get<Task[]>('/tasks');
  return response.data;
};

export const createTask = async (task: CreateTaskDTO): Promise<Task> => {
  const response = await api.post<Task>('/tasks', task);
  return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};