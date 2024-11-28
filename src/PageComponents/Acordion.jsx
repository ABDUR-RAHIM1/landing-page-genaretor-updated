import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import AcordionCard from './AcordionCard';
import Button from './Button';

// Child of PageDetails Page
export default function Acordion(props) {
    const { heading, text, acordions } = props.acordionData;

    return (
        <motion.div
            className='px-6 md:px-10 py-10 my-8 bg-gray-50 rounded-lg shadow-md'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Heading Section */}
            <motion.div
                className='w-full md:w-[60%] mx-auto text-center py-6 mb-6 bg-white rounded-lg shadow-sm'
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='text-3xl md:text-4xl font-bold mb-4 text-gray-800'>
                    {heading}
                </h1>
                <p className='text-lg text-gray-600'>{text}</p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Button />
                </motion.div>
            </motion.div>

            {/* Accordion Cards */}
            <div className='space-y-4'>
                {acordions && acordions.map((a, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }} // Staggered effect
                    >
                        <AcordionCard data={a} />
                    </motion.div>
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
        </motion.div>
    );
}
