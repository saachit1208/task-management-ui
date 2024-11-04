# Task Management UI

A React + TypeScript frontend for managing tasks. This application allows users to create, view, and delete tasks with a clean and responsive interface.

## Tech Stack

- React 18
- TypeScript
- Vite
- Axios for API calls
- Tailwind CSS for styling

## Project Structure

```
task-management-ui/
├── src/
│   ├── components/        # React components
│   │   ├── TaskList.tsx  # Main task list component
│   │   ├── TaskForm.tsx  # Task creation form
│   │   └── TaskItem.tsx  # Individual task component
│   ├── services/         # API and service functions
│   │   └── api.ts       # Axios API configuration
│   ├── types/           # TypeScript interfaces
│   │   └── task.ts      # Task-related types
│   ├── App.tsx          # Main application component
│   └── index.css        # Global styles
├── .env                 # Environment variables
└── package.json         # Project dependencies
```

## Setup Instructions

1. **Install Dependencies**
```bash
# Install project dependencies
npm install
```

2. **Environment Configuration**
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://127.0.0.1:5000/api
```

3. **Install Tailwind CSS**
```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p
```

4. **Start Development Server**
```bash
npm run dev
```
Application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Features

- View list of all tasks
- Create new tasks with description
- Delete existing tasks
- Responsive design
- Loading states
- Error handling
- Success messages
- Form validation

## API Integration

The UI connects to a Flask backend API with the following endpoints:

- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Create a new task
- `DELETE /tasks/:id` - Delete a specific task

## Component Overview

### TaskList
- Main component that displays all tasks
- Handles task fetching and deletion
- Shows loading and error states

### TaskForm
- Handles task creation
- Input validation
- Loading state during submission
- Success/error feedback

### TaskItem
- Displays individual task information
- Handles delete functionality
- Shows creation timestamp

## Environment Variables

|
 Variable 
|
 Description 
|
 Default 
|
|
----------
|
-------------
|
---------
|
|
 VITE_API_URL 
|
 Backend API URL 
|
 http://127.0.0.1:5000/api 
|

## Development

1. Make sure the backend API is running
2. Start the development server
3. Make changes in the `src` directory
4. The app will hot-reload as you make changes

## Error Handling

The application handles various error cases:
- API connection errors
- Task creation failures
- Task deletion failures
- Form validation errors

## Style Guide

- Uses Tailwind CSS for styling
- Responsive design principles
- Consistent spacing and colors
- Loading states for better UX
- Error and success messages

## Requirements

- Node.js 16+
- npm or yarn
- Modern web browser
- Backend API running on http://127.0.0.1:5000

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Notes

- Ensure the backend API is running before starting the UI
- Check console for any error messages
- All API calls include error handling
- The UI is mobile-responsive
