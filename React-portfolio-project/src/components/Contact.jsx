import {useState} from 'react'
import { useBooking } from './Booking';
import { Link, useNavigate } from 'react-router-dom';

/* FormDetail Component, second step to the booking process
-Collects customer personal details:
-First and Last Name,
-Email address + confirmation
-Country code and phone number
-Special requests
-Newsletter preferences

-Email addresses should match
-All required fields must be filled up to move on to the next page
*/

export default function Contact() {
  // Get global booking state and setter
  const { setContactData } = useBooking();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [code, setCode] = useState("+27");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");

  

  /* Validates if all required fields are filled up and if the email addresses match
  -Saves data to global state and navigates to confirmation page */

  function onNext() {
    //Validate all required fields if they are filled
    if (!firstName || !lastName || !code || !number || !email || !confirmationEmail) {
      alert("Please fill in all required fields.");
      return;
  }

  //Check that email addresses match
  if (email !== confirmationEmail) {
      alert("Email addresses do not match.");
      return;
    }

    // Save form data to global state
    setContactData(prev => ({
      ...prev,
      fullname: `${firstName} ${lastName}`,
      phone: `(${code}) ${number}`,
      email,
    }));

    // Navigate to confirmation page
    navigate("/booking-system");
}

  return (
    <div className='bg-gray-100 shadow-lg w-full max-w-4xl p-6 rounded-2xl'>
        {/* Details are placed in a grid */}
        <div className='bg-gray-700 p-4 rounded-lg text-white'>Enter your details</div>
        <div className='grid grid-cols-2 gap-2 mt-4'>
            {/* Customer personal details */}
                <input type='text' autoComplete='name' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} className='text-gray-700 bg-white p-2' required/>
                <input type='number' placeholder='(+27) South Africa' value={code} onChange={(e) => setCode(e.target.value)} className='bg-white p-2' required/>
                <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} className='bg-white p-2' required/>
                <input type='tel' placeholder='Tel (excl country code)' value={number} onChange={(e) => setNumber(e.target.value)} className='text-gray-700 bg-white p-2' required/>
                <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} className='text-gray-700 bg-white p-2' required/>
                <input type='email' placeholder='Confirm Email Address' value={confirmationEmail} onChange={(e) => setConfirmationEmail(e.target.value)} className='bg-white p-2' required/>  
        </div>
        {/* Special updates */}
        <div className='grid grid-cols-2 gap-2 mt-4'>
            <p>I'd like to receive updates & special offers from:</p>
            <p>
                Dineplan
            </p>
            <label>
                <span>Email </span>
                <input type='checkbox'/>
            </label>
            <p>
                Billy G Gold Reef City Casino Email
            </p>
            <label>
                <span>Email </span>          
                <input type='checkbox'/>
                <span>SMS </span> 
                <input type='checkbox'/>
            </label>  

            {/* Back and next button */}
            <div className='flex flex-cols-1 justify-center gap-4 '>
            <Link to='/'>
            <button
            className='bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded-lg'>Back</button>
            </Link>
            <Link to='/booking-system'>
            <button
            onClick={onNext}
            className='bg-green-500 text-white hover:bg-green-600 p-2 w-full rounded-lg'>Next</button>
            </Link>
        </div>
        </div>
       
    </div>
  );
}

