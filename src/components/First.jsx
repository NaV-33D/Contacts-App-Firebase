import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

const First = () => {
  return (
    <div className='flex relative items-center '>
    <FiSearch className='text-white text-3xl absolute ml-1 ' />
    <input type="text"  className='border-white bg-transparent 
      border rounded-md h-10 flex-grow text-white pl-9' />
      <div>
        <AiFillPlusCircle className='text-white cursor-pointer text-5xl gap-2' />
      </div>
    </div>


    
  )
}

export default First 
