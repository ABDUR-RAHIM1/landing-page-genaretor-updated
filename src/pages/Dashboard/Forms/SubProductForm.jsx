import React, { useContext, useState } from 'react'
import FormTitle from '../../../Helpers/FormTitle'
import InputField from '../../../Helpers/Inputs'
import AddBtn from '../../../Helpers/AddBtn'
import { formContext } from '../../../ContextApi/ContextApi'
import TextArea from '../../../Helpers/TextArea'

export default function SubProductForm() {
    const { formData, handleUpdateState, handleMultipleFile, imgLoading } = useContext(formContext)


    const [about, setAbout] = useState("");


    const handleChange = (e) => {
        const { value } = e.target;
        setAbout(value)
    }

    const handleAddToState = () => {
        const data = {
            name: "about",
            value: about
        }
        handleUpdateState(data)
        setAbout('')
    }


    const handleFileChange = (e) => {

        const data = {
            name: "subImage",
            value: [...e.target.files]
        }
        handleMultipleFile(data)
    }

    const countLength = formData.subProduct.about.length

    return (
        <div className='formWrapper'>
            <FormTitle text={"Sub Product"} />

            <div className="formSection">
                <div className="formGroup">
                    <TextArea
                        label={`about product ${countLength}`}
                        name="about"
                        placeholder="Ex : best product in this time"
                        width="w-full"
                        handler={handleChange}
                        value={about}
                        required={countLength < 1 ? true : false}
                    />
                    <AddBtn handleAdd={handleAddToState} text={"Add About Text"} />
                </div>
                <br />
                <div className="formGroup">
                    <InputField
                        label={`${imgLoading ? "uploading . . . " : "product Sub Images"}`}
                        name="subProduct.image"
                        width="w-full"
                        type="file"
                        multiple="multiple"
                        handler={handleFileChange}
                        required={true}
                    />
                </div>
            </div>

        </div>
    )
}
