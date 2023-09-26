import React, { useState } from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineChevronRight, HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import Resume from '../assets/resume.pdf'

const SocialLinks = () => {

  const [phone, setPhone] = useState(true)
// console.log(phone)
  const icons = [
    {
      id: 1,
      child: (
        <> Github <FaGithub size={30} /> </>
      ),
      href: 'https://github.com/kamrul377'
    },
    {
      id: 1,
      child: (
        <> Linkedin <FaLinkedin size={30} /> </>
      ),
      href: 'https://www.linkedin.com/in/md-kamrul-islam-0951a3265/'
    },
    {
      id: 1,
      child: (
        <> Mail <HiOutlineMail size={30} /> </>
      ),
      href: 'mailto:mdkamrulislalm9810@gmail.com'
    },
    {
      id: 1,
      child: (
        <> Resume <BsFillPersonCheckFill size={30} /> </>
      ),
      href: Resume
    }
  ]

  return (
    <div className='top-[35%] left-0 sm:fixed flex flex-col  justify-center items-center z-40'>

      {/* <div className = {`bg-slate-700 h-8 w-5 flex justify-center items-center rounded-e-xl cursor-pointer hover:bg-slate-400 md:hidden`}>
        <HiOutlineChevronRight size={25} onClick={() => setPhone(!phone)} />
      </div> */}

      <ul className='flex sm:block justify-start bg-slate-900 sm:bg-inherit'>
        {
          icons.map((icon, index) => (

            <li key={index} className={`${phone ? "flex": "hidden"} md:flex justify-between items-center w-24 sm:w-40 h-14 px-3 !bg-slate-900  sm:ml-[-120px] sm:hover:ml-0 duration-300 first:rounded-tr last:rounded-br flex`}>
              <a href={icon.href} download target='_blank' className='flex justify-between items-center text-white  w-full text-[14px] sm:text-base '>
                {icon.child}
              </a>
            </li>

          ))
        }


      </ul>


    </div>
  )
}

export default SocialLinks



