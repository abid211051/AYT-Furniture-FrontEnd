import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://final-project-server-node.vercel.app/review`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    // console.log(reviews)
    return (
        <> 
            <h1 className='text-4xl'>Honorable Customer Review</h1>
            <Carousel autoPlay interval="3000" infiniteLoop showThumbs={false} className='my-24'>
                {reviews?.map((cmm) => (
                    <div className='w-[93vw] mx-auto bg-teal-100 h-[350px] flex justify-center items-center' key={cmm?._id}>
                         <p className='text-3xl'>{cmm?.review}</p>
                    </div>
                ))}

            </Carousel>
        </>
    )
}

export default Review
