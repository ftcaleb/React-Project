This portfolio project showcases my frontend development skills while also highlighting my first experience building a backend.
The project includes a full “Book Me” feature that allows users to select a service, date, and time, and then confirm the booking. All booking details are saved through a real backend built using:

Node.js

Express.js

Supabase (Database + Auth + API Layer)

This project demonstrates my ability to build both the user-facing side and the server logic behind it.

🎯 Features
🌐 Frontend

Built using React

Clean, modern UI with:

A dynamic Booking System

Dropdown selections for service options

A calendar date picker

Automatic time filtering (cannot pick past times)

Validation for booking fields

Confirm Booking page that shows:

Selected service

Date

Time

Duration

User information (name, surname, email, etc.)

Final Confirm & Save button that sends the data to the backend

🖥️ Backend

This was my first backend build, and includes:

Supabase database connection (supabase-js)

Express server with API routes

Environment variable setup with .env

Secure insertion of bookings into the database

Table-based schema separated into its own SQL file for clean structure

Input validation and structured responses for API calls

Backend endpoints include:

POST /api/bookings

Creates a new booking in the Supabase database
Validates:

name

service

date

time

duration

And more…

If successful, the backend responds with:

{
  "message": "Booking saved successfully!"
}

🗄️ Tech Stack
Frontend

React

React Router

TailwindCSS

Lucide Icons

HeroIcons

React Calendar

Backend

Node.js

Express.js

Supabase

dotenv

📁 Project Structure
project/
│
├── backend/
│   ├── server.js
│   ├── supabase.js
│   ├── routes/
│   │   └── bookings.js
│   ├── sql/
│   │   └── bookings.sql
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── BookingSystem.jsx
│   │   │   ├── Booking.jsx
│   │   │   └── ConfirmBooking.jsx
│   │   ├── Pages/
│   │   ├── App.js
│   │   └── routes.js
│   └── package.json
│
└── README.md

📌 Setup Instructions
1. Clone the Repository
git clone https://github.com/yourusername/portfolio-project.git

2. Install Frontend Dependencies
cd frontend
npm install

3. Install Backend Dependencies
cd backend
npm install

🔐 Environment Variables

Create a .env file in the backend folder with:

SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

🧪 Running the Project
Start Backend
cd backend
node server.js

Start Frontend
cd frontend
npm run dev

🗃️ Database Schema (Supabase)

The project uses a dedicated SQL file:

/backend/sql/bookings.sql
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  surname TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  duration TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);


This schema ensures all bookings are properly stored and searchable.

📸 Screenshots (Optional)

Add screenshots here when you're ready:

Booking System selection page

Confirm Booking page

Successful submission

🎓 What I Learned

This project helped me learn:

How to set up a backend from scratch

How to connect Express to Supabase

How to validate backend requests

How to structure routes and SQL files

How to send frontend data to a real server

How to debug CORS, env issues, and network requests

How frontend and backend communicate together

This project marks my first step into full-stack development.
