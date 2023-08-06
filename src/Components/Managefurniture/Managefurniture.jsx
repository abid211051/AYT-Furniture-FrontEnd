import React from 'react'
import Nav from '../Home/Nav';
import Footer from '../Footer/Footer';
import Managefurniturelist from './Managefurniturelist';

const Managefurniture = () => {

  return (
    <>
    <div className='max-w-[93vw] mx-auto'>
    <Nav/>
    <div className='py-24'>
    <Managefurniturelist/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Managefurniture
