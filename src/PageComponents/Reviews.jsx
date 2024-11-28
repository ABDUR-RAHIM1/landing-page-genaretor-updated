import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function Reviews(props) {
    const { heading, text, images } = props.reviewData;

    return (
        <div className="bg-gray-100 py-10">
            {/* Heading Section */}
            <motion.div
                className="text-center mb-10 px-6 md:px-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{heading}</h1>
                <p className="text-lg md:text-xl text-gray-600">{text}</p>
            </motion.div>

            {/* Swiper Section */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                breakpoints={{
                    200: { slidesPerView: 1, spaceBetween: 20 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                modules={[Pagination]}
                className="mySwiper px-6"
            >
                {images &&
                    images.map((sl, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-md"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Image Container */}
                                <img
                                    src={sl}
                                    alt={`Review ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                />
                                {/* Review Index */}
                                <div className="absolute top-3 left-3 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg">
                                    <p className="text-lg font-semibold">{index + 1}</p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
            </Swiper>

            {/* Decorative Divider */}
            <hr className="mt-10 border-t-2 border-gray-300 w-3/4 mx-auto" />
        </div>
    );
}
