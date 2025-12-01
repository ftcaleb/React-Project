 import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ChevronLeft} from "lucide-react";
import { useBooking } from './Booking';
import { useEffect } from 'react'



function ConfirmBooking() {
  const location = useLocation();
  const { date, service, time, duration } = location.state || {};

    const navigate = useNavigate();
    const { contactData } = useBooking();
    useEffect(() => {
    if (!contactData.fullname || !contactData.email) {
      alert('Please complete all previous forms first.');
      navigate("/");
    }
  }, [contactData, navigate]);


  // If date may be a Date object, guard rendering (and format safely)
  const dateString = date ? (date instanceof Date ? date.toDateString() : new Date(date).toDateString()) : "No date";

  return (
    <div className="flex flex-col justify-center  border bg-white text-white rounded  shadow-sm m-10 p-5 w-100 h-100">
      <div className="font-large bg-black p-4 ">Booking Confirmed!</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium ">Date: {dateString}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium ">Service: {service || "No service selected"}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium ">Time: {time || "No time selected"}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium ">Duration: {duration || "No duration selected"}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium ">Full name: {contactData.fullname}</div>
    <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium ">email: {contactData.email}</div>
     
        <Link to="/booking-system">
        <button className="checkout mt-10 py-2 border rounded flex items-center justify-center gap-2 hover:bg-gray-50 text-black text-sm">
            <ChevronLeft size={16} />
            Back
        </button>
        </Link>
    </div>
  );
}

export default ConfirmBooking;