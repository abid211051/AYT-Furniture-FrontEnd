import React from 'react'
import Nav from '../Home/Nav'
import Footer from '../Footer/Footer'
import Contactinfo from './Contactinfo'
import Contactinput from './Contactinput'
const Contact = () => {
  return (
    <>
      <Nav />
      <div className='max-w-[100vw] bg-contact md:py-[100px]'>
        <div className='lg:w-[60%] w-[80%] mx-auto flex flex-col justify-center items-center pt-20'>
          <h1 className='sm:text-3xl text-[8vw]'>Our Corporate Offices & Factories</h1>
          <div className='grid lg:grid-cols-2 md:p-10 py-9'>
            <Contactinfo />
          </div>
        </div>
      </div>
      <div className='max-w-[100vw] bg-white md:py-[100px] py-8'>
        <Contactinput/>
      </div>
      <Footer />
    </>
  )
}

export default Contact
