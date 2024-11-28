import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAddCall, MdEmail, MdLocationCity } from 'react-icons/md'
import { TbWorldCancel } from 'react-icons/tb'

export default function Footers() {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Message Send Successful")
    }
    return (
        <div className='my-10 md:my-16 py-10 md:py-20 px-5 md:px-10 flex justify-between flex-wrap'>
            <div className='w-full md:w-[57%] my-10'>
                <h1 className=' text-3xl my-4 font-medium'>যোগাযোগ করুন</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" required placeholder='Your Good Name' className='py-10 px-3 border-b border-blue-200 my-5 w-full  focus:outline-none placeholder:text-blue-300' />
                    <input type="email" required placeholder='Your Email' className='py-10 px-3 border-b border-blue-200 my-5 w-full  focus:outline-none placeholder:text-blue-300' />
                    <textarea   type="text" required placeholder='Message' className=' h-[150px] py-10 px-3 border-b border-blue-200 my-5 w-full  focus:outline-none placeholder:text-blue-300' />
                    <button className='py-5 px-10 rounded-full bg-blue-700 hover:bg-blue-500 duration-200 text-white my-5'>পাঠান </button>
                </form>

            </div>
            <div className='w-full md:w-[40%] my-10'>
                <h1 className=' text-3xl my-4 font-medium'>যোগাযোগের ঠিকানা</h1>

                <div>
                    <h2 className='text-xl font-medium mb-5'>আপনার যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন। আমাদের টিম সবসময় আপনার পাশে আছে।</h2>
                    <ul className='  flex gap-3 flex-col'>
                        <li className='text-xl font-medium flex items-center gap-5'> <FaLocationDot />  ৫৫১০ রংপুর , বাংলাদেশ ।  </li>
                        <li className='text-xl font-medium flex items-center gap-5'> <MdAddCall />   ০১৩২১০৪০২৭৩  </li>
                        <li className='text-xl font-medium flex items-center gap-5'> <MdEmail />   programerup95@gmail.com  </li>
                        <li className='text-xl font-medium flex items-center gap-5'> <TbWorldCancel />  <a className=' underline' href="https://abdr.netlify.app" target='_blank'>AR It Solutions</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
