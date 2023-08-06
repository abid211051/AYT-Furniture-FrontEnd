import React from 'react'
import { useEffect, useState } from 'react'
import Nav from './Nav'
import Homebanner from './Homebanner'
import Trending from './Trending'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Products from '../Products/Products'
import { useLoaderData } from 'react-router-dom'
import Review from '../Reviews/Review'

const Home = () => {
const allproduct = useLoaderData();
const trending = allproduct.filter((product)=>product.trending == 'yes');

  return (
    <>
      <div className='max-w-[93vw] mx-auto'>
        <Nav />
      </div>
      <header className='max-w-[93vw] mx-auto'>
        <Homebanner />
        <Trending trending={trending}/>
      </header>
      <main className='max-w-[95vw] mx-auto'>
        <Products products={allproduct}/>
        <Review/>
      </main>
      <footer className='max-w-[100vw] mx-auto'>
        <Footer/>
      </footer>
    </>
  )
}

export default Home;
