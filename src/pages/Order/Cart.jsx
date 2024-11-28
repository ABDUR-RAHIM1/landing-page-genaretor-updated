import React, { useContext } from 'react';
import { formContext } from '../../ContextApi/ContextApi';

export default function Cart(props) {

    const { colors, colorStyles } = useContext(formContext)
    console.log(colors)

    const {
        deliverySystem,
        deliverySystemText,
        offerPrice,
        productName,
        productType,
        regularPrice,
        shippingIn,
        shippingOut,
    } = props.info;
    const { orderForm, proccesing } = props;
    let amountOfQuantity = Number(offerPrice) * Number(orderForm.quantity);

    let totalAmount =
        orderForm.district === 'dhaka'
            ? amountOfQuantity + Number(shippingIn)
            : amountOfQuantity + Number(shippingOut);

    let shipping =
        orderForm.district === '' || orderForm.district === 'dhaka'
            ? Number(shippingIn)
            : Number(shippingOut);

    return (
        <div className='bg-white shadow-lg rounded-lg p-6'>
            {/* Header */}
            <h5 style={{
                color: colors.secondaryBgColor,
            }} className=' mb-5 text-3xl font-bold text-center'>
                অর্ডার বিবরণ
            </h5>

            {/* Price Details */}
            <div className='space-y-4'>
                <div className='flex justify-between items-center border-b pb-3'>
                    <p className='text-gray-600 font-medium'>পরিমাণ</p>
                    <p className='text-gray-700 font-medium'>{orderForm.quantity}</p>
                </div>

                <div className='flex justify-between items-center border-b pb-3'>
                    <p className='text-gray-600 font-medium'>রেগুলার মূল্য</p>
                    <del className='text-red-500 font-semibold'>{regularPrice} BDT</del>
                </div>

                <div className='flex justify-between items-center border-b pb-3'>
                    <p className='text-gray-600 font-medium'>{productType} মূল্য</p>
                    <p className='text-gray-700 font-semibold'>{amountOfQuantity} BDT</p>
                </div>

                <div className='flex justify-between items-center border-b pb-3'>
                    <p className='text-gray-600 font-medium'>
                        ডেলিভারি{' '}
                        <small className='text-sm'>
                            {orderForm.district === '' || orderForm.district === 'dhaka'
                                ? '(ঢাকার মধ্যে)'
                                : '(ঢাকার বাহিরে)'}
                        </small>
                    </p>
                    <p className='text-gray-700 font-semibold'>{shipping} BDT</p>
                </div>

                <div className='flex justify-between items-center mt-5'>
                    <p className='text-xl font-bold text-gray-800'>সর্বমোট</p>
                    <p className='text-xl font-bold' style={{
                        color: colors.primaryBgColor
                    }}>
                        {totalAmount} টাকা
                    </p>
                </div>
            </div>

            {/* Delivery Information */}
            <div style={{
                background: colors.primaryBgColor
            }} className='  rounded-md py-5 px-4 mt-6 shadow-md'>
                <h4 className='font-bold text-lg mb-3  ' style={{
                    color: colors.primaryTextColor,
                }}>
                    {deliverySystem} ডেলিভারি
                </h4>
                <p className='py-2 text-gray-800 bg-orange-50 rounded-md px-3'>
                    {deliverySystemText || 'পণ্য হাতে পেয়ে পেমেন্ট করতে পারবেন'}
                </p>
            </div>

            {/* Order Button */}
            <button
                style={colorStyles}
                className='py-3 mt-6 w-full text-white font-semibold rounded-md hover:shadow-lg transition duration-300 text-lg shadow-md'
            >
                {proccesing ? 'অর্ডার প্রসেসিং...' : 'অর্ডার করুন'}
            </button>
        </div>
    );
}
