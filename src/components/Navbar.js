import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between p-3 w-full bg-main-dark h-[70px] border-2 border-black">
        <Link 
          className='text-md cursor-pointer text-secondary-light font-semibold border-2 border-secondary-light rounded-lg p-1'
          to={"/"}
        >
          <h1>Get Jobs</h1>
        </Link>
        <div className=' w-[30px] h-[30px] bg-secondary-light rounded-full'/>
      </div>
    </nav>
  )
}

export default Navbar