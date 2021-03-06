import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <div className='w-full flex flex-col md:flex-row text-gray-700 pb-20 bg-indigo-50'>
        <div className='first-column md:pl-36  w-full md:w-5/12 flex flex-col items-center md:items-start
         mt-8'>
            <h4 className='font-bold mt-3 text-indigo-500'>Doktary Clinic</h4>
            <p className='w-2/4 md:w-3/4 mt-2 mb-5 md:my-0 mx-auto md:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className='location flex justfy-between'>
                <FontAwesomeIcon  icon={faLocation} className="h-6 w-6 text-indigo-700 -ml-16 md:-ml-2"/>
                <p className='ml-2'>Kazkazini Road, Enzi Building</p>
            </div>

            <div className='tel flex justfy-between mt-2 -ml-14 md:-ml-1'>
                <FontAwesomeIcon  icon={faPhone} className="h-6 w-6 text-indigo-700 "/>
                 
                <p className='ml-2'>+254 000 000</p>
            </div>
        
        </div>
        <div className='second-column ml-0 md:ml-3 w-full md:w-2/4 flex justify-around items-center'>
            <div className='socials'>
                <h4 className='font-bold text-indigo-500 mt-11'>Follow Us</h4>
                <div className='flex flex-col justify-evenly h-48  items-center'>
                    <div className='facebook flex'>
                        {/* <a className='hover:opacity-60 hover:transition-opacity' href='#' > */}
                            <svg className="w-6 h-6 text-indigo-700 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
                                23.027 24 18.062 24 12.073z"/>
                            </svg>
                        {/* </a> */}
                        {/* <p className='ml-3'>dotary.ke</p> */}
                    </div>
                    
                    <div className='twitter flex'>
                        {/* <a className='hover:opacity-60 hover:transition-opacity' href='#'> */}
                            <svg className="w-6 h-6 text-indigo-700 fill-current" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92
                                4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 
                                01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                           
                        {/* </a> */}
                        {/* <p className='ml-3'>@doktarykenya</p> */}
                    </div>

                    <div className='gmail flex'>
                        {/* <a className='hover:opacity-60 hover:transition-opacity' href=''> */}
                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            
                        {/* </a> */}
                        {/* <p className='ml-3'>doktarike@gmail.com</p> */}
                    </div>
                    <div className='whatsapp flex'>
                        {/* <a className='hover:opacity-60 hover:transition-opacity' href=''> */}
                            <svg className="w-6 h-6 text-indigo-700 fill-current hover:text-gray-500 hover:font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3
                                    18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                            </svg>
                        {/* </a> */}
                        {/* <p className='ml-3'>+254 734 400 990</p> */}
                    
                </div>
            </div>
            </div>

            <div className='links'>
                
                <h4 className='font-bold text-indigo-500 mt-8'>Quick links</h4>
                <div className='flex flex-col justify-evenly h-48'>
                    <Link to='/' className='text-gray-500 hover:text-indigo-700 font-bold'>Home</Link>
                    <Link to='/about' className='text-gray-500 hover:text-indigo-700 font-bold' >Consult</Link>
                    <Link to='' className='text-gray-500 hover:text-indigo-700 font-bold'>Pricing</Link>
                    <Link to='/contactus' className='text-gray-500 hover:text-indigo-700 font-bold'>License</Link>
                </div>
            </div>
        </div>

      
        
          
    </div>
  )
}

export default Footer;
