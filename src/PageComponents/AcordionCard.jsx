import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"

export default function AcordionCard(props) {
    const { question, answer } = props.data
    const [show, setShow] = useState(false)

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300">
            <button
                onClick={() => setShow(!show)}
                className={`flex justify-between items-center w-full px-6 py-4 text-left text-gray-800 hover:bg-gray-100 transition-colors duration-300`}
            >
                <span className="text-xl font-semibold">{question}</span>
                <IoIosArrowDown
                    className={`text-3xl transform transition-transform duration-300 ${show ? "rotate-180 text-blue-500" : "rotate-0 text-gray-600"}`}
                />
            </button>

            <div className={`px-6 py-4 text-gray-700 bg-gray-50 transition-opacity duration-300 ${show ? "block" : "hidden"}`}>
                <p className="text-lg">{answer}</p>
            </div>
        </div>
    )
}
