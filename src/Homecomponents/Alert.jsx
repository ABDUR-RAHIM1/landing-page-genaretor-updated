import React from 'react'
import { MdClose } from 'react-icons/md'
import images from '../constans/Constans'

export default function Alert({ closeAlert }) {
    return (
        <div className='w-full h-screen bg-black bg-opacity-90 fixed top-0 left-0 flex items-center justify-center z-[999]'>
            <span onClick={closeAlert} className='text-4xl text-red-500 border border-red-700 p-1 cursor-pointer absolute top-4 right-4'>
                <MdClose />
            </span>

            <div className=' w-full md:w-[75%]'>
                <img src={images.congratsGif} className='w-full' alt="" />
            </div>
        </div>
    )
}
