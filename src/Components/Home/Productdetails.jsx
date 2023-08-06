import React from 'react'
import Nav from './Nav'
import Footer from '../Footer/Footer'
import { useLoaderData } from 'react-router-dom'

const Productdetails = () => {
  const details = useLoaderData();
  // console.log(details);

  return (
    <>
      <Nav />
      <div className='grid lg:grid-cols-3 grid-cols-1 pt-40 justify-center items-start px-4'>
        <div className='md:col-span-2'>
          <img src={details?.image} alt="" className='w-[90%]' />
        </div>
        <div>
          <div>
            <p className='text-sm font-medium mb-1'>MATERIAL AND WOOD FINISH</p>
            <p className='text-base bg-slate-500 w-[90px] h-10 text-center pt-2 mb-3 text-white'>{details?.material}</p>
            <p className='text-sm font-medium mb-1'>MATERIAL AND WOOD FINISH (COLOR)</p>
            <p className='text-base bg-orange-900 w-[90px] h-10 text-center pt-2 mb-6 text-white'>{details?.color}</p>
            <p className='text-sm font-medium mb-1'>PARTS COLOR AND/OR FABRIC</p>
            <p className='text-sm  w-full text-start py-2 pl-2 mb-10 text-slate-700 border-2'>{details?.parts}</p>
            <span className='text-2xl '>{details?.price}</span>
            <span className='text-sm  text-red-500'>Discount Applied</span>
            <p className='text-sm text-slate-600 '>EMI options starting from 3,642 BDT</p>
            <p className='text-sm text-slate-600 mb-[80px]'>*Price changes if Size/ Fabric/ Color/ Material changes.</p>

            <button className='border-2 w-full h-12 text-xl font-medium hover:bg-red-500 duration-200 hover:text-white hover:border-gray-50 border-black'>ORDER NOW</button>
          </div>
        </div>
      </div>
      <div className='my-16'>
        <h2 className='sm:text-3xl text-xl text-center font-normal text-slate-600 mb-8'>Products and Service Information</h2>
        <p className='text-base text-black font-normal'>{details?.description}</p>
      </div>
      <Footer />
    </>
  )
}

export default Productdetails
