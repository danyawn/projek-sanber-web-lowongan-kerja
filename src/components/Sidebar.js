import React from 'react'
import { useState } from 'react';
import {Control, Card, Homepage} from '../assets'
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    const[open,setOpen] = useState(true)
    const menus = [
        {title : "Dashboard", src: Homepage, key:'/'},
        {title : "Detail", src: Card, key: '/detail' }
    ]

  return (
    <sidebar>
        <div className='flex'>

            {/* Start Sidebar */}
            <div className={` ${open ? 'w-72' : 'w-24' } duration-300 w-72 h-screen bg-main-dark text-secondary-light relative border-2 border-black `}>
                <img src={Control} alt="arrow" className={` ${!open && "rotate-180"} duration-200 absolute cursor-pointer right-3 top-9 w-11 border-2 rounded-full border-main-dark`} onClick={() => setOpen(!open)} />
                
                <div className={`flex justify-center  font-semibold pt-8 ${open ? 'text-3xl p-2' : 'text-sm mt-20 p-1' } duration-200 `}>
                    <h2 className='border-2 border-secondary-light rounded-lg p-2'>Menu</h2>
                </div>
                
                <div>
                    <ul className=''>
                        {menus.map((menu,index) => (
                            <Link 
                                to ={menu.key}
                                key={index}
                                className="flex p-2 m-4 items-center text-lg gap-x-4 cursor-pointer rounded-md gap-2 mt-2 hover:bg-blue-800 duration-300"
                            >
                                <img src={menu.src} alt={menu.title} className={`flex items-center`} />
                                <span className={`${!open && "scale-0"} duration-300`}>{menu.title}</span>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            

        </div>
    </sidebar>
  )
}

export default Sidebar