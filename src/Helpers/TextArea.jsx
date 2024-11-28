import React, { useContext } from 'react'
import { formContext } from '../ContextApi/ContextApi';
import { useLocation } from 'react-router-dom';

export default function TextArea(props) {
    const { label, type, name, value, placeholder, required, width, handler, multiple } = props;
    const { handleChange } = useContext(formContext)

    const location = useLocation().pathname
    let isRequired = location.endsWith("/edit-page") ? false : required

    return (
        <div className={`${width || "w-[48%]"}`}>
            <label className=' capitalize' htmlFor={name}>{label}</label>
            <textarea
                onChange={handler || handleChange}
                type={type || "text"}
                name={name}
                value={value && value}
                multiple={multiple || ""}
                required={isRequired}
                placeholder={placeholder || ""}
                className={` input h-[200px]  mt-2 placeholder-gray-500 placeholder-opacity-50 placeholder:capitalize`}
            />
        </div>
    )
}
