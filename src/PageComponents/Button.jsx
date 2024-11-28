import React, { useContext } from 'react'
import { formContext } from '../ContextApi/ContextApi'

export default function Button(props) {
    const { border } = props

    const { colorStyles } = useContext(formContext)
    return (
        <a href='#place-order' className='inline-block'>
            <button style={colorStyles} className={`button my-5`}>অর্ডার করতে চাই</button>
        </a>
    )
}

