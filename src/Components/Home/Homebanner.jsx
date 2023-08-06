import React from 'react'

const Homebanner = () => {
    return (
        <>
            <div className='bg-primary grid lg:grid-cols-2 font-sans'>
                <div className='flex flex-col py-14 md:pl-36 justify-center px-6 '>
                    <div>
                    <div className='flex  items-center mt-24 mb-14 gap-3'>
                        <span className='w-[3px] h-10 bg-indigo-700 inline-block'>

                        </span>
                        <h3>INTERIOR<br/><span className='text-orange-500'>2018</span></h3>
                    </div>
                    <div className='mb-40'>
                        <h1 className='sm:text-6xl text-[11vw] font-bold'>
                        GREENEVILLE-290
                        </h1>
                        <h4>from <span className='text-2xl font-semibold'>72200 BDT</span></h4>
                        <button className='border-2 sm:px-11 sm:py-4 px-7 py-2 border-black text-2xl font-semibold mt-4 hover:scale-105 hover:border-red-600 duration-300'>ORDER NOW</button>
                    </div>
                    <div>
                        <h3>Design by<br/> <span className='font-semibold'>AYT</span></h3>
                    </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="Sofa3.png" className='w-full hover:scale-105 duration-300 overflow-hidden'/>
                </div>
            </div>
        </>
    )
}

export default Homebanner;
