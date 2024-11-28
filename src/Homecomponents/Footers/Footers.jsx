import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAddCall, MdEmail } from 'react-icons/md'
import { TbWorldCancel } from 'react-icons/tb'

export default function Footers() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent Successfully");
    }

    return (
        <div className='bg-gray-100 py-14 px-5 md:px-10'>
            <div className='container mx-auto flex flex-wrap justify-between gap-10'>
                {/* Contact Form */}
                <div className='w-full md:w-[55%] bg-white shadow-lg rounded-lg p-8'>
                    <h1 className='text-3xl font-semibold text-gray-800 mb-6'>যোগাযোগ করুন</h1>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <input
                            type="text"
                            required
                            placeholder='আপনার নাম'
                            className='py-4 px-5 w-full border-b border-blue-300 focus:outline-none placeholder:text-gray-400'
                        />
                        <input
                            type="email"
                            required
                            placeholder='আপনার ইমেইল'
                            className='py-4 px-5 w-full border-b border-blue-300 focus:outline-none placeholder:text-gray-400'
                        />
                        <textarea
                            required
                            placeholder='আপনার বার্তা'
                            className='h-36 py-4 px-5 w-full border-b border-blue-300 focus:outline-none placeholder:text-gray-400 resize-none'
                        />
                        <button className='bg-blue-600 text-white py-4 px-8 rounded-full hover:bg-blue-500 transition duration-300'>
                            পাঠান
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className='w-full md:w-[40%] bg-white shadow-lg rounded-lg p-8'>
                    <h1 className='text-3xl font-semibold text-gray-800 mb-6'>যোগাযোগের ঠিকানা</h1>
                    <p className='text-lg text-gray-600 mb-8'>
                        আপনার যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন। আমাদের টিম সবসময় আপনার পাশে আছে।
                    </p>
                    <ul className='space-y-6 text-gray-700'>
                        <li className='flex items-center gap-4 text-lg'>
                            <FaLocationDot className='text-blue-600 text-2xl' /> ৫৫১০ রংপুর, বাংলাদেশ
                        </li>
                        <li className='flex items-center gap-4 text-lg'>
                            <MdAddCall className='text-blue-600 text-2xl' /> ০১৩২১০৪০২৭৩
                        </li>
                        <li className='flex items-center gap-4 text-lg'>
                            <MdEmail className='text-blue-600 text-2xl' /> programerup95@gmail.com
                        </li>
                        <li className='flex items-center gap-4 text-lg'>
                            <TbWorldCancel className='text-blue-600 text-2xl' />
                            <a className='underline text-blue-600 hover:text-blue-500' href="https://abdr.netlify.app" target='_blank' rel='noopener noreferrer'>AR IT Solutions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
