import React, { useEffect, useState, useContext } from 'react';
import formFields from '../../Data/FormInputs';
import Cart from './Cart';
import { formContext } from '../../ContextApi/ContextApi';
import Alert from '../../Homecomponents/Alert';
import { useLocation, useParams } from 'react-router-dom';

export default function Order(props) {
    const { colorStyles } = useContext(formContext);
    const { username } = useParams();
    const { page, info } = props;
    const { orderForm, setOrderForm, createOrder } = useContext(formContext);

    const [show, setShow] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({}); // For form validation errors

    const amountOfQuantity = Number(info.offerPrice) * Number(orderForm.quantity);
    const totalAmount =
        orderForm.district === 'dhaka'
            ? amountOfQuantity + Number(info.shippingIn)
            : amountOfQuantity + Number(info.shippingOut);

    const pathname = useLocation().pathname;

    useEffect(() => {
        setOrderForm((prev) => ({
            ...prev,
            businessName: username,
            pageUrl: pathname,
            productName: info.productName,
            totalPrice: totalAmount,
        }));
    }, [page, info, username, totalAmount, setOrderForm, pathname]);

    // Validate form fields
    const validateForm = () => {
        const newErrors = {};
        formFields.forEach((field) => {
            if (field.required && !orderForm[field.name]) {
                newErrors[field.name] = `${field.label} is required`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error when corrected
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return; // Validate before processing

        setProcessing(true);
        try {
            await createOrder(orderForm);
            setShow(true);
        } catch (error) {
            console.error('Order submission error:', error.message);
            alert('Order failed! Please try again.'); // User-friendly message
        } finally {
            setProcessing(false);
        }
    };

    const closeAlert = () => {
        setShow(false);
    };

    return (
        <div className="py-10 bg-gray-200">
            <div id='place-order' />

            {/* Header Section */}
            <div style={colorStyles} className="w-full px-5 md:px-20 py-10 mb-5 text-center rounded-md shadow-md">
                <h2 className="text-xl font-medium my-5">
                    অর্ডারটি সম্পন্ন করতে নিচের ফর্মটি পুরন করে{' '}
                    <span className="font-bold underline">অর্ডার করুন</span> বাটনে ক্লিক করুন
                </h2>
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="orderFormWrapper px-5 md:px-20">
                <div className="orderForm bg-white p-6 rounded-lg shadow-md">
                    {formFields.map((input) => (
                        <div key={input.name} className="w-full my-5">
                            <label htmlFor={input.name} className="block text-gray-700 font-medium mb-2">
                                {input.label}
                            </label>
                            <input
                                value={orderForm[input.name]}
                                onChange={handleChange}
                                type={input.type}
                                name={input.name}
                                required={input.required}
                                placeholder={input.placeholder}
                                aria-invalid={errors[input.name] ? 'true' : 'false'}
                                className={`w-full p-3 border rounded-md focus:outline-none transition ${errors[input.name] ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                                    }`}
                            />
                            {errors[input.name] && (
                                <p className="text-red-500 text-sm mt-1">{errors[input.name]}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Cart Component */}
                <div className="cartWrapper mt-8">
                    <Cart info={info} orderForm={orderForm} processing={processing} />
                </div>

                {/* Processing Indicator */}
                {processing && (
                    <div className="text-center my-5 text-orange-500 font-semibold">
                        Processing your order...
                    </div>
                )}

                {/* Success Alert */}
                {show && <Alert closeAlert={closeAlert} />}
            </form>
        </div>
    );
}
