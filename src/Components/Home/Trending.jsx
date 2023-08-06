import React, { useState } from 'react';
import Modal from './Modal';
import {TbPlayerTrackNext, TbPlayerTrackPrev} from 'react-icons/tb';

const Trending = ({trending}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, setCount] = useState(3);
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const showmore = ()=>{
    setCount(prev => prev + 2);
  }
  const showless = ()=>{
    setCount(prev => prev > 2 ? prev - 2 : prev);
  }
  return (
    <>
      <div className='my-20 font-sans'>
        <h1 className='sm:text-5xl text-[13vw] font-bold mb-1'>TRENDING THIS WEEK</h1>
        <p className='text-orange-500'>Find a bright ideal to suit your taste with our top trending products of this week.</p>
        <div className='flex justify-evenly flex-wrap gap-4 my-8'>
          {trending?.length > 0 &&
            trending.slice(0, count)?.map((item) => (
              <div className='h-[350px] bg-slate-400 relative group shadow-lg' key={item._id} onClick={() => openModal(item)}>
                <img src={item.image} alt="" className='w-full h-full' />
                <div className='w-full top-0 left-0 h-0 absolute opacity-0 group-hover:opacity-100 group-hover:h-full bg-indigo-700 duration-300 flex items-center cursor-pointer justify-center'>
                  <h1 className='text-4xl text-white text-center'>CLICK FOR DETAILS</h1>
                </div>
              </div>
            ))}
          {selectedProduct && <Modal product={selectedProduct} closeModal={closeModal} />}
        </div>
        <div className='flex justify-start items-center mt-8 gap-6 flex-wrap'>
        <button 
        className='text-base font-medium active:text-orange-500 active:border-orange-500 border-b-2 flex justify-center items-center gap-1' 
        onClick={showmore}>
            <TbPlayerTrackNext/>
            Show More
        </button>
        <button 
        className='text-base font-medium active:text-orange-500 active:border-orange-500 border-b-2 flex justify-center items-center gap-1' 
        onClick={showless}>
            <TbPlayerTrackPrev/> 
            Show Less
        </button>
      </div>
      </div>
    </>
  );
};

export default Trending;
