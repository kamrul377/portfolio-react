import React from 'react'

import twitterdemo from '../assets/twitterdemo.png'
import mortgagecalcdemo from '../assets/mortgagecalc.png'
import eshop from '../assets/eshop.png'
import sass from '../assets/sass.png'
import weather from '../assets/weather.png'
// import { Link } from 'react-scroll'
import dots from '../assets/blur.png'
import { SiGithub } from "react-icons/si";
import { AiOutlineEye } from "react-icons/ai";

const projects = [
  {
    id: 1,
    src: twitterdemo,
    code: "https://github.com/kamrul377/twitter-design",
    demo: "https://twitter-design-murex.vercel.app/"
  },
  {
    id: 2,
    src: mortgagecalcdemo,
    code: "https://github.com/kamrul377/Mortgage_calculator",
    demo: "https://mortgage-calculator-indol.vercel.app/"
  },
  {
    id: 3,
    src: eshop,
    code: "https://github.com/kamrul377/E-commerce1",
    demo: "https://e-shop-online.vercel.app/"
  },
  {
    id: 4,
    src: sass,
    code: "https://github.com/kamrul377/sass-modern",
    demo: "https://sass-modern.vercel.app/"
  },
  {
    id: 5,
    src: weather,
    code: "https://github.com/kamrul377/weather_app",
    demo: "https://weather-app-blond-nine-52.vercel.app/"
  },
  {
    id: 6,
    src: mortgagecalcdemo,
    code: "https://github.com/kamrul377/Mortgage_calculator",
    demo: "https://twitter-design-murex.vercel.app/"
  },
]

const Portfolio = () => {
  return (
    <div name="Portfolio" className='w-full min-h-screen py-5 bg-[#22092C]'>
      <div className="container">


        <h1 className='text-6xl font-bold text-slate-200  border-gray-600 inline-block my-6 relative'> <img className='absolute h-20 w-20 fill-blue-500 animate-ping' src={dots} alt="" /> Portfolio </h1>

        <div className="projects grid sm:grid-cols-2 lg:grid-cols-3 my-3 gap-2 gap-y-16 place-items-center">

          {
            projects.map((project, i) => (
              <div key={i} className='skil w-[70%] sm:w-full h-[320px] flex justify-center items-center rounded shadow-md p-2 overflow-hidden object-cover flex-col border border-slate-600 box-border'>

                <img src={project.src} alt="" className='rounded cursor-pointer hover:scale-105 duration-300' />


                <div className="button w-full flex justify-end my-3 gap-1">
                  <button className='bg-slate-800 hover:bg-slate-700 text-white px-8 py-1 rounded '>
                    <a href={project.demo} target='_blank'>
                      <AiOutlineEye size={25} color='#CBE4DE'/>
                    </a>
                  </button>
                  <button className='bg-slate-800 text-white px-8 py-1 rounded hover:bg-slate-700'>
                    <a href={project.code} target='_blank'>
                      <SiGithub size={23} color='#CBE4DE'/>
                    </a>
                  </button>

                </div>
              </div>
            ))
          }

        </div>


      </div>

    </div>
  )
}

export default Portfolio