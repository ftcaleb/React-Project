import React from "react";
import { BookingProvider } from "./Components/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookingSystem from "./Components/BookingSystem";
import ConfirmBooking from "./Components/ConfirmBooking";
import Contact from "./Components/Contact";


export default function App() {
  return (
    <BookingProvider>
    <div>
      <Router>
        <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking-system" element={<BookingSystem />} />
          <Route path="/confirm-booking" element={<ConfirmBooking />} />
          
        </Routes>
        </div>
      </Router>
      </div>
      </BookingProvider>
  )
}