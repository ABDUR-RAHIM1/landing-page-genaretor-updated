import React from 'react'
import { Link } from 'react-router-dom' 

export default function CallToAction() {
    return (
        <div className="relative w-[90%] md:w-[50%] m-auto bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white py-10 px-5 text-center -translate-y-[160px] flex items-center justify-center flex-col shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-60 rounded-md"></div>
            <h1 className="text-2xl md:text-3xl leading-[3rem] my-3 z-10">ফ্রি ট্রায়াল শুরু করুন, আজই!</h1>
            <p className="text-[16px] md:text-[18px] z-10">কোডিং ছাড়াই পেয়ে যান ল্যান্ডিং পেজ জেনারেটরের সব সুবিধা। আপনার ব্যবসার বৃদ্ধি এখন আপনার হাতে।</p>

            <Link to="/auth" className="z-10 text-[15px] md:text-[18px] my-5 font-semibold border rounded-md py-5 px-4 bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                আপনার পেজ তৈরি করুন
            </Link>
        </div>
    )
}
