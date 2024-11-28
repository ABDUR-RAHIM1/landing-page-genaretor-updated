import React, { useContext, useState } from 'react'
import ProductInfoForm from './ProductInfoForm'
import AcordionForm from './AcordionForm'
import uploadFile from '../../../Helpers/UploadFIle'
import Spinner from '../../../Homecomponents/Spinner'
import { formContext } from '../../../ContextApi/ContextApi'
import ReviewForm from './ReviewForm'
import HeroForm from './HeroForm'
import InfoForm from './InfoForm'
import SubProductForm from './SubProductForm'


export default function CreatePageForm() {
    const { handleCreatePage, loading } = useContext(formContext)


    return (
        <form onSubmit={handleCreatePage}
          className=' bg-gray-100'
        >
            {/*  first section */}

            <HeroForm />
            <ProductInfoForm />
            <InfoForm />
            <AcordionForm />
            <SubProductForm />
            <ReviewForm />

            <button className=' button w-full bg-orange-600 shadow-2xl hover:bg-orange-700 text-white'>
                {
                    loading ? <Spinner /> : "Publish Page"
                }
            </button>

        </form>
    )
}
