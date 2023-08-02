import React from 'react'
import MsgImage from '../assets/message.png'
import animation from '../assets/animation.gif'
import svg from '../assets/message.svg'

const Contact = () => {
    return (
        <div name="Contact" className={`w-full md:h-screen bg-gradient-to-br from-[#001C30] to-[#000000] py-4`}>


            <div className="container bg-transparent">


                <div className="msg-img w-[400px] mx-auto">
                    <img src={svg} alt="" />
                </div>
                <form action="https://formspree.io/f/xoqojkqq" method='POST' className='flex mx-auto justify-center items-center flex-col p-3 space-y-3 w-[400px] '>
                    
                    <h1 className='text-xl underline font-bold text-gray-200'> Send Us Message.. </h1>

                    <input className='w-full bg-gray-700 text-base px-3 py-1 rounded shadow text-slate-200 focus:outline-none border-2 border-slate-500 focus:border-2 focus:border-blue-400' type="text" name="name" id="" placeholder='Name..' required />

                    <input className='w-full bg-gray-700 text-base px-3 py-1 rounded shadow text-slate-200 focus:outline-none border-2 border-slate-500 focus:border-2 focus:border-blue-400' type="text" name="email" id="" placeholder='Email..' />


                    <textarea className='w-full bg-gray-700 text-base px-3 py-1 rounded shadow text-slate-200 focus:outline-none border-2 border-slate-500 focus:border-2 focus:border-blue-400 resize-none' name="text" id="" cols="15" rows="10" placeholder='Write text here..'></textarea>

                    <button className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 w-full py-1 text-slate-200 rounded'> Submit </button>
                </form>




            </div>

        </div>
    )
}

export default Contact