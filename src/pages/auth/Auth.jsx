import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from "../../API/Api";
import Spinner from '../../Homecomponents/Spinner';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import { formContext } from '../../ContextApi/ContextApi';

export default function Auth() {
    const { token, login, user } = useContext(formContext)
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()



    //  auto navigate to dashboard when user is login
    useEffect(() => {
        if (token) {
            navigate(`/dashboard/${user.username}`)
        }
    }, [token, user])
    console.log(formData)
    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const registerUser = () => {

        if (formData.username.includes(' ')) {
            return toast.error("Username should not contain spaces");
        }

        if (formData.password.length < 6) {
            return toast.error(" Password Must be at least 6 characters.");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(formData.email);

        if (!isValidEmail) {
            return toast.error("Please provide a valid email address.");
        }

        setLoading(true)
        fetch(`${BASE_URL}/user/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                if (data.ok) {
                    toast.success(data.message)
                    setShow(false)
                } else {
                    toast.error(data.message)
                }

            }).catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    const loginUser = () => {

        setLoading(true)
        fetch(`${BASE_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                if (data.token) {
                    toast.success(data.message)
                    login(data.token, data.user);
                    navigate(`/dashboard/${data.user.username}`)
                } else {
                    toast.error(data.message)
                }

            })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        show ? registerUser()
            :
            loginUser()

    }

    return (
        <div className='loginBg flex items-center justify-between flex-wrap px-10'>
            <div className=' w-full md:w-[48%]'>
                <h1 className='h1'>
                    স্বাগতম
                </h1>
                <p className='text-sm my-2'>
                    আমাদের সেবা গ্রহণ করতে এখনই আপনার একাউন্ট তৈরি করুন এবং লগইন করুন।
                </p>
                <p className='text-sm my-2'>
                    আমাদের সাথে থাকার জন্য এবং আমাদের ওপর আস্থা রাখার জন্য আপনার প্রতি কৃতজ্ঞ।
                </p>
            </div>

            <div className=' w-full md:w-[48%]'>
                <form onSubmit={handleSubmit} className=' p-3 border border-gray-300 rounded-md'>
                    <h2 className='text-2xl font-bold text-orange-500 my-5'>
                        {
                            show ? "একাউন্ট তৈরি করুন" : "লগইন করুন"
                        }
                    </h2>
                    {show &&
                        <>
                            <div className='my-3'>
                                <label htmlFor="username">Business Name</label>
                                <input onChange={handleChange} className='input' type="text" required name='username' placeholder='Your Business Name' />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="name">Name</label>
                                <input onChange={handleChange} className='input' type="text" name='name' required placeholder='Your Good Name' />
                            </div>
                        </>
                    }
                    <div className='my-3'>
                        <label htmlFor="email">Email </label>
                        <input onChange={handleChange} className='input' type="email" name='email' required placeholder='Your Verifyed Email' />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="password">Password </label>
                        <input onChange={handleChange} className='input' type="password" name='password' required placeholder=' Password' />
                    </div>
                    <div className=' text-sm my-5 text-right '>

                        {
                            show ?
                                <p>ইতোমধ্যে একাউন্ট আছে ! <span onClick={() => setShow(!show)} className='text-orange-500 font-bold cursor-pointer underline'>লগইন করুন</span> </p>
                                :
                                <p> কোন একাউন্ট নেই ! <span onClick={() => setShow(!show)} className='text-orange-500 font-bold cursor-pointer underline'> একাউন্ট তৈরি করুন</span> </p>
                        }

                    </div>
                    <button className='button w-full bg-orange-500 text-white capitalize my-4'>
                        {
                            loading ? <Spinner /> : show ? "register" : "Login"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}
