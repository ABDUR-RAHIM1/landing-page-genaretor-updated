import React from 'react'
import features from '../../Data/Home/Features'
import images from '../../constans/Constans'
import { motion } from "framer-motion"

export default function WhatFeatures() {

    return (
        <div className=' relative my-10 md:my-20 px:10 md:px-10 py-10 overflow-hidden'>
            <motion.div
                initial={{ rotateX: 100 }}
                whileInView={{ rotateX: 0 }}
                transition={{
                    duration: 1
                }}
                viewport={{ once: true }}
                className='w-full md:w-[60%] m-auto text-center '>
                <div className='shadowFull -right-36 -top-28' />
                <h1 className='  text-2xl md:text-3xl leading-[2rem] md:leading-[3rem] my-4'>
                    আপনার গ্রাহকরা আপনার সফলতার ভিত্তি!
                </h1>
                <p className=' text-[13px] md:text-[15px]'>
                    প্রতিটি গ্রাহক আপনার ব্যবসার গুরুত্বপূর্ণ অংশ, তাই তাদের সন্তুষ্টি নিশ্চিত করা সবচেয়ে জরুরি। আপনার পণ্য বা সেবা তাদের জীবনে কীভাবে ইতিবাচক পরিবর্তন আনতে পারে, সেটাই তুলে ধরুন। তাদের আস্থা অর্জন করতে পারলেই আপনার ব্যবসা আরও এগিয়ে যাবে।
                </p>
            </motion.div>

            <div className=' px-5 md:px-10 my-20'>
                {
                    features.map((fc, i) => (
                        <FeaturesCard data={fc} index={i} key={i} />
                    ))
                }
            </div>

        </div>
    )
}


const FeaturesCard = (props) => {
    const { icon, image, title, description } = props.data;
    const { index } = props

    const indexing = index % 2 !== 1

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 3
            }}
            viewport={{ once: true }}
            className={` ${indexing ? " flex-row-reverse" : ""} flex items-center justify-between flex-wrap my-10 md:my-20 py-4 shadow-2xl shadow-blue-200 md:shadow-none relative `}>
            <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1.5
                }}
                viewport={{ once: true }}
                className=' w-full md:w-[48%] flex flex-col gap-5 text-center px-2 my-3 '>
                <span className=' text-6xl px-5 py-5 bg-[#1d392be0]  rounded-full text-white block m-auto '>
                    {icon}
                </span>
                <h2 className=' text-2xl font-bold'>{title}</h2>
                <p className=' text-[16px]'>{description}</p>
            </motion.div>
            <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1
                }}
                viewport={{ once: true }}
                className=' w-full md:w-[48%] my-3 '>
                <img src={image} className='w-full  h-[400px] rounded-md' alt="Feature Cover" />
            </motion.div>
            <div className={`shadowFull ${indexing ? "-right-48" : "-left-48"} -bottom-0`} />
        </motion.div>
    );
};