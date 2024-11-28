import React from 'react'
import DashboardLayout from '../DashboardLayout'
import { useLocation } from 'react-router-dom'
import { FaExternalLinkAlt, FaBox, FaUser, FaAddressCard } from 'react-icons/fa'

export default function OrderDetails() {
    const orderData = useLocation().state;
    console.log(orderData)
    return (
        <DashboardLayout>
            <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-6">
                {/* Page Details Button */}
                <div className="flex justify-center mb-8">
                    <a
                        href={orderData.pageUrl}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='flex items-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300'
                    >
                        <FaExternalLinkAlt />
                        <span>View Page Details</span>
                    </a>
                </div>

                <div className='flex flex-col md:flex-row justify-between gap-8'>
                    {/* Order Details Card */}
                    <div className='w-full md:w-[48%] bg-white p-6 rounded-lg shadow-md'>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                            <FaBox className='text-blue-500' />
                            Order Details
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p><span className="font-semibold">Order ID:</span> {orderData._id}</p>
                            <p><span className="font-semibold">Product Name:</span> {orderData.productName}</p>
                            <p><span className="font-semibold">Quantity:</span> {orderData.quantity}</p>
                            <p><span className="font-semibold">Total Price:</span> ${orderData.totalPrice}</p>
                            <p><span className="font-semibold">Message:</span> {orderData.message || "No message provided"}</p>
                        </div>
                    </div>

                    {/* Customer Details Card */}
                    <div className='w-full md:w-[48%] bg-white p-6 rounded-lg shadow-md'>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                            <FaUser className='text-green-500' />
                            Customer Details
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p><span className="font-semibold">Name:</span> {orderData.name}</p>
                            <p><span className="font-semibold">Email:</span> {orderData.email}</p>
                            <p><span className="font-semibold">Mobile:</span> {orderData.mobile}</p>
                            <p><span className="font-semibold">Address:</span> {orderData.address}</p>
                            <p><span className="font-semibold">District:</span> {orderData.district}</p>
                            <p><span className="font-semibold">Town:</span> {orderData.city}</p>
                            <p><span className="font-semibold">Zip:</span> {orderData.zip}</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
