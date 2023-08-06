import React from 'react'
import {GrMap} from 'react-icons/gr'
import {BsTelephoneForward} from 'react-icons/bs'
import {TbWorldWww} from 'react-icons/tb'
const Contactinfo = () => {
  return (
    <>
      <div className='mb-6 flex flex-col gap-3'>
              <h2 className='sm:text-2xl text-[7vw]'>Corporate Office</h2>
              <div className='flex justify-start items-center gap-1'>
              <GrMap size={20}/>
              <p className='sm:text-sm'>8 Joramtol Bazar, Kumira, Sitakunda, <br/>Chittagong-1216, Bangladesh.</p>
              </div>

              <div className='flex justify-start items-center gap-1'>
              <BsTelephoneForward/>
              <p className='sm:text-sm'>Tel: +88 02 58054370<br/>
              Mob: +88 01713441000</p>
              </div>

              <div className='flex justify-start items-center gap-1'>
                <TbWorldWww/>
                <p className='sm:text-sm'>Email: info@AYT-furniture.com<br/>
              Web: www.AYT-furniture.com</p>
              </div>
              <p className='sm:text-sm'>Google Map Location</p>
            </div>

            <div className='mb-6 flex flex-col gap-3'>
              <h2 className='sm:text-2xl text-[7vw]'>Factory</h2>
              <div className='flex justify-start items-center gap-1'>
                <GrMap size={40}/>
              <p className='sm:text-sm'>AYT-furniture Complex Ltd. Domna, Muslimtek, Kashimpur, Gazipur, (Near BKSP Savar), Bangladesh.</p>
              </div>

              <div className='flex justify-start items-center gap-1'>
                <BsTelephoneForward/>
              <p className='sm:text-sm'>Mob: +88-01713 486 753, 01713 486 741</p>
              </div>

              <div className='flex justify-start items-center gap-1'>
                <TbWorldWww/>
              <p className='sm:text-sm'>Email: info@AYT-furniture.com <br/>Web: www.AYT-furniture.com</p>
              </div>
              <p className='sm:text-sm'>Google Map Location</p>
            </div>
    </>
  )
}

export default Contactinfo
