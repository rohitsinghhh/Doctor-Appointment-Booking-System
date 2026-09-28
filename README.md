Full Stack Doctor Appointment System

A comprehensive full-stack application for managing doctor appointments with separate interfaces for users, doctors, and administrators.

## Project Structure

```
quickcare-full-stack/
├── admin/              # Admin dashboard for managing doctors and appointments
├── backend/            # Node.js/Express API server
├── frontend/           # User-facing web application 
└── README.md          # This file
```

## Features

### Admin Panel
- Add and manage doctors
- View all appointments
- Monitor doctor list
- Dashboard overview

### Doctor Panel
- View appointments
- Manage doctor profile
- Track appointment history

### User Frontend
- Browse doctors by speciality
- Book appointments
- View appointment history
- Manage user profile
- Authentication and verification

## Tech Stack

### Frontend & Admin
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Context API** - State management

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Cloudinary** - Image storage

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Cloudinary account

### Backend Setup
```bash
cd backend
npm install
# Configure environment variables in .env
node server.js
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Admin Setup
```bash
cd admin
npm install
npm run dev
```

## Environment Variables

Create a local file at [backend/.env](backend/.env) by copying [backend/.env.example](backend/.env.example) and filling in your own values:

```bash
cd backend
copy .env.example .env
```

Example variables include:
```
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret
```

Keep [backend/.env](backend/.env) local and never commit it to GitHub.

## API Routes

### User Routes
- POST `/api/user/register` - Register new user
- POST `/api/user/login` - User login
- GET `/api/user/profile` - Get user profile
- POST `/api/user/book-appointment` - Book appointment

### Doctor Routes
- GET `/api/doctor/list` - Get all doctors
- POST `/api/doctor/login` - Doctor login
- GET `/api/doctor/appointments` - Get doctor appointments

### Admin Routes
- POST `/api/admin/add-doctor` - Add new doctor
- GET `/api/admin/doctors` - Get all doctors
- GET `/api/admin/appointments` - Get all appointments

## Getting Started

1. Clone the repository
2. Install dependencies in each folder (backend, frontend, admin)
3. Configure environment variables
4. Start the backend server
5. Start the frontend and admin applications

## License

This project is licensed under the MIT License.

