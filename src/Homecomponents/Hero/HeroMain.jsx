import React from 'react'
import { motion } from 'framer-motion'

export default function HeroMain() {
    return (
        <div className=' w-full md:w-[70%] mt-2 md:mt-10 m-auto flex items-center justify-center flex-col  text-white  text-center py-10 px-5'>
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className=' text-2xl md:text-4xl font-normal md:font-bold my-5 leading-[2rem] md:leading-[4rem]'> AR It Solutions <br />
                ল্যান্ডিং পেজ আপনার প্রোডাক্টকে বিশ্বের সামনে তুলে ধরার সেরা মাধ্যম!
            </motion.h1>
            <motion.p
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='text-[15px] md:text-xl'>
                এক ক্লিকে তৈরি করুন পেশাদার মানের ল্যান্ডিং পেজ, কোনো কোডিংয়ের ঝামেলা ছাড়াই। আপনার পণ্য বা সেবার কার্যকারিতা আরও বৃদ্ধি করুন এবং কাস্টমারদের আকৃষ্ট করুন সহজ এবং স্মার্ট সমাধানের মাধ্যমে।
            </motion.p>
        </div >
    )
}
