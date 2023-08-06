import React from 'react'
import { useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
const Modal = ({ product, closeModal }) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [])
    console.log(product)
    return (
        <>
            <div className='w-screen fixed top-0 left-0 right-0 bottom-0 z-20 backdrop-blur-md'>
                <div className='sm:w-[85%] sm:h-[85%] w-[92%] h-[70%] bg-slate-300 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2'>
                    <button
                        className='text-3xl border-2 border-gray-600 absolute top-0 right-0'
                        onClick={closeModal}>
                        <RxCross2 />
                    </button>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2'>
                            <div className='mt-6'>
                                <h2 className='sm:text-xl text-xl text-center font-normal text-slate-600 mb-3'>Products and Service Information</h2>
                                <p className='text-base text-black font-normal'>{product?.description}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-medium mb-1'>MATERIAL AND WOOD FINISH</p>
                            <p className='text-base bg-slate-500 w-[90px] p-1 text-center pt-2 mb-3 text-white'>{product?.material}</p>
                            <p className='text-sm font-medium mb-1'>MATERIAL AND WOOD FINISH (COLOR)</p>
                            <p className='text-base bg-orange-900 w-[90px] h-10 text-center pt-2 mb-6 text-white'>{product?.color}</p>
                            <p className='text-sm font-medium mb-1'>PARTS COLOR AND/OR FABRIC</p>
                            <p className='text-sm  w-full text-start py-2 pl-2 mb-10 text-slate-700 border-2'>{product?.parts}</p>
                            <span className='text-2xl '>{product?.price}</span>
                            <span className='text-sm  text-red-500'>Discount Applied</span>
                            <p className='text-sm text-slate-600 '>EMI options starting from 3,642 BDT</p>
                            <p className='text-sm text-slate-600 mb-[80px]'>*Price changes if Size/ Fabric/ Color/ Material changes.</p>
                            <button className='border-2 w-full h-12 text-xl font-medium hover:bg-red-500 duration-200 hover:text-white hover:border-gray-50 border-black'>ORDER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
