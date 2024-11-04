/**
 * Main App Component
 * 
 * Root component of the application.
 * Features:
 * - Layout structure
 * - Main routing
 * - Global state management
 */

import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Task Manager
        </h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;