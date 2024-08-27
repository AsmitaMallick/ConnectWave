# ConnectWave

ConnectWave is a minimal full-stack web application built using Django for the backend and Vite+React for the frontend. The app allows users to send interest messages to other users, accept or reject them, and chat if the interest is accepted. This project demonstrates capabilities in both front-end and back-end development.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Testing](#testing)
- [Next Steps](#next-steps)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Register and log in.
- **Interest Messaging**: Users can send interest messages to other users.
- **Interest Acceptance/Rejection**: Recipients can accept or reject interest messages.
- **Real-Time Chat**: Users can chat in real-time once the interest is accepted.

## Technologies
- **Frontend**: Vite, React
- **Backend**: Django, Django Channels (for real-time functionality)
- **Database**: SQLite (default)
- **Environment**: Python virtual environment (`venv`)
  
## Project Structure
```
ConnectWave/
│
├── Frontend/                  # React frontend built with Vite
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── App.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── interest_project/          # Django backend
│   ├── chat/
│   ├── interests/
│   ├── users/
│   ├── interest_project/
│   ├── manage.py
│   └── ...
│
├── venv/                      # Python virtual environment
├── README.md
└── ...
```

## Prerequisites
- **Python** (v3.8 or higher)
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## Installation

### Backend Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/ConnectWave.git
   cd ConnectWave/interest_project
   ```

2. **Set Up Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Backend Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Migrations**
   ```bash
   python manage.py migrate
   ```

5. **Create a Superuser (Optional)**
   ```bash
   python manage.py createsuperuser
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory**
   ```bash
   cd ../Frontend
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

## Running the Application

### Running the Backend

1. **Activate the Virtual Environment**
   ```bash
   cd ../interest_project
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Start the Django Development Server**
   ```bash
   python manage.py runserver
   ```

The backend server will start at `http://127.0.0.1:8000/`.

### Running the Frontend

1. **Navigate to the Frontend Directory**
   ```bash
   cd ../Frontend
   ```

2. **Start the Vite Development Server**
   ```bash
   npm run dev
   ```

The frontend will be available at `http://127.0.0.1:5173/`.

## Testing
- **Backend**: You can run backend tests with:
  ```bash
  python manage.py test
  ```
- **Frontend**: If you have any tests set up for React, you can run them with:
  ```bash
  npm test
  ```

