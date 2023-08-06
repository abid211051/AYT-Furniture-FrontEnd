import React from 'react'
import { Link } from 'react-router-dom'
import {GiOfficeChair} from 'react-icons/gi'
const Nav = () => {

  const navlinks = <>
    <li className='hover:text-orange-500'>
      <Link to={`/`}>Home</Link>
    </li>
    <li className='hover:text-orange-500'>
      <Link to={`/manage-product`}>Manage Product</Link>
    </li>
    <li className='hover:text-orange-500'>
      <Link to={`/add-product`}>Add Product</Link>
    </li>
    <li className='hover:text-orange-500'>
      <Link to={`/contact`}>Contact</Link>
    </li>
  </>
  return (
    <>
      <div className="navbar bg-base-100 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <GiOfficeChair className='w-[7%] h-[7%]'/>
          <Link className="btn btn-ghost normal-case text-xl font-bold">AYT-<span className='text-lime-700'>FURNITURE</span></Link>
        </div>
        <div className="navbar-end hidden lg:flex sm:mx-10">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navlinks}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
