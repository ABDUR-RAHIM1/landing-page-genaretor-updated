import React from 'react'
import { motion } from "framer-motion"

export default function Testimonial() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1,
            }}
            className='px-5 md:px-10 py-20 my-10 md:my-20 bg-blue-500 text-white'>
            <h1 className=' text-2xl md:text-3xl leading-[2rem] md:leading-[3rem] text-center'>বাংলাদেশে ৫,০০০ এরও বেশি সন্তুষ্ট গ্রাহক <a className=' underline' target='_blank' href="https://abdr.netlify.app">AR It Solutions</a> এর ল্যান্ডিং পেজ সার্ভিস  ব্যবহার করছেন—আপনিও তাদের একজন হয়ে সফলতার পথে এগিয়ে যান!</h1>
        </motion.div>
    )
}
