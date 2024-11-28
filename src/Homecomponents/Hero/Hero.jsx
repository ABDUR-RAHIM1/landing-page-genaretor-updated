import React from 'react';
import HeroBg from './HeroBg';
import { Link } from 'react-router-dom';
import { HiLogin } from 'react-icons/hi';  // Import login icon from react-icons

export default function Hero() {
    return (
        <div className="relative">
            {/* Hero Header */}
            <div className="absolute top-0 left-0 w-full py-4 px-4 md:px-8 bg-transparent z-50 flex items-center justify-between">
                {/* Brand Name */}
                <Link to={"/"} className="text-2xl md:text-3xl font-semibold text-white hover:text-blue-300 transition duration-300 ease-in-out">
                    <div className="flex flex-col items-start">
                        AR Quick Page
                        <span className="mt-1 block w-full max-w-[150px] md:max-w-[200px]"> {/* SVG with fixed width */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1729 149"
                                fill="#FF6EA9"
                                className="w-full h-auto"
                            >
                                <path d="M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z"></path>
                            </svg>
                        </span>
                    </div>
                </Link>

                {/* Login Button */}
                <Link to={'/auth'} className="inline-flex items-center justify-center py-2 px-4 bg-blue-500 rounded-md text-white text-lg font-medium hover:bg-blue-600 transition duration-300 ease-in-out md:hidden">
                    <HiLogin className="h-6 w-6" />  {/* Mobile icon */}
                </Link>
                <Link to={'/auth'} className="hidden md:inline-block py-2 px-6 bg-blue-500 rounded-md text-lg font-medium text-white hover:bg-blue-600 transition duration-300 ease-in-out">
                    লগইন করুন
                </Link>
            </div>

            {/* Hero Background Section */}
            <HeroBg />
        </div>
    );
}
