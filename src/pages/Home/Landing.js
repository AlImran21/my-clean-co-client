import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl 1.png';

const Landing = () => {
    return (
        <>
            <div class="hero lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p
                            className='text-sm'>Best Quality
                        </p>
                        <h1
                            class="text-5xl font-bold"
                            data-aos='fade-right'
                            data-aos-delay='400'
                            data-aos-duration='900'
                        >
                            Professional Cleaning <br /> Service
                        </h1>
                        <p
                            class="py-6 max-w-xl"
                            data-aos='fade-right'
                            data-aos-delay='600'
                            data-aos-duration='900'
                        >
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button
                            class="btn btn-primary"
                            data-aos='zoom-in'
                            data-aos-delay='1300'
                        >
                            Get Started
                        </button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={bucketGirl} class="h-full" alt='' />
                    </div>
                </div>
            </div>
            <div className='shadow-lg p-10 w-5/6 rounded-2xl mx-auto relative z-20 bg-base-200 mt-[-18px] mb-80 '>
                <h1 className='text-2xl text-primary mb-4 '>Get Free Estimate</h1>
                <div className='grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-2 md:grid-cols-2 md:gap-2'>
                    <input type="text" placeholder="Your Name" class="input input-bordered w-full" />
                    <input type="text" placeholder="Phone Number" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full" />
                    <input type="text" placeholder="Number of Bedrooms" class="input input-bordered w-full" />
                    <input type="text" placeholder="Number of Bathrooms" class="input input-bordered w-full" />
                    <input type="text" placeholder="Frequency of Cleaning" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-4'>Request a Quote</button>
            </div>
        </>
    );
};

export default Landing;