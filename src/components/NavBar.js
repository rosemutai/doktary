import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const NavBar = () => {

    const [displayNavBar, setDisplayNavBar] = useState(false)
    return(
        <div className='nav-bar w-full flex flex-col justify-between md:h-20
            md:flex-row md:justify-around md:items-center'>
            <div className='logo-hamburger flex justify-between '>
                <h2 className='font-bo text-2xl text-gray-500'>Doktar
                    <span className='text-indigo-700 font-extrabold font-serif text-4xl'>y</span>
                </h2>
                <button onClick={() =>setDisplayNavBar(!displayNavBar)}>
                    
                    {!displayNavBar
                    ?
                        (<i className='fa fa-bars h-24 w-24 text-indigo-700 md:hidden cursor-pointer'></i>)
                    :

                        (<i className='fa fa-times h-24 w-24 text-indigo-700 md:hidden cursor-pointer'></i>)
                    }   
                </button>
            </div>
            
            <div className='menu-links hidden md:flex md:flex-row md:justify-around md:items-center'>
                <Link to='/' className='text-gray-500 hover:text-indigo-700 font-bold border-transparent 
                    border-b-2 hover:border-b-2 hover:border-indigo-500 md:mr-3'>Home</Link>
                <Link to='/about' className='text-gray-500 hover:text-indigo-700 font-bold border-transparent
                    border-b-2 hover:border-b-2 hover:border-indigo-500 md:mr-3' >About</Link>
                <Link to='/book-appointment' className='text-gray-500 hover:text-indigo-700 font-bold border-transparent
                    border-b-2 hover:border-b-2 hover:border-indigo-500 md:mr-3'>Book Appointment</Link>
                <Link to='/contactus' className='text-gray-500 hover:text-indigo-700 font-bold border-transparent
                    border-b-2 hover:border-b-2 hover:border-indigo-500 md:mr-3'>Contact Us</Link>

                {/* hover:transition-all */}
            </div>
            

            <Transition
                show={displayNavBar}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >

                {(ref) => (
                    <div ref={ref} className='md:hidden menu-links flex flex-col justify-around items-center h-screen
                    bg-violet-100 text-gray-500 font-bold absolute z-20 w-full'>
                        <Link to='/' className='text-gray-500 hover:text-indigo-700 font-bold border-transparent 
                            border-b-2 hover:border-b-2 hover:border-indigo-500 '>Home</Link>
                        <Link to='/about' className='text-gray-500 hover:text-indigo-700 font-bold border-transparent
                            border-b-2 hover:border-b-2 hover:border-indigo-500' >About</Link>
                        <Link to='' className='text-gray-500 hover:text-indigo-700 font-bold border-transparent
                            border-b-2 hover:border-b-2 hover:border-indigo-500'>Book Appointment</Link>
                        <Link to='/contactus' className='text-gray-500 hover:text-indigo-700 font-bold border-transparent
                            border-b-2 hover:border-b-2 hover:border-indigo-500'>Contact Us</Link>
                    </div>
                )}

            </Transition>
        </div>
    )
};

export default NavBar;
