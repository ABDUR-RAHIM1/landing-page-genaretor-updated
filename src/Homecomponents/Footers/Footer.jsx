import React from 'react';

export default function Footer() {
    return (
        <div className='py-6 md:py-10 bg-gray-900 text-white mt-10'>
            <p className='text-center text-sm md:text-base'>
                Copyright © {new Date().getFullYear()} AR IT Solutions. Made with <span className='text-red-500'>❤</span> by
                <a href="https://abdr.netlify.app" target='_blank' rel='noopener noreferrer' className='underline hover:text-blue-400 ml-1'>
                    Abdur Rahim
                </a>
            </p>
        </div>
    );
}
