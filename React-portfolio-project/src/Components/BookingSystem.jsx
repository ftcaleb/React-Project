import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Link } from "react-router-dom";

export default function BookingSystem({ onNext }) {
 
  const [date, setDate] = useState(new Date());
   // state for each dropdown
 
  const today = new Date();
  // 28 Nov 2025 not available
  const fullyBookedDates = [new Date(2025, 11, 28).toDateString(),];

const [service, setService] = useState("");
const [open, setOpen] = useState(false); // controls dropdown open/close

const [time, setTime] = useState("");
const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);

const [duration, setDuration] = useState("");
const [DurationOpen, setDurationOpen] = useState(false);


  


  return (
    // Main container
    <div className="w-full max-w-4xl p-6 rounded-2xl grid grid-cols-1 justify-center shadow-lg md:grid-cols-2 gap-6 bg-gray-50">
        
      {/* Left section: Calendar */}
      <div className="flex flex-col gap-4">
        <div className="text-xl font-semibold">Select Date</div>

        {/* Calendar placeholder box */}
        <div className=" p-4 bg-white shadow-sm h-[360px] flex items-center justify-center">
          <div className="text-gray-500"><Calendar onChange={setDate} value={date} tileDisabled={({ date }) => {
            const isPast = date < today;
            const isFullyBooked = fullyBookedDates.includes(date.toDateString());
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            return isPast || isFullyBooked || isWeekend; // disables clicks
            }}
            tileClassName={({ date }) => {
                const isPast = date < today;
                const isFullyBooked = fullyBookedDates.includes(date.toDateString());
                const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                if (isPast || isFullyBooked || isWeekend) {
                    return "opacity-40 pointer-events-none"; // gray overlay + no click
                     }
                     
                     return "";
            }}
            
            />
            

            {/*Selected date appears below the calendar */}
             <div className="mt-4 text-gray-700 font-medium">
            You selected:{" "}
            <span className="text-sky-600">
              {date.toDateString()}
            </span>
          </div>
            </div>
        </div>
      </div>


      {/* Right Section: Questions with dropdowns */}
      <div className="flex flex-col gap-4">

        {/* The reason for the booking dropdown */}
        <div
          id="service"
          className="flex justify-between items-center text-white p-4 bg-red-600 rounded-2xl font-medium cursor-pointer"
          onClick={() => setOpen(!open)}
          >
          {service || "What service do you want to book?"} 
          <ChevronDown />
        </div>

        {open && (
          <div className="mt-2 bg-white shadow-md rounded p-2">
            <div
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setService("Web Development");
                setOpen(false);
              }}
            >
              Web Development
            </div>

            <div
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setService("Consultation");
                setOpen(false);
              }}
            >
              Consultation
            </div>

            <div
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setService("Insight");
                setOpen(false);
              }}
            >
              Insight
            </div>
          </div>
        )}


        {/* Time of the booking dropdown */}
        <div
          id="timeDropdownOpen"
          className="flex justify-between items-center  text-white p-4 bg-red-600 rounded-2xl font-medium cursor-pointer"
          onClick={() => setTimeDropdownOpen(!timeDropdownOpen)}
          >
          {time || "What time do you want to book?"} 
          <ChevronDown />
        </div>

           {timeDropdownOpen && (
          <div className="mt-2 bg-white shadow-md rounded p-2">
            <div
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setTime("17:00");
                setTimeDropdownOpen(false);
              }}
            >
              17:00
            </div>

            <div
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setTime("18:00");
                setTimeDropdownOpen(false);
              }}
            >
              18:00
            </div>

            <div
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setTime("19:00");
                setTimeDropdownOpen(false);
              }}
            >
              19:00
            </div>
          </div>
        )}

        {/* Duration of the booking dropdowwn */}
        <div 
        className="flex justify-between items-center text-white p-4 bg-red-600 rounded-2xl font-medium cursor-pointer"
        onClick={() => setDurationOpen(!DurationOpen)}
        >
          {duration || "How long do you want to book for?"} 
          <ChevronDown />
        </div>

        

        {DurationOpen && (
        <div className="mt-2 bg-white shadow-md rounded p-2">
        <div 
        className="p-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setDuration("15 minutes")
          setDurationOpen(false);
        }}
        >
          15 minutes
        </div>

        <div 
        className="p-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setDuration("20 minutes")
          setDurationOpen(false);
        }}
        >
          20 minutes
        </div>

        <div 
        className="p-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setDuration("30 minutes")
          setDurationOpen(false);
        }}
        >
          30 minutes
        </div>
        </div>
        
        )}

        {/* NEXT BUTTON - SIMPLE DIV */}
        <Link to="/confirm-booking"
        state={{ date, service, time, duration }}
        > 
        <div
          onClick={onNext}
          className="w-100 mt-20 rounded-2xl py-4 text-lg text-center bg-black hover:bg-gray-300 hover:text-black text-white cursor-pointer"
        >
          Confirm Booking → 
        </div>
        </Link>

        <Link to="/contact">
        <div
          onClick={onNext}
          className="w-100  rounded-2xl py-4 text-lg text-center bg-black hover:bg-gray-300 hover:text-black text-white cursor-pointer"
        >
          Back
        </div>
        </Link>
      </div>
    </div>
  );
}