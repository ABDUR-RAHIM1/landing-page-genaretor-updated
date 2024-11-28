import React, { useContext } from 'react'
import HeroForm from './HeroForm'
import ProductInfoForm from './ProductInfoForm'
import InfoForm from './InfoForm'
import AcordionForm from './AcordionForm'
import SubProductForm from './SubProductForm'
import ReviewForm from './ReviewForm' 

export default function EditPageForm() { 
    return (
        <>
            <HeroForm />
            <ProductInfoForm />
            <InfoForm />
            <AcordionForm />
            <SubProductForm />
            <ReviewForm />
         
        </>
    )
}
