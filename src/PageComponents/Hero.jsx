import React, { useContext } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

import images from '../constans/Constans';
import Button from './Button';
import { formContext } from '../ContextApi/ContextApi';

export default function Hero(props) {
    const { colorStyles } = useContext(formContext);
    const { logo, headline } = props.heroData;

    return (
        <div className='heroMain'>
            <div
                style={colorStyles}
                className={`w-full h-full px-5 md:px-10 flex items-center justify-center flex-col rounded-none md:rounded-b-[170px] md:rounded-br-[170px]`}

            >
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img
                        src={logo || images.pd1}
                        className='w-[150px] h-[150px] rounded-full my-3'
                        alt={"landing page"}
                    />
                </motion.div>

                <motion.div
                    className='w-full md:w-[75%] text-center'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h1 className='text-2xl md:text-3xl font-medium my-4 leading-[2rem] md:leading-[3rem]'>
                        {headline.main}
                    </h1>
                    <p className='text-[16px] md:text-[19px]'>
                        {headline.sub}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button border={"border-blue-800"} />
                </motion.div>
            </div>
        </div>
    );
}
