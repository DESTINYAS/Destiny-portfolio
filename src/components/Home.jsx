import React from 'react'
import profileP1 from '../images/picture3.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-br from-black via-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
        <h2 className='text-4xl sm:7xl font-bold text-white'>I'am a Backend Developer</h2>
        <p className='text-gray-500 py-4 max-w-md'>
          I have over 4 years experience experience in building, designing and maintaining software.
          Currently, I love to work on backend applications using technologies like Node.js,Nest.js,Java,Spring  Boot
          and on web applications with technologies like React, SCSS, Tailwind.
        </p>
        <div>
          <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Portfolio 
            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
          </Link>
        </div>
        </div>
        <div>
          <img src={profileP1} alt="my profile" className='rounded-2xl mx-5 w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home