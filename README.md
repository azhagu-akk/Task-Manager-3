# Task Manager App

## Overview 
The Task Manager App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with Tailwind CSS. This application allows users to manage their 
tasks efficiently by providing functionalities to create, edit, update, delete, and reset tasks. Additionally, the app includes user authentication features for login and signup.


## Demo : [Click Here!!!](https://taskmanagerapp3.netlify.app/)

## Features
**User Authentication:** Secure login and signup functionality. <br>

**Task Management:**
- Create new tasks.
- Edit existing tasks.
- Update task status.
- Delete tasks.
- Reset tasks.

**Responsive Design:** Built with Tailwind CSS for a responsive and modern UI.

## Technologies Used

**Frontend:** React.js, Tailwind CSS <br>

**Backend:** Node.js, Express.js <br>

**Database:** MongoDB

## Usage
### Authentication

- **Signup:** Navigate to the signup page and create a new account. <br>

- **Login:** Use your credentials to log in to the application.

### Task Management

- **Create Task:** Click on the "Add Task" button to create a new task. <br>

- **Edit Task:** Click on the edit icon next to a task to modify its details.  <br>

- **Update Task:** Mark tasks as completed or pending using the checkbox.  <br>

- **Delete Task:** Click on the delete icon to remove a task.  <br>

- **Reset Tasks:** Use the "Reset All Tasks" button to clear all tasks.  <br>


## Installation

Clone the project
```bash
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app
```
Install the dependencies
```bash
# Install server dependencies
cd backend
npm install

# Install client dependencies
cd ../frontend
npm install
```
Create a `.env` file in the client directory:

```env
VITE_API_URL = http://localhost:5000 
```

Create a `.env` file in the server directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Start the server

```bash
cd backend
npm start or npm run dev
```

Start the Client

```bash
cd frontend
npm run dev
```


## License
This project is licensed under the **MIT License**
