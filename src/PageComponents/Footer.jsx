import React from 'react';

export default function Footer() {
    return (
        <footer className='py-8 bg-slate-700 text-white'>
            <div className='container mx-auto px-4'>
                {/* Brand and Navigation */}
                <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                    <h2 className='text-3xl font-bold mb-4 md:mb-0'>AR Quick Page</h2>
                    <nav className='flex space-x-4 text-sm'>
                        <a href='#about' className='hover:text-blue-400 transition duration-300'>About</a>
                        <a href='#services' className='hover:text-blue-400 transition duration-300'>Services</a>
                        <a href='#contact' className='hover:text-blue-400 transition duration-300'>Contact</a>
                    </nav>
                </div>

                {/* Copyright and Developer Link */}
                <div className='border-t border-gray-500 pt-6'>
                    <p className='text-sm'>
                        © 2024{' '}
                        <a
                            title='Contact With Developer'
                            href='https://abdr.netlify.app'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='underline hover:text-blue-400 transition duration-300'
                        >
                            AR It Solution
                        </a>
                        . All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
