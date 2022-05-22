import axios from 'axios';
import React, {useState} from 'react';

import NavBar from '../components/NavBar';

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState('');
    

    const onNameChange = (event) =>{
        setName(event.target.value)
    }

    const onEmailChange = (event) =>{
        setEmail(event.target.value)
    }

     const onSubjectChange = (event) =>{
         setSubject(event.target.value)
     }

    const onMessageChange = (event) =>{
        setMessage(event.target.value)
    }
   


    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // const data = {name, email, subject, message}
        axios({
            method: "POST",
            url: "http://localhost:8000/contact/",
            data:{
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        }).then(response =>{
            console.log(response.data)
            resetForm();
            setSubmitted(`Thank you ${name} for contacting us, we will get back to you as soon as possible`)
        }).catch(error =>{
            console.log(error)
        })

        
    }

    const resetForm = () =>{
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

    }


    return(
        <div className='contact w-full min-h-screen flex flex-col bg-slate-200'>
            <NavBar/>
            {submitted ? <h2 className='w-8/12 text-violet-100 py-3 bg-indigo-700 mx-auto'>
                {submitted}</h2> :<h2 className='w-8/12 opacity-0'>{submitted}</h2> }
                <div className='bg-violet-100 w-8/12 mt-8 flex mx-auto shadow-md'>
                    
                    <div className='w-9/12'>
                        <h2 className='font-semibold text-indigo-700 text-4xl ml-4 my-4'>Contact Us</h2>
                    <p className='text-gray-500  w-6/12 m-4'> Feel Free to contact us anytime. We will get back to you as soon as we can.</p>
                    </div>
                    <div className='quick-contacts w-3/12 bg-indigo-700'></div>
                    
                </div>

                <div className='w-8/12 h-96 mx-auto flex shadow-xl'>
                    <div className='form-section bg-violet-100 w-9/12 '>
                        <form onSubmit={handleSubmit} className=' text-gray-500 bg-violet-100 border-0 mx-auto flex  flex-col 
                         justify-around h-full'>
                        
                            <div className='ml-4 flex flex-col justify-start'>
                                <label className='text-gray-500' htmlFor='name'>Name</label>
                                <input className='w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
                                focus:outline-none focus:shadow-md' type="text" id='name' value={name} onChange={onNameChange} required/>
                            </div>

                            <div className='ml-4 flex flex-col justify-start'>
                                <label className='text-gray-500' htmlFor='email'>Email</label>
                                <input className='w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700
                                focus:outline-none focus:shadow-md'type="text" id='email' value={email} onChange={onEmailChange} required/>
                            </div>

                            <div className='ml-4 flex flex-col justify-start'>
                                <label className='text-gray-500' htmlFor='subject'>Subject</label>
                                <input className='w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
                                focus:outline-none focus:shadow-md' type="text" id='subject' value={subject} onChange={onSubjectChange} required/>
                            </div>

                            <div className='ml-4 flex flex-col justify-start'>
                                <label className='text-gray-500' htmlFor='message'>Message</label>
                                <textarea className='w-9/12 bg-violet-100 border-0 border-b-1 border-indigo-700 
                                focus:outline-none focus:shadow-md' type="text" id='message' value={message} onChange={onMessageChange} required></textarea>
                            </div>

                            <div className='submit-btn ml-4'>
                                <button className='w-4/12 ml-50   py-2 px-4  tracking-widest
                                    font-semibold text-gray-200 bg-indigo-700 hover:bg-indigo-500 hover:tracking-widest
                                    hover:shadow-md hover:shadow-indigo-700 hover:transition-all'>Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='quick-contacts w-3/12 bg-indigo-700 h-full shadow-md relative'>

                        <div className='rect w-96 h-80 bg-gray-300 absolute mt-3 right-0 bottom-1/4 opacity-20'></div>
                    </div>
            </div>

            <br/>
            <br/>
            <br/>


        </div>
    )
};

export default ContactUs;
