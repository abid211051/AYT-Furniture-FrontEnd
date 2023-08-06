import React from 'react'
import Nav from '../Home/Nav'
import Footer from '../Footer/Footer'

const Aboutus = () => {
    return (
        <>
            <Nav />
            <div className='max-w-[100vw] mx-auto grid md:grid-cols-5 grid-cols-1 py-[50px] bg-third'>
                <div className='col-span-2 flex justify-end items-center'>
                    <div className='text-start md:pl-[30%] pl-[5%]'>
                        <h1 className='sm:text-5xl text-[10vw] font-normal'>Who We Are</h1>
                        <p>
                            HATIL is a fast-growing Global Furniture Brand with customers and connoisseurs around the globe.
                            The brand presents an impeccable range of wooden furniture products manufactured from the best-sourced materials and with a deft touch of seasoned artisanship.
                        </p>
                    </div>
                </div>
                <div className='col-span-3 flex justify-end items-center'>
                    <div>
                        <img src="About_us.png" alt="" className='w-full' />
                    </div>
                </div>
            </div>
            <div className='max-w-[100vw] mx-auto grid md:grid-cols-3 grid-cols-1 md:py-[100px] py-[40px] gap-4 md:px-[150px]'>
                <div className='col-span-1'>
                    <img src="manus.jpg" alt="" />
                    <h3 className='text-base font-semibold'>MD. ABID AFNAN, <br/>YAKUB ALI, <br/>TAHASIN [2020-Present]</h3>
                    <p className='text-sm'>Founder of AYT-FURNITURE Ltd.</p>
                </div>
                <div className='col-span-2'>
                    AYT-FURNITURE traces its roots to AYT Industries Ltd, a company established in 2020 by late MD.ABID. Following his footsteps, AYT-FURNITURE, as a singular furniture brand, came into being under the leadership of ABED,YAKUB, TAHASIN. They are veteran and visionary leader in country’s furniture industry.
                    Over the years, AYT-FURNITURE made itself a synonym to Elegant, Contemporary and Affordable furniture collection. Outstanding product quality and design backed by unique customer service are a few traits that helped AYT-FURNITURE lead being in the front. It’s worth mentioning that to ensure the best possible quality AYT-FURNITURE has been practicing Japanese Quality Management Philosophy “Kaizen” since 2022.
                     And, being an environment-sensible company.
                    All these things contributed in a great way making AYT-FURNITURE a favorite name across markets like US, Canada, Australia, Saudi Arabia, Kuwait, UAE, Thailand, Egypt, Russia, Nepal, Bhutan and India. In Bangladesh market, AYT-FURNITURE Furniture has been a proud awardee of HSBC-Daily Star Climate Award, 2022 in Green Operation Category.
                </div>
            </div>
            <div className='max-w-[100vw] md:mx-[150px] mx-4 grid md:grid-cols-3 grid-cols-1 bg-fourth justify-center items-center sm:mb-[100px] mb-[40px]'>
                <div className='col-span-2 sm:pl-[40px] p-5'>
                    <div className='mb-4'>
                        <h3 className='text-2xl'>Principle</h3>
                        <p className='text-base'>To do Justice and behave Ethically with our Customers, Partners, Insiders and the Communities</p>
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-2xl'>Vision</h3>
                        <p className='text-base'>To help elevate the lifestyle and living of people in general with our Innovations, Creations and Business Practices</p>
                    </div>
                    <div>
                        <h3 className='text-2xl'>Mission</h3>
                        <p className='text-base'>To stay contemporary and contextual being innovative and cutting-edge</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div>
                        <img src="About_us_principle.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='max-w-[60vw] mx-auto my-20 flex flex-col justify-center '>
                    <h1 className='text-xl font-medium text-center mb-2'>Get our Newsletter, Latest Offer, Updates</h1>
                    <form >
                        <div>
                            <input type="text"  
                            name='message'
                            className='border-2 w-[60%] h-12'/>
                            <button type='submit' className='bg-red-500 h-12 w-[30%] text-white'>SUBSCRIBE NOW</button>
                        </div>

                    </form>
                </div>
            <Footer />
        </>
    )
}

export default Aboutus
