import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import profileImg from '../assets/kamrul1.jpg'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Home = () => {
    return (
        <div className='bg-gradient-to-b from-black pt-24 md:pt-0 to-gray-800 w-full md:h-screen py-4' name="Home">
            <div className="container sm:text-center md:text-left md:flex justify-between items-center h-full gap-4">
                <div className="content basis-1/2 flex flex-col gap-6">

                    <div className='my-4'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                "I'm a Full Stack Developer",
                                1000,
                                "I'm Expert in React,Next",
                                1000,
                                "I'm Expert in Node,Express",
                                1000,
                                "I'm Expert in REST api",
                                1000,
                            ]}
                            speed={500}
                            style={{ fontSize: '60px' }}
                            repeat={Infinity}
                            className='text-4xl md:text-6xl text-white font-bold'
                        />
                    </div>

                    <p className='text-gray-500 text-base'> I have 2 years of exprience building and desgining software currently. I love to workon web application using technology like React, Tailwind, Next, Express</p>

                    <div className='sm:mx-auto md:ml-0'>
                        <button className='group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500'> Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardDoubleArrowRight size={25} className='ml-1' />
                            </span>
                        </button>
                    </div>

                </div>
                <div className="my-image basis-1/3 sm:mx-auto md:basis-1/2 w-[100%] sm:w-[60%] md:w-full text-center mt-6 md:mt-0">
                    <img src={profileImg} alt="kamrul " className='border-[6px] rounded border-cyan-500 shadow cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default Home