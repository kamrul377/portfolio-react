import React from 'react'
import dots from '../assets/blur.png'

// bg-gradient-to-b from-gray-800 to-black gw-full

const About = () => {
    return (
        <div className=' md:h-screen flex items-center justify-center mt-0 py-16 md:py-0 bg-[#092635]' name='About'>
            <div className="container space-y-16">
                <h1 className='text-6xl font-bold text-slate-200 border-gray-600 inline-block relative'> <img className='absolute h-20 w-20 fill-blue-500 animate-ping' src={dots} alt="" /> About </h1>
                <p className='text-white text-base'>Hi👋, I'm Kamrul Islam, a Full-Stack Web Developer and Network Engineer with a CCNA certificate. I'm passionate about building user-friendly web applications and ensuring secure, efficient networks. With a strong foundation in both development and networking, I'm dedicated to delivering innovative solutions that bridge the digital divide. Let's connect and collaborate on your next project!</p>
            </div>
        </div>
    )
}

export default About