import React from 'react'
import Nav from '../Home/Nav'
import Footer from '../Footer/Footer';
import Addfurnitureform from './Addfurnitureform';

const Addfurniture = () => {
  return (
    <>
      <Nav/>
      <div className='px-8'>
      <Addfurnitureform/>
      </div>
      <Footer/>
    </>
  )
}

export default Addfurniture;
