import React from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import payment from "../../assets/images/home/payment.jpg"
import { motion } from "framer-motion"

export default function Pricing() {
    return (
        <div className='px-5 md:px-10 my-20 bg-gray-50'>
            <div className='w-full md:w-[70%] m-auto text-center mb-10'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800 my-4'>
                    স্বল্প খরচে সর্বোচ্চ সুবিধা
                </h2>
                <p className='text-gray-600 text-lg leading-relaxed'>
                    আমাদের প্রতিটি প্যাকেজ ডিজাইন করা হয়েছে যাতে আপনি সর্বোচ্চ সুবিধা পান। ব্যবসার আকার, চাহিদা এবং লক্ষ্য অনুযায়ী মাসিক চার্জ নির্ধারণ করুন, যা আপনার সেবাকে আরও উন্নত করবে।
                </p>
            </div>

            <div className='relative my-10 flex flex-wrap gap-6 justify-center'>
                {/* Payment Method Card */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className='w-full md:w-[48%] bg-white shadow-lg rounded-lg text-center p-6 hover:shadow-2xl transition-shadow duration-300'
                >
                    <h2 className='text-2xl md:text-3xl font-bold text-blue-700 mb-4'>বিলিং এবং পেমেন্ট পদ্ধতি</h2>
                    <hr className='mb-6 border-t-2 border-gray-300' />
                    <ul className='my-6 space-y-4'>
                        {['বিকাশ', 'নগদ', 'রকেট'].map((method, index) => (
                            <li key={index} className='flex items-center gap-3 text-lg text-gray-700'>
                                <MdCheckCircle className='text-green-500 text-2xl' /> {method}
                            </li>
                        ))}
                    </ul>
                    <h4 className='text-gray-700 mt-6'>
                        <span className='font-bold text-gray-800'>ক্যান্সেলেশন পলিসি:</span> যেকোনো সময় সাবস্ক্রিপশন বাতিল করুন।
                    </h4>
                    <div className='w-full mt-5'>
                        <img src={payment} className='w-full h-56 rounded-md object-cover' alt="Payment" />
                    </div>
                </motion.div>

                {/* Standard Plan Card */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className='w-full md:w-[48%] bg-white border-2 border-blue-500 rounded-lg text-center p-6 hover:shadow-2xl transition-shadow duration-300'
                >
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Standard</h2>
                    <hr className='mb-6 border-t-2 border-gray-300' />
                    <h2 className='text-3xl font-extrabold text-blue-700 my-4'>৳ ১,৫০০ / মাস</h2>
                    <hr className='mb-6 border-t-2 border-gray-300' />
                    <ul className='space-y-4 mb-6 text-lg text-gray-700'>
                        {['ডোমেইন', 'হোস্টিং', 'MongoDB ডাটাবেস', 'আনলিমিটেড কাস্টমার', 'আনলিমিটেড পেজ'].map((feature, index) => (
                            <li key={index} className='flex items-center gap-3 justify-center'>
                                <MdCheckCircle className='text-green-500 text-2xl' /> {feature}
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/auth"
                        className='text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition-all duration-300 inline-block'
                    >
                        এখনই আপনার প্ল্যান কিনুন
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
