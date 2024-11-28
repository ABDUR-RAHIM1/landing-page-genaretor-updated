import React from 'react'
import { MdCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import payment from "../../assets/images/home/payment.jpg"
import { motion } from "framer-motion"

export default function Pricing() {
    return (
        <div className='px-5 md:px-10 my-20 '>
            <div className='w-full md:w-[70%] m-auto text-center'>
                <h2 className=' text-2xl md:text-3xl font-bold my-4'>
                    স্বল্প খরচে সর্বোচ্চ সুবিধা
                </h2>
                <p>
                    আমাদের প্রতিটি প্যাকেজ ডিজাইন করা হয়েছে যাতে আপনি সর্বোচ্চ সুবিধা পান। ব্যবসার আকার, চাহিদা এবং লক্ষ্য অনুযায়ী মাসিক চার্জ নির্ধারণ করুন, যা আপনার সেবাকে আরও উন্নত করবে।
                </p>
            </div>

            <div

                className=' relative my-10 flex justify-between flex-wrap '>
                <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    transition={{
                        duration: 1,
                    }}
                    className='w-full md:w-[48%] border-2 rounded-md text-center p-5 my-5'>
                    <h2 className='text-2xl md:text-3xl font-bold my-4'>বিলিং এবং পেমেন্ট পদ্ধতি</h2>
                    <hr />
                    <ul className=' my-6 m-auto'>
                        <li className=' flex items-center gap-2'> <MdCircle className='text-2xl  ' /> বিকাশ</li>
                        <li className=' flex items-center gap-2'> <MdCircle className='text-2xl  ' /> নগদ</li>
                        <li className=' flex items-center gap-2'> <MdCircle className='text-2xl  ' /> নগদ</li>
                    </ul>
                    <h4 className=' my-3'>
                        <span className=' font-bold'>ক্যান্সেলেশন পলিসি:</span> কাস্টমাররা যেকোনো সময় সাবস্ক্রিপশন বাতিল করতে পারবেন।
                    </h4>

                    <div className='w-full m-auto'>
                        <img src={payment} className='w-full h-[250px]  rounded-md ' alt="" />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{
                        duration: 0.5,
                    }}
                    className='w-full md:w-[48%] border-2 border-blue-400 rounded-md text-center p-5 my-5'>
                    <h2 className='text-2xl md:text-3xl font-bold my-4'> Standard </h2>
                    <hr />
                    <h2 className='text-2xl md:text-3xl font-bold my-4'> ১,৫০০ / মাস  </h2>
                    <hr />

                    <div className=' mt-5'>
                        <ul className='flex flex-col gap-4'>
                            <li>ডোমেইন</li>
                            <li>হোস্টিং </li>
                            <li>mongoDB ডাটাবেস </li>
                            <li>আনলিমিটেড কাস্টমার</li>
                            <li>আনলিমিটেড পেজ</li>
                        </ul>
                    </div>

                    <Link to="/auth" className=' my-5 text-[15px] md:text-[18px] font-semibold border rounded-md py-5 px-4 block bg-blue-500 text-white'>এখনই আপনার প্ল্যান কিনুন</Link>
                </motion.div>
            </div>
        </div>
    )
}
