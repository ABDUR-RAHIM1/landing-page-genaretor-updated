import React, { useContext } from 'react'
import InputField from '../../../Helpers/Inputs'
import FormTitle from '../../../Helpers/FormTitle'
import { formContext } from '../../../ContextApi/ContextApi'

export default function ReviewForm() {

    const { formData, handleMultipleFile, imgLoading } = useContext(formContext)
    const { heading, text } = formData.review;

    const handleFileChange = (e) => {
        const data = {
            name: "review",
            value: [...e.target.files]
        }

        handleMultipleFile(data)
    }
    return (
        <div className='formWrapper'>
            <FormTitle text={'Review'} />
            <div className="formSection">
                <div className="formGroup">
                    <InputField
                        label="heading"
                        name="review.heading"
                        placeholder="Ex : review Headline"
                        value={heading}
                        required={true}
                    />
                    <InputField
                        label="Text"
                        name="review.text"
                        placeholder="Ex : review Text"
                        value={text}
                        required={true}
                    />
                </div>
                <div className="formGroup">
                    <InputField
                        label={`${imgLoading ? "uploading . . ." : "Review Photos"}`}
                        name="review.heading"
                        type="file"
                        multiple="multiple"
                        width="w-full"
                        handler={handleFileChange}
                        required={true}
                    />
                </div>
            </div>
        </div>
    )
}
