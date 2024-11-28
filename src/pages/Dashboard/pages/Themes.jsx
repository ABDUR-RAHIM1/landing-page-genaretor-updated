import React from 'react'
import DashboardLayout from '../DashboardLayout'

export default function Themes() {
    return (
        <DashboardLayout>

            <div className='w-full h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center'>
                <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeIn">
                        🚀 Coming Soon!
                    </h2>
                    <p className="text-xl text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-1s">
                        This page is currently under processing. Stay tuned for updates!
                    </p>
                    <div className="flex justify-center">
                        <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>

        </DashboardLayout>
    )
}
