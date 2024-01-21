import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const tabs = [
        {
            id: 1,
            link: 'Home',
            url: '/', 

        },
        {
            id: 2,
            link: 'About',
            url: '/about'
        },
        {
            id: 3,
            link: 'Portfolio',
            url: '/portfolio'
        },
        {
            id: 4,
            link: 'Experience',
            url: '/experience'
        },
        {
            id: 5,
            link: 'Contact',
            url: '/contact'
        },
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 text-white fixed bg-[#111] px-4 z-50'>
            <h1 className='font-sign text-5xl ml-2'>Kamrul</h1>
            <ul className='flex'>
                {
                    tabs.map((i, index) => {
                        return <li key={index} className='text-gray-400 px-4 hover:cursor-pointer hover:scale-105 duration-200 hidden md:flex hover:text-cyan-500'>
                            <Link to={i.link} smooth duration={500}> {i.link} </Link>
                        </li>
                    })
                }
                <div className="phone md:hidden cursor-pointer z-50" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>
            </ul>

            {open && <div className="phone-open flex w-full h-screen justify-center items-center bg-gradient-to-b from-black to-slate-900 absolute top-0 left-0 duration-200">
                <ul className='text-white flex flex-col gap-5'>
                    {tabs && tabs.map((i, index) => {
                        return <li className='text-gray-400 px-4 hover:cursor-pointer hover:scale-105 duration-200 text-center text-2xl'>

                            <Link  to={i.link} onClick={()=> setOpen(false)}> {i.link} </Link>
                        </li>
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default Navbar