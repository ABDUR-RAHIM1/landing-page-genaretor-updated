import React from 'react'
import { motion } from "framer-motion"

export default function Features() {
    const cards = [
        {
            title: "একাধিক সুবিধা, একসাথে সবকিছু",
            text: "আমাদের প্ল্যাটফর্মে আপনি পাবেন অসীম সুবিধা, যা আপনার প্রয়োজনীয়তার সবদিক পূরণ করবে। আধুনিক এবং শক্তিশালী টুলস দিয়ে তৈরি করুন এমন সব ল্যান্ডিং পেজ যা আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যাবে।",
            bg: "linear-gradient(135deg, #1d1f33, #2a2c47)"
        },
        {
            title: "অসাধারণ ফলাফল—আপনার স্বপ্ন বাস্তব করুন",
            text: "আমাদের পণ্য আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যাবে। আমাদের পরিষেবাগুলি ব্যবহার করে আপনি দেখবেন কীভাবে আপনার লক্ষ্য দ্রুত এবং কার্যকরভাবে অর্জিত হয়।",
            bg: "linear-gradient(135deg, #3B82F6, #2563eb)"
        },
        {
            title: "নতুন ডিজাইন—আপনার সৃজনশীলতার নতুন অধ্যায়",
            text: "আপনার প্রয়োজনীয়তা অনুযায়ী কাস্টমাইজ করুন, বিভিন্ন স্টাইল এবং লেআউট নির্বাচন করুন।",
            bg: "linear-gradient(135deg, #19298A, #0e1c59)"
        },
    ]

    return (
        <div className=' px-6 md:px-12 relative overflow-hidden'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='text-center my-12'>
                <h1 className='text-3xl md:text-4xl font-bold mb-6 text-gray-800'>মাত্র এক মিনিটে তৈরি করুন!</h1>
                <p className='text-gray-500 text-lg'>আপনার পণ্য বা সেবার গল্প বলুন আকর্ষণীয় উপস্থাপনায়।</p>
            </motion.div>

            <div className='flex flex-wrap gap-6 justify-center'>
                {cards.map((c, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        style={{ background: c.bg }}
                        className='w-full md:w-[30%] rounded-lg text-white p-8 shadow-lg hover:scale-105 transition-transform duration-300'>
                        <h4 className='font-bold text-xl mb-4'>{c.title}</h4>
                        <p className='text-sm'>{c.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
