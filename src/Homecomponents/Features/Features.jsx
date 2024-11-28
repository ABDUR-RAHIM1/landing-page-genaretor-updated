import React from 'react'
import { motion } from "framer-motion"

export default function Features() {
    const cards = [
        {
            title: "একাধিক সুবিধা, একসাথে সবকিছু",
            text: "আমাদের প্ল্যাটফর্মে আপনি পাবেন অসীম সুবিধা, যা আপনার প্রয়োজনীয়তার সবদিক পূরণ করবে। আধুনিক এবং শক্তিশালী টুলস দিয়ে তৈরি করুন এমন সব ল্যান্ডিং পেজ যা আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যাবে। আমাদের নানা ধরনের ফিচার আপনার সৃজনশীলতা ও কার্যক্ষমতা বাড়িয়ে দেবে, যাতে আপনি সবসময় থাকেন সবার আগে এবং সহজেই আকর্ষণ করতে পারেন নতুন গ্রাহকদের।",
            bg: "#191A27"
        },
        {
            title: "অসাধারণ ফলাফল—আপনার স্বপ্ন বাস্তব করুন",
            text: "আমাদের পণ্য আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যাবে। আমাদের পরিষেবাগুলি ব্যবহার করে আপনি দেখবেন কীভাবে আপনার লক্ষ্য দ্রুত এবং কার্যকরভাবে অর্জিত হয়। আমাদের আধুনিক টুলস এবং কৌশলগুলি আপনার কাজের ফলাফলকে অত্যন্ত উন্নত করবে, এবং আপনি পাবেন এমন ফলাফল যা আপনার প্রত্যাশাকেও ছাড়িয়ে যাবে।",
            bg: "#3B82F6"
        },
        {
            title: "নতুন ডিজাইন—আপনার সৃজনশীলতার নতুন অধ্যায়",
            text: "আপনার প্রয়োজনীয়তা অনুযায়ী কাস্টমাইজ করুন, বিভিন্ন স্টাইল এবং লেআউট নির্বাচন করুন, এবং তৈরি করুন একটি সুনির্দিষ্ট ও মনোগ্রাহী পেজ যা আপনার ব্যবসার মুল্য বাড়িয়ে তুলবে। নতুন ডিজাইন সহ আপনার সৃজনশীলতার সীমানা প্রসারিত করুন এবং প্রতিটি ক্লিকে সফলতা অর্জন করুন।",
            bg: "#19298A"
        },
    ]

    return (
        <div className='my-6 px-5 md:px-10 relative overflow-hidden '>
            <span className='w-[90%] md:w-[80%] m-auto h-[1px] bg-gray-300 block   ' />

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                    duration: 1
                }}
                viewport={{ once: true }}
                className=' px-10 w-full md:w-[50%]  my-10 m-auto text-center '>

                <div className='shadowFull -right-36 -top-28' />
                <div className='shadowFull -left-44 -top-28' />

                <h1 className=' text-2xl md:text-3xl my-5 leading-[2rem] md:leading-[3rem]'>কোনো অপেক্ষা নয় , মাত্র এক মিনিটেই তৈরি করুন মনোমুগ্ধকর ল্যান্ডিং পেজ!</h1>
                <p className=' text-[13px] md:text-[15px] text-gray-500'>
                    আপনার প্রোডাক্ট বা সার্ভিস কিভাবে গ্রাহকদের জন্য পরিবর্তন আনতে পারে, সেই গল্প বলুন। আপনার সেবা তাদের জীবনে কী সুবিধা আনবে, কিভাবে তাদের সমস্যার সমাধান করবে—এমন আকর্ষণীয় উপস্থাপনায় তাদের দৃষ্টি আকর্ষণ করুন।
                </p>
            </motion.div>

            <div className=' flex   justify-between flex-wrap my-10'>
                {
                    cards.map((c, i) => (
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{
                                duration: 1
                            }}
                            viewport={{ once: true }}
                            key={i} style={{ background: c.bg }} className={` w-full md:w-[31%] rounded-md text-center py-7 px-4 my-7  text-gray-300  shadow-2xl shadow-blue-200 `}>
                            <h4 className=' font-bold my-3'>{c.title}</h4>
                            <p className='text-[13px]'>{c.text}</p>
                        </motion.div>
                    ))
                }
            </div> 
        </div>
    )
}
