/**
 * Task Types Module
 * 
 * Contains TypeScript interfaces for task-related data structures.
 * Includes:
 * - Task interface for complete task objects
 * - CreateTaskDTO for task creation payload
 * - ApiResponse types for backend communication
 */

export interface Task {
    id: number;
    description: string;
    created_at: string;
  }
  
  export interface CreateTaskDTO {
    description: string;
  }