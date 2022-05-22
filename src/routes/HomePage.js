import React from 'react';
import Advertisement from '../components/Advertisement';
import BottomBanner from '../components/BottomBanner';
import Footer from '../components/Footer';
import MiddleBanner from '../components/MiddleBanner';
import NavBar from '../components/NavBar';


const HomePage = () => {
    return(
        <div className='w-11/12 md:w-9/12 h-5/6 mx-auto  bg-violet-100 shadow-lg shadow-gray-400 z-10'>
            <NavBar />
            <MiddleBanner />
            <hr className='border-0 border-b-2 md:w-8/12 md:mx-auto md:mt-2 shadow-md shadow-gray-500'/>
            <Advertisement />
            <BottomBanner />
            <Footer />
           
            
        </div>
    )
};

export default HomePage;






// import axios from 'axios';
// import { addDays, getDay, setHours, setMinutes } from 'date-fns';
// import {React, useState} from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'

// import NavBar from '../components/NavBar';

// const ContactUs = () => {

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [appointmentDate, setAppointmentDate] = useState(setHours(setMinutes(new Date(), 60), 8))
    
    

//     const onFirstNameChange = (event) =>{
//         setFirstName(event.target.value)
//     }

//     const onLastNameChange = (event) =>{
//         setLastName(event.target.value)
//     }
//     const onEmailChange = (event) =>{
//         setEmail(event.target.value)
//     }

//      const onPhoneChange = (event) =>{
//          setPhone(event.target.value)
//      }

//     const onAppointmentDateChange = (date) =>{
//         setAppointmentDate(date)
//     }
   


//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         const appointmentDetails = {firstName, lastName, phone, appointmentDate} 
//         console.log(appointmentDetails)
//         alert(`Dear ${firstName}, your appointment is set for date ${appointmentDate.toLocaleString()}`)
        
//         resetForm()
        

//     }

//     // Empty form fields after submitting form
//     const resetForm = () =>{
//         setFirstName('');
//         setLastName('');
//         setEmail('');
//         setPhone('');
//         setAppointmentDate(null);

//     }

//     // Exclude weekends
//     const isWeekday = (date) => {
//         const day = getDay(date);
//         return day !== 0 && day !== 6;
//   };


//     return(
//         <div className='contact w-full min-h-screen flex flex-col bg-slate-200'>
//             <NavBar/>
           
//                 <div className='bg-violet-100 w-11/12 md:w-8/12 mt-8 flex mx-auto shadow-md'>
//                     {/* <div className='bg-violet-100 w-8/12 mt-8 flex mx-auto shadow-md'> */}
//                     <div className='w-9/12'>
//                         <h2 className='font-semibold text-indigo-700 text-4xl ml-4 my-4'>Schedule an Appointment</h2>
//                     <p className='text-gray-500  w-11/12 md:w-6/12 mx-4 mt-8 mb-24'> Fill in the form below to schedule an appointment with a doctor</p>
//                     </div>
//                     <div className='quick-contacts w-3/12 bg-indigo-700'></div>
                    
//                 </div>

//                 <div className='w-11/12 md:w-8/12 h-96 mx-auto flex shadow-xl   mt-0'>
//                     <div className='form-section  w-9/12'>
//                          {/* <div className='form-section  w-9/12 bg-yellow-700'> */}
//                         <form onSubmit={handleSubmit} className=' text-gray-500 bg-violet-100 border-0 mx-auto 
//                          flex  flex-col  justify-around'>
                        
//                             <div className='ml-4 flex flex-col justify-start'>
//                                 <label className='text-gray-500 font-bold' htmlFor='firstname'>First Name</label>
//                                 <input className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
//                                     text-gray-500 focus:outline-none focus:shadow-md mb-8' type="text" id='name' value={firstName} 
//                                     onChange={onFirstNameChange} required
//                                 />
//                             </div>

//                             <div className='ml-4 flex flex-col justify-start'>
//                                 <label className='text-gray-500 font-bold' htmlFor='name'>Last Name</label>
//                                 <input className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
//                                     text-gray-500 focus:outline-none focus:shadow-md mb-8' type="text" id='name' value={lastName} 
//                                     onChange={onLastNameChange} required
//                                 />
//                             </div>

//                             <div className='ml-4 flex flex-col justify-start'>
//                                 <label className='text-gray-500 font-bold' htmlFor='email'>Email</label>
//                                 <input className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700
//                                     text-gray-500 focus:outline-none focus:shadow-md mb-8' type="text" id='email' 
//                                     value={email} onChange={onEmailChange}
//                                 />
//                             </div>

//                             <div className='ml-4 flex flex-col justify-start'>
//                                 <label className='text-gray-500 font-bold' htmlFor='phone'>Phone</label>
//                                 <input className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
//                                     text-gray-500 focus:outline-none focus:shadow-md mb-8' type="number" id='phone' value={phone} onChange={onPhoneChange} required/>
//                             </div>

//                             <div className='w-full md:w-9/1 border-0 '>
//                                 <label className='text-gray-500 ml-4 font-bold' htmlFor='message'>Pick a date</label>
                               
//                                     <DatePicker
//                                         selected={appointmentDate}
//                                         onChange={ onAppointmentDateChange }
//                                         minDate={new Date()}
//                                         filterDate={isWeekday}
//                                         showTimeSelect
//                                         timeFormat="HH:mm"
//                                         minTime={setHours(setMinutes(new Date(), 0), 8)}
//                                         maxTime={setHours(setMinutes(new Date(), 30), 16)}
//                                         dateFormat="MMMM d, yyyy h:mm aa"
//                                         name="appointmentDate"
//                                         placeholderText="Format is MM/DD/YYYY"
//                                         className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
//                                             focus:outline-none focus:shadow-md mt-8 mb-8 pl-4'                            
//                                     />
                                
//                             </div>

//                             <div className='submit-btn w-full mb-6'>
//                                 <button className='w-6/12 md:w-4/12 ml-50 my-4  py-4 tracking-widest
//                                     font-semibold text-gray-200 bg-indigo-700 hover:bg-indigo-500
//                                     hover:shadow-md hover:shadow-indigo-700 hover:transition-all'>Make Appointment
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className='quick-contacts w-3/12 bg-indigo-700  h-full shadow-md relative'>
                        
//                         <div className='rect w-96 h-96 bg-gray-300 absolute mt-3 right-0 bottom-1/4 opacity-20'></div>
//                     </div>
//             </div>

//             <br/>
//             <br/>
//             <br/>


//         </div>
//     )
// };

// export default ContactUs;



