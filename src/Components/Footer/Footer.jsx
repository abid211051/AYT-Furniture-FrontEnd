import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className='pt-5 bg-slate-200'>
                <div className='grid md:grid-cols-4 gap-8 md:px-28 md:mb-16 px-5'>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-medium mb-2'>AYT-FURNITURE</h2>
                        <p>AYT-Furniture is considered to be the ‘game-changer’ in Bangladesh’s furniture industry.
                            Carefully-chosen raw material,
                            environment-friendly business practice and customer-centric approach is what made AYT-Furniture a beloved brand at home and abroad.</p>
                        <img src="dun.png" alt="" className='w-[40%] my-8'/>
                        <div className='flex flex-wrap gap-4 text-xl '>
                            <FaFacebookF className='hover:cursor-pointer hover:text-blue-500'/>
                            <FaTwitter className='hover:cursor-pointer hover:text-sky-400'/>
                            <FaInstagram className='hover:cursor-pointer hover:text-amber-600'/>
                            <FaWhatsapp className='hover:cursor-pointer hover:text-green-600'/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl font-semibold mb-2'>OUR PRODUCTS</h3>
                        <a href="#product" className=''>Products</a>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl font-semibold mb-2'>USEFUL LINKS</h3>
                        <Link to={'/about-us'}>About Us</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-semibold mb-2'>CORPORATE OFFICE</h1>
                        <p>8 Joramtol Bazar,<br />
                            Kumira, Sitakunda,<br />
                            Chittagong-1216,<br />
                            Bangladesh.<br />
                            Tel: +88 02 58054370<br />
                            Phone: +88 01713441000<br />
                            Email: info@AYT.com<br />
                        </p>
                    </div>
                </div>
                <hr className='h-[3px] bg-slate-900' />
            </div>
            <div className=' sm:p-6 bg-black'>
                <div className='font-sans text-slate-100 text-sm w-[80%] mx-auto'>
                <p className='md:my-10'>WE DELIVER IN<br/>
                    Bangladesh: Dhaka City, Dhaka Division, Mymensingh Division, Chittagong City, Chittagong Division, Rajshahi Division, Rangpur Division, Khulna Division, Sylhet Division, Barisal Division
                    Overseas: Please contact your respective showroom</p>
                <p className='text-center'>Copyright © 2022 <span className='font-bold'>AYT</span>. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
