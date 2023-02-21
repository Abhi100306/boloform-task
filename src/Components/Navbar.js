import React from 'react'
import './navbar.css'

function Navbar() {
  return (

        <div className='navbar w-full h-full flex flex-row items-center'>
            <div className='logo'>
                <a className='flex flex-row text-2xl font-bold'>
                    <img className="h-32 w-32" src='logo-text.e6f7617c.svg' width="500" height="500" decoding="async" data-nimg="1" />
                </a>
            </div>
            <div className='navbar  text-sm flex'>
                <span className="mr-8 font-semibold cursor-pointer flex flex-row items-center">
                    Products
                </span>
                <span className="mr-10 font-semibold cursor-pointer ">
                    Pricing
                </span>
                <span className="mr-10 font-semibold cursor-pointer ">
                    Guides
                </span>
                <span className="mr-10 font-semibold cursor-pointer ">
                    Templates
                </span>
            </div>
            <div className='navbar_buttons  ml-auto flex justify-center items-center'>
            <div class="ml-auto flex justify-center items-center">
                <button class="buttonOne mr-4 text-[#915bff] hover:bg-[#a97dff] hover:text-white">
                    <span>Install Now</span>
                </button>
                <button class="buttonTwo bg-[#915bff] text-white hover:opacity-90 ">
                    <span>BoloForms Premium</span>
                </button>
            </div>
            </div>
    </div>
  )
}

export default Navbar