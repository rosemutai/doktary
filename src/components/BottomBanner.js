import React from 'react';

function BottomBanner() {
  return(
        <div className='bottom-banner w-full bg-gray-200'>
            <h3 className='pt-28 text-center text-2xl font-bold text-gray-500'>Our Services</h3>
            <div className='list-services flex justify-between w-8/12 h-4/5 my-0 mx-auto'>
                <div className='first-column mt-8'>
                    <ul className=' text-gray-500'>
                        <li className='list-disc'>Lorem Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin</li>
                        <li className='list-disc'>Lorem Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin</li>
                        <li className='list-disc'>Lorem Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin</li>
                        <li className='list-disc'>Lorem Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin</li>
                        <li className='list-disc'>Lorem Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin</li>
                        <li className='list-disc'>Lorem Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin</li>
                        <li className='list-disc'>Lorem Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin</li>
                        <li className='list-disc'>Lorem Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin</li>
                        <li className='list-disc'>Lorem Etiam nulla dolor, ullamcorper nec dolor quis, sollicitudin</li>
                    </ul>
                </div>
                <div className='second-column flex flex-col justify-evenly text-gray-500 ml-20'>
                    <div>
                        <h5 className='font-bold text-indigo-700'>Lorem Sistra</h5>
                        <p>Etiam nulla dolor, ullamcorper nec dolor quis dolor dolor</p>
                    </div>

                     <div>
                        <h5 className='font-bold text-indigo-700'>Lorem Sistra</h5>
                        <p>Etiam nulla dolor, ullamcorper nec dolor quis dolor dolor</p>
                    </div>

                    <div>
                        <h5 className='font-bold text-indigo-700'>Lorem Sistra</h5>
                        <p>Etiam nulla dolor, ullamcorper nec dolor quis dolor dolor</p>
                    </div>

                    <div>
                        <h5 className='font-bold text-indigo-700'>Lorem Sistra</h5>
                        <p>Etiam nulla dolor, ullamcorper nec dolor quis dolor dolor</p>
                    </div>

                </div>

            </div>
      </div>
  )
}

export default BottomBanner;
