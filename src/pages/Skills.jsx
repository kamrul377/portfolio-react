import React, { useState } from 'react'

// import skills icons
import html from '../assets/skills/html.webp'
import sass from '../assets/skills/sass.webp'
import css from '../assets/skills/css.png'
import js from '../assets/skills/js.png'
import ts from '../assets/skills/typescript.png'
import bootstrap from '../assets/skills/bootstrap.png'
import react from '../assets/skills/react.png'
import redux from '../assets/skills/redux.webp'
import tailwind from '../assets/skills/tailwind.webp'
import firebase from '../assets/skills/firebase.webp'
import git from '../assets/skills/git.webp'
import github from '../assets/skills/github.png'
import vscode from '../assets/skills/vscode.png'
import express from '../assets/skills/express.webp'
import node from '../assets/skills/nodejs.webp'
import csharp from '../assets/skills/csharp.png'
import cpp from '../assets/skills/cpp.png'
import c from '../assets/skills/c.png'
// import cpp from '../assets/skills/html.webp'
import python from '../assets/skills/py.png'
import java from '../assets/skills/java.png'
import figma from '../assets/skills/figma.png'
import mongodb from '../assets/skills/mongodb.webp'
import postman from '../assets/skills/postman.png'
import next from '../assets/skills/nextjs.png'

const skills = [
    {
        id: 1,
        category: "frontend",
        title: "html",
        icon: html,
    },
    {
        id: 2,
        title: "css",
        category: "frontend",
        icon: css,
    },
    {
        id: 3,
        title: "javascript",
        category: "frontend",
        icon: js
    },
    {
        id: 4,
        title: "typescript",
        category: "frontend",
        icon: ts,
    },
    {
        id: 5,
        title: "tailwind css",
        category: "frontend",
        icon: tailwind,
    },
    {
        id: 6,
        title: "boostrap",
        category: "frontend",
        icon: bootstrap,
    },
    {
        id: 7,
        title: "react js",
        category: "frontend",
        icon: react,
    },
    {
        id: 8,
        title: "mongoDb",
        category: "backend",
        icon: mongodb,
    },
    {
        id: 9,
        title: "node js",
        category: "backend",
        icon: node,
    },
    {
        id: 10,
        title: "sass",
        category: "frontend",
        icon: sass,
    },
    {
        id: 11,
        title: "firebase",
        category: "backend",
        icon: firebase,
    },
    {
        id: 12,
        title: "git",
        category: "tools",
        icon: git,
    },
    {
        id: 13,
        title: "github",
        category: "tools",
        icon: github,
    },
    {
        id: 14,
        title: "python",
        category: "other",
        icon: python,
    },
    {
        id: 15,
        title: "express js",
        category: "backend",
        icon: express,
    },
    {
        id: 16,
        title: "figma",
        category: "tools",
        icon: figma,
    },
    {
        id: 17,
        title: "redux",
        category: "frontend",
        icon: redux,
    },
    {
        id: 18,
        title: "vs code",
        category: "tools",
        icon: vscode,
    },
    {
        id: 19,
        title: "c",
        category: "other",
        icon: c,
    },
    {
        id: 20,
        title: "c++",
        category: "other",
        icon: cpp,
    },
    {
        id: 21,
        title: "java",
        category: "other",
        icon: java,
    },
    {
        id: 22,
        title: "postman",
        category: "tools",
        icon: postman,
    },
    {
        id: 23,
        title: "next",
        category: "frontend",
        icon: next,
    },
]

const frontend = skills.filter((skill) => skill.category === "frontend")
const backend = skills.filter((skill) => skill.category === "backend")
const tools = skills.filter((skill) => skill.category === "tools")
const other = skills.filter((skill) => skill.category === "other")




const Skills = () => {

    const [active, setActive] = useState(1)

    return (
        <div name="Experience" className='w-full min-h-screen py-5 bg-[rgb(11,19,26)]'>
            <div className="container">
                <h1 className="text-6xl font-bold border-b-4 border-slate-500 inline-block my-6 text-white">
                    Experience
                </h1>
                <div className="skills-icons ">
                    <div className="category flex justify-center w-full md:w-[80%] mx-auto font-[500] gap-1">
                        <button onClick={() => setActive(1)} className={`${active === 1 && "bg-[#569497] text-slate-800"}
                        bg-[#182930] hover:bg-[#568497] hover:text-slate-800 duration-300 text-slate-400 text-sm md:text-base hover: px-3 md:px-5 py-2 rounded shadow `}>Frontend</button>

                        <button onClick={() => setActive(2)} className={`${active === 2 && "bg-[#569497] text-slate-800"}
                        bg-[#182930] hover:bg-[#568497] hover:text-slate-800 duration-300 text-slate-400 text-sm md:text-base hover: px-3 md:px-5 py-2 rounded shadow `}>Backend</button>

                        <button onClick={() => setActive(3)} className={`${active === 3 && "bg-[#569497] text-slate-800"}
                        bg-[#182930] hover:bg-[#568497] hover:text-slate-800 duration-300 text-slate-400 text-sm md:text-base hover: px-3 md:px-5 py-2 rounded shadow `}>Tools</button>

                        <button onClick={() => setActive(4)} className={`${active === 4 && "bg-[#569497] text-slate-800"}
                        bg-[#182930] hover:bg-[#568497] hover:text-slate-800 duration-300 text-slate-400 text-sm md:text-base hover: px-3 md:px-5 py-2 rounded shadow `}>Other Languages</button>
                    </div>

                    <div className='w-full  my-5 py-4 flex gap-4 flex-wrap justify-center'>

                        {/* <div className="icon bg-[#121d27]  flex flex-col items-center justify-center gap-4 rounded shadow h-32 w-32 object-cover overflow-clip">
                                    <img className='object-cover h-16' src={skill.icon} alt={html} />
                                    <p className='text-slate-500 font-bold text-sm'>{skill.title}</p>
                                </div> */}

                        {
                            active === 1 && frontend?.map((skill, index) => {
                                return <div key={index} className="icon bg-[#121d277a]  flex flex-col items-center justify-center gap-4 rounded shadow h-32 w-32 object-cover overflow-clip">
                                    <img className='object-cover h-16' src={skill.icon} alt={html} />
                                    <p className='text-slate-500 font-bold text-sm'>{skill.title}</p>
                                </div>
                            })
                        }
                        {
                            active === 2 && backend?.map((skill, index) => {
                                return <div key={index} className="icon bg-[#121d277a]  flex flex-col items-center justify-center gap-4 rounded shadow h-32 w-32 object-cover overflow-clip">
                                    <img className='object-cover h-16' src={skill.icon} alt={html} />
                                    <p className='text-slate-500 font-bold text-sm'>{skill.title}</p>
                                </div>
                            })
                        }
                        {
                            active === 3 && tools?.map((skill, index) => {
                                return <div key={index} className="icon bg-[#121d277a]  flex flex-col items-center justify-center gap-4 rounded shadow h-32 w-32 object-cover overflow-clip">
                                    <img className='object-cover h-16' src={skill.icon} alt={html} />
                                    <p className='text-slate-500 font-bold text-sm'>{skill.title}</p>
                                </div>
                            })
                        }
                        {
                            active === 4 && other?.map((skill, index) => {
                                return <div key={index} className="icon bg-[#121d277a]  flex flex-col items-center justify-center gap-4 rounded shadow h-32 w-32 object-cover overflow-clip">
                                    <img className='object-cover h-16' src={skill.icon} alt={html} />
                                    <p className='text-slate-500 font-bold text-sm'>{skill.title}</p>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills