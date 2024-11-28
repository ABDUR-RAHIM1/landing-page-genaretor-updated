import React, { useContext } from 'react';
import { formContext } from '../ContextApi/ContextApi';
import { useLocation } from 'react-router-dom';

export default function SelectField(props) {
    const { label, name, value, options, width, required } = props;
    const { handleChange, formData, } = useContext(formContext)

    const location = useLocation().pathname
    let isRequired = location.endsWith("/edit-page") ? false : required

    return (
        <div className={`${width || " w-full md:w-[48%] my-3"}`}>
            {label && (
                <label htmlFor={name} className='capitalize'>
                    {label}
                </label>
            )}
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                required={isRequired || true}
                className={`input mt-2 placeholder-gray-500 placeholder-opacity-50 placeholder:capitalize `}
            >
                <option value="">Select Type</option> {/* Placeholder option */}
                {options && options.map((op, i) => (
                    <option value={op} key={i}>
                        {op}
                    </option>
                ))}
            </select>
        </div>
    );
}
