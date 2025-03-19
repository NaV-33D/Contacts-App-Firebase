import React from 'react'
import logo from '../assets/logos_firebase.png'

const Navbar = () => {
  return (
    <div className='my-4 h-[60px] bg-gray-800 gap-2 text-white flex items-center rounded-lg justify-center'>

    <img src={logo} alt="" />
    <h1 className='text-lg'>Conatct App Firebase</h1>
    </div>
  )
}

export default Navbar
