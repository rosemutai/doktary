import React from 'react';
import pressure from '../images/pressure.jpg'
import happy from '../images/happy.jpg'
import pp from '../images/pp.avif'

function Advertisement() {
  return (
    <div className='second-banner w-full flex flex-col justify-center items-center'>
        
        <h2 className='font-bold text-2xl text-gray-500 mt-12 mb-4 md:my-4 '>Doktary Clinic</h2>
        <div className='text-gray-500 w-9/12 md:w-8/12 my-3 mx-auto'>
            <p className='text-center bg-slate-200 p-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin
                Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin
                consectetur arcu. Vivamus fermentum consectetur arcu. Vivamus fermentum
                consectetur arcu. Vivamus fermentum</p>
        </div>

       <div className='text-gray-500 w-9/12 md:w-8/12  my-3 mx-auto '>
            <p className='text-center bg-slate-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin
                Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin
                consectetur arcu. Vivamus fermentum consectetur arcu. Vivamus fermentum
                consectetur arcu. Vivamus fermentum</p>
        </div>
        
        <div className='statistics bg-indigo-700  w-3/6 md:w-8/12 h-40  mx-auto my-8 rounded-sm  flex 
            flex-col md:flex-row justify-center md:justify-evenly items-center shadow-md shadow-indigo-700 text-gray-400'>
            <div className='card w-full flex flex-col justify-center items-center'>
                <h4 className='font-bold text-xl'>Users</h4>
                <h5 className='font-bold'>5454</h5>
            </div>
            <div className='card w-full flex flex-col justify-center items-center'>
                <h4 className='font-bold text-xl'>Partners</h4>
                <h5 className='font-bold'>500+</h5>
            </div>
            <div className='card w-full flex flex-col justify-center items-center'>
                <h4 className='font-bold text-xl'>Sponsers</h4>
                <h5 className='font-bold'>40+</h5>
            </div>
        </div>


        <div className='cards-section flex justify-around z-10  flex-col  md:flex-row w-9/12 -mb-20'>
            <div className='card-img bg-violet-50 flex flex-col w-full md:w-64 border-transparent md:m-2 shadow-md'>
                <img src={happy}  className='w-full h-3/5' alt='happy customer'></img>
                <div className='card-bottom flex justify-around pt-6'>
                    <h5 className='font-bold text-gray-500'>Consult Anytime</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

            </div>

             <div className='card-img bg-violet-50 flex flex-col w-full md:w-64 border-transparent mt-4 md:m-2 shadow-md'>
                <img src={pp} className='w-full h-3/5' alt="mm"></img>
                <div className='card-bottom flex justify-around pt-6'>
                    <h5 className='font-bold text-gray-500'>Affordable Medicine</h5>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

            </div>

             <div className='card-img bg-violet-50 flex flex-col w-full md:w-64 border-transparent mt-4 md:m-2 shadow-md'>
                <img src={pressure} className='w-full h-3/5' alt="pressure"></img>
                <div className='card-bottom flex justify-around pt-6'>
                    <h5 className='font-bold text-gray-500'>Home Visit</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
            
        </div>
             
           
      </div>
  )
}

export default Advertisement;
