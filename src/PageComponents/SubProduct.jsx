import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Button from './Button';

export default function SubProduct(props) {
    const { image, about } = props.subProductData;
    const [imageIndex, setImgIndex] = useState(0);

    const handleAddPhoto = (index) => {
        setImgIndex(index);
    };

    return (
        <div className='px-6 md:px-10 my-10'>
            {/* About Section */}
            <motion.div
                className='w-full md:w-[70%] mx-auto text-center'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {about && about.map((a, i) => (
                    <p key={i} className='text-lg md:text-xl text-gray-700 mb-4'>
                        {a}
                    </p>
                ))}
            </motion.div>

            {/* Main Image Display */}
            <motion.div
                className='w-full md:w-[70%] mx-auto my-8 relative'
                key={imageIndex} // Ensures re-animation when image changes
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src={image[imageIndex]}
                    className='w-full h-[450px] md:h-[550px] rounded-lg object-cover shadow-md transition-all duration-300'
                    alt={`Main ${imageIndex}`}
                />
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className='w-full overflow-x-auto my-6 p-4 bg-gray-100 flex items-center justify-center gap-6 rounded-lg shadow-inner'>
                {image && image.map((img, i) => (
                    <motion.img
                        onClick={() => handleAddPhoto(i)}
                        key={i}
                        className={`w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover rounded-md cursor-pointer transition-transform duration-200 ${imageIndex === i ? 'border-4 border-blue-500 scale-105' : 'border-2 border-transparent'
                            }`}
                        src={img}
                        alt={`Thumbnail ${i}`}
                        whileHover={{ scale: 1.1 }} // Thumbnail hover effect
                        transition={{ duration: 0.2 }}
                    />
                ))}
            </div>

            {/* Button Section */}
            <motion.div
                className='text-center mt-8'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <Button />
            </motion.div>
        </div>
    );
}
