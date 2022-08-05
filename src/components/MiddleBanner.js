import React from 'react';
import doc from '../images/doc.jpg'

function MiddleBanner() {
  return (
      <div className='middle-banner md:ml-28 flex flex-col md:flex-row md:justify-around '>
          <div className='left-side order-2 w-12/12 md:w-6/12 flex flex-col items-center justify-center md:order-1'>
              <h3 className='w-8/12 md:w-4/5 text-3xl font-semibold md:text-2xl 
                -ml-10 md:-ml-6 text-indigo-700 md:font-bold mt-32 md:mt-0'>
                Get In Touch With the best Doctors And The Best Medical Services From your House!
              </h3>
              <p className='-ml-16 mr-1 w-3/5 md:w-4/5 md:ml-3 md:mr-5 my-9 md:m-9 leading-5 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin
                consectetur arcu. Vivamus fermentum</p>
                <button className='w-40 py-4 md:py-2 px-4 rounded-2xl tracking-wider -ml-36
                  font-semibold text-gray-200 bg-indigo-700 md:w-32 md:-ml-60 hover:w-40 hover:bg-indigo-500 
                  hover:tracking-widest hover:shadow-md hover:shadow-indigo-700 hover:transition-all'>Start Now</button>
          </div>

          {/* hover:bg-indigo-500 */}
           <div className='img right-side w-12/12 flex order-1 md:order-2 md:w-6/12'>
               <img className='rounded-none md:rounded-full w-full h-full -mb-32  z-20 md:mb-0 md:w-96 md:h-96 my-4 ' src={doc} alt="Doctor Appointment" />
           </div>
      </div>
  )
}

export default MiddleBanner;
