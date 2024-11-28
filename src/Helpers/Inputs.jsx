import React, { useContext } from 'react'
import { formContext } from '../ContextApi/ContextApi';
import { useLocation } from 'react-router-dom';

export default function InputField(props) {
    const { label, type, name, value, placeholder, required, width, handler, multiple } = props;
    const { handleChange } = useContext(formContext)

    const location = useLocation().pathname

    let isRequired = location.endsWith("/edit-page") ? false : required

    return (
        <div className={`${width || "w-full md:w-[48%] my-3"}`}>
            <label className=' capitalize' htmlFor={name}>{label}</label>
            <input
                onChange={handler || handleChange}
                type={type || "text"}
                name={name}
                value={value && value}
                multiple={multiple || ""}
                required={isRequired}
                placeholder={placeholder || ""}
                autoComplete="on"
                className={` input  mt-2 placeholder-gray-500 placeholder-opacity-50 placeholder:capitalize`}
            />
        </div>
    )
}
