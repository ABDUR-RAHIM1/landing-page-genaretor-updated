import React, { useContext } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import images from '../constans/Constans';
import { formContext } from '../ContextApi/ContextApi';

export default function Product(props) {
    const { image, quote } = props.productData;
    const { colorStyles } = useContext(formContext);

    return (
        <div className='flex items-center justify-center flex-col my-10'>
            {/* Product Image Section */}
            <motion.div
                className='w-[95%] md:w-[85%] my-10'
                whileHover={{ scale: 1.05 }} // Scale up on hover
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src={image || images.pd1}
                    className='w-full h-[500px] md:h-[700px] object-cover rounded-xl shadow-lg'
                    alt='Product'
                />
            </motion.div>

            {/* Quote Section */}
            <motion.div
                style={colorStyles}
                className='w-full px-6 md:px-14 py-14 my-8 rounded-lg shadow-md bg-opacity-90'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {quote && quote.map((q, i) => (
                    <motion.div
                        key={i}
                        className='my-6 text-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }} // Staggered effect for quotes
                    >
                        <h4 className='text-2xl md:text-3xl font-semibold leading-relaxed'>
                            {q.quote}
                        </h4>
                        <span className='mt-3 text-sm md:text-base font-bold border-b border-dotted inline-block'>
                            {`(${q.author})`}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
