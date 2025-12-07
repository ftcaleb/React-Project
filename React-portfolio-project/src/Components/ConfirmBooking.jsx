import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useBooking } from './Booking';

function ConfirmBooking() {
  const location = useLocation();
  const { date, service, time, duration } = location.state || {};
  const navigate = useNavigate();
  const { contactData } = useBooking();

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!contactData.fullname || !contactData.email || !contactData.phone) {
      alert('Please complete all previous forms first.');
      navigate("/");
    }
  }, [contactData, navigate]);

  // Format date safely
  const dateString = date ? (date instanceof Date ? date.toDateString() : new Date(date).toDateString()) : "No date";

  const handleSaveBooking = async () => {
    setIsSaving(true);
    try {
      const response = await fetch("https://react-project-blw8.onrender.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: contactData.fullname,
          email: contactData.email,
          phone: contactData.phone,
          date,
          time,
          service,
          duration
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to save booking");
        setIsSaving(false);
        return;
      }

      alert("Booking saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving booking.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col justify-center border bg-white text-black rounded shadow-sm m-10 p-5 w-100 h-100">
      <div className="font-large bg-black text-white p-4 rounded">Booking Confirmed!</div>

      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium">Date: {dateString}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium">Service: {service || "No service selected"}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium">Time: {time || "No time selected"}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium">Duration: {duration || "No duration selected"}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium">Full name: {contactData.fullname}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium">Email: {contactData.email}</div>
      <div className="flex justify-between items-center text-black p-2 rounded-2xl font-medium">Phone: {contactData.phone}</div>

      <div className="flex gap-4 mt-5">
        <Link to="/booking-system">
          <button className="checkout py-2 px-4 border rounded flex items-center justify-center gap-2 hover:bg-gray-50 text-black text-sm">
            <ChevronLeft size={16} />
            Back
          </button>
        </Link>

        <button
          onClick={handleSaveBooking}
          disabled={isSaving}
          className="checkout py-2 px-4 border rounded flex items-center justify-center gap-2 bg-red-600 text-white hover:text-white hover:bg-black text-sm"
        >
          {isSaving ? "Saving..." : "Confirm & Save"}
        </button>
      </div>
    </div>
  );
}

export default ConfirmBooking;
