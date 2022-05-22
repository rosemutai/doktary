import React from 'react';
import NavBar from '../components/NavBar';
import dokk from '../images/dokk.jpg'
import fff from '../images/fff.jpg'

const About = () => {
    return (
        
        <div className='w-full  flex flex-col pb-20  min-h-screen bg-violet-100'>
            <NavBar/>
           <h3 className='font-bold text-2xl text-center text-indigo-500 my-5 mx-auto'>Who We are</h3>
            <div className='w-9/12 md:w-6/12 h-80 md:h-64 my-0 mx-auto shadow-sm shadow-indigo-500 rounded-xl px-4 md:px-8'>
                 <p className='text-gray-500 leading-8 h-full'>Lorem Ipsum is simply dummy text of the printing and typesetting
                     industry. Lorem Ipsum has been the industry's standard dummy text 
                     ever since the 1500s, when an unknown printer took a galley of type 
                     and scrambled it to make a type specimen book. It has survived not 
                     only five centuries, but also the leap into electronic typesetting, 
                     remaining essentially unchanged. It was popularised in the 1960s with 
                     the release of Letraset sheets containing Lorem Ipsum passages, and
                     more recently with desktop publishing software like Aldus PageMaker
                     including versions of Lorem Ipsum.
                 </p>
             </div>
            

            

            <div className='docs flex-col justify-evenly md:justify-between mt-8'>
                <h3 className=' text-2xl font-bold  my-8 
                text-center text-indigo-500  mx-auto'>Meet Our Top Notch Founders</h3>
                <div className='doc1 w-8/12 md:h-96 md:mt-4 md:mb-4 mx-auto flex justify-between border-transparent shadow
                    flex-col md:flex-row'>
                    <img className='w-full md:w-3/6' src={fff} alt="Dr. Taliban Wan"/>
                    <div className='aboutDoc w-full md:w-3/6 flex flex-col justify-evenly '>
                        <h4 className='mb-3 mt-3 md:-mb-5 px-4 font-bold text-gray-500  text-2xl'>Dr. Meiban Kylee</h4>
                        <p className=' px-4 text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text 
                            ever since the 1500s, when an unknown printer took a galley of type 
                            and scrambled it to make a type specimen book. It has survived not 
                            only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with 
                            the release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>

                <div className='doc2 w-8/12 h-96  mb-12 mt-6 md:mt-4 md:mb-4 mx-auto flex justify-between border-transparent shadow
                    flex-col md:flex-row'>
                    <img className='w-full md:w-3/6' src={dokk} alt="Dr. Taliban Wan"/>
                    <div className='aboutDoc w-full md:w-3/6 flex flex-col justify-evenly'>
                        <h4 className='mb-3 mt-3 md:-mb-5 px-4 font-bold text-gray-500  text-2xl'>Dr. Taly Wan</h4>
                        <p className='px-4 text-gray-500 mb-8 md:mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text 
                            ever since the 1500s, when an unknown printer took a galley of type 
                            and scrambled it to make a type specimen book. It has survived not 
                            only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with 
                            the release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
               
               
            </div>
        </div>
    )
};

export default About;
