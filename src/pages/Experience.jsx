import React from 'react'
import jslogo from '../assets/js.png'
import htmllogo from '../assets/html.png'
import csslogo from '../assets/css.png'
import bootstraplogo from '../assets/bootstrap.png'
import jquerylogo from '../assets/jquery.png'
import reactlogo from '../assets/react.png'
import mongodblogo from '../assets/mongodb.png'
import nodejslogo from '../assets/nodejs.png'
import tailwindlogo from '../assets/tailwind.png'
import expressjslogo from '../assets/express.png'

const icons = [
    {
        id: 1,
        icon: htmllogo,
        title: "html",
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        icon: csslogo,
        title: "css",
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        icon: jslogo,
        title: "js",
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        icon: reactlogo,
        title: "react",
        style: 'shadow-cyan-700'
    },
    {
        id: 5,
        icon: tailwindlogo,
        title: "tailwind",
        style: 'shadow-cyan-500'
    },
    {
        id: 6,
        icon: bootstraplogo,
        title: "bootstrap",
        style: 'shadow-purple-500'
    },
    {
        id: 7,
        icon: nodejslogo,
        title: "node js",
        style: 'shadow-green-500'
    },
    {
        id: 8,
        icon: expressjslogo,
        title: "node js",
        style: 'shadow-white'
    },
]

const Experience = () => {
    return (
        <div name="Experience" className='w-full min-h-screen bg-black py-5'>
            <div className="container">
                <h1 className='text-6xl font-bold text-slate-200 border-b-4 border-gray-600 inline-block my-6'> Experience </h1>

                <div className="skills grid sm:grid-cols-2 lg:grid-cols-3 my-3 gap-2 gap-y-16 place-items-center">

                    {
                        icons.map((icon, i) => (
                            <div key={i} className={`skil w-[80%] h-[320px] ${icon.style} flex justify-center items-center rounded shadow-md  p-2 hover:cursor-pointer`}>
                                <img src={icon.icon} alt="" />

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Experience