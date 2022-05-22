import axios from 'axios';
import {getDay, setHours, setMinutes } from 'date-fns';
import {React, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


import NavBar from '../components/NavBar';

const BookAppointment = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [appointmentdate, setAppointmentDate] = useState(setHours(setMinutes(new Date(), 60), 8))
    const [message, setMessage] = useState('');
    // const [error, setError] = useState('')

    const onFirstNameChange = (event) =>{
        setFirstName(event.target.value)
    }

    const onLastNameChange = (event) =>{
        setLastName(event.target.value)
    }
    const onEmailChange = (event) =>{
        setEmail(event.target.value)
    }

     const onPhoneChange = (event) =>{
         setPhone(event.target.value)
     }

    const onAppointmentDateChange = (date) =>{
        setAppointmentDate(date)
    }
   


    const handleSubmit = (e) =>{
        e.preventDefault();
        // const appointmentDetails = {firstname, lastname, phone, appointmentdate} 
        // console.log(appointmentDetails)
        axios({
            method: 'POST',
            url: 'http://localhost:8000/book-appointment/',
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                appointmentdate: appointmentdate

            }
        })
        .then(response =>{
            console.log(response.data)
            resetForm()
            setMessage(`Dear ${firstname}, your appointment is set for date ${appointmentdate.toLocaleString()}`)
        })
        .catch(error =>{
            console.log(error)
        })
       
        

    }

    // Empty form fields after submitting form
    const resetForm = () =>{
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setAppointmentDate(null);

    }

    // Exclude weekends
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
  };

    // filter passed time
    const filterPassedTime = (time) =>{
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    }


    return(
        <div className='contact w-full h-5/6 flex flex-col bg-slate-200'>
            <NavBar/>
                {message ? <h2 className='w-8/12 text-violet-100 py-3 bg-indigo-700 mx-auto'>
                {message}</h2> :<h2 className='w-8/12 opacity-0'>{message}</h2> }
                <div className='bg-violet-100 w-11/12 md:w-8/12 mt-8 flex mx-auto shadow-md'>
                    {/* <div className='bg-violet-100 w-8/12 mt-8 flex mx-auto shadow-md'> */}
                    <div className='w-9/12'>
                        <h2 className='font-semibold text-indigo-700 text-4xl ml-4 my-4'>Schedule an Appointment</h2>
                    <p className='text-gray-500  w-11/12 md:w-6/12 mx-4 mt-8 mb-24'> Fill in the form below to schedule an appointment with a doctor</p>
                    </div>
                    <div className='quick-contacts w-3/12 bg-indigo-700'></div>
                    
                </div>

                <div className='w-11/12 md:w-8/12 h-96 mx-auto flex shadow-xl   mt-0'>
                    <div className='form-section  w-9/12'>
                         {/* <div className='form-section  w-9/12 bg-yellow-700'> */}
                        <form onSubmit={handleSubmit} className=' text-gray-500 bg-violet-100 border-0 mx-auto 
                         flex  flex-col  justify-around -mt-16'>
                        
                            <div className='ml-4 flex flex-col justify-start'>
                                <label className='text-gray-500 font-semibold' htmlFor='firstname'>First Name</label>
                                <input className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
                                    text-gray-500 focus:outline-none focus:shadow-md mb-4' type="text" id='name' value={firstname} 
                                    onChange={onFirstNameChange} required
                                />
                            </div>

                            <div className='ml-4 flex flex-col justify-start'>
                                <label className='text-gray-500 font-semibold' htmlFor='name'>Last Name</label>
                                <input className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
                                    text-gray-500 focus:outline-none focus:shadow-md mb-4' type="text" id='name' value={lastname} 
                                    onChange={onLastNameChange} required
                                />
                            </div>

                            <div className='ml-4 flex flex-col justify-start'>
                                <label className='text-gray-500 font-semibold' htmlFor='email'>Email</label>
                                <input className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700
                                    text-gray-500 focus:outline-none focus:shadow-md mb-4' type="text" id='email' 
                                    value={email} onChange={onEmailChange}
                                />
                            </div>

                            <div className='ml-4 flex flex-col justify-start'>
                                <label className='text-gray-500 font-semibold' htmlFor='phone'>Phone</label>
                                <input className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
                                    text-gray-500 focus:outline-none focus:shadow-md mb-4' type="tel" id='phone' 
                                    value={phone} onChange={onPhoneChange} placeholder="Phone format +254789567000" required/>
                            </div>

                            <div className='w-full md:w-9/1 border-0 '>
                                <label className='text-gray-500 ml-4 font-semibold' htmlFor='message'>Pick a date</label>
                               
                                    <DatePicker
                                        selected={appointmentdate}
                                        onChange={ onAppointmentDateChange }
                                        minDate={new Date()}
                                        filterDate={isWeekday}
                                        filterTime={filterPassedTime}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        minTime={setHours(setMinutes(new Date(), 0), 8)}
                                        maxTime={setHours(setMinutes(new Date(), 30), 16)}
                                        dateFormat="d MMMM, yyyy h:mm aa"
                                        name="appointmentDate"
                                        placeholderText="Format is DD/MM/YYYY"
                                        className='w-full md:w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
                                            focus:outline-none focus:shadow-md mt-5 mb-4 pl-4'                            
                                    />
                                
                            </div>

                            <div className='submit-btn w-full mb-6'>
                                <button className='w-6/12 md:w-4/12 ml-50 my-2  py-4 tracking-widest
                                    font-semibold text-gray-200 bg-indigo-700 hover:bg-indigo-500
                                    hover:shadow-md hover:shadow-indigo-700 hover:transition-all'>Make Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='quick-contacts w-3/12 bg-indigo-700  h-full shadow-md relative'>
                        
                        <div className='rect w-96 h-96 bg-gray-300 absolute mt-3 right-0 bottom-1/4 opacity-20'></div>
                    </div>
            </div>

            <br/>
            <br/>
            <br/>


        </div>
    )
};

export default BookAppointment;














































