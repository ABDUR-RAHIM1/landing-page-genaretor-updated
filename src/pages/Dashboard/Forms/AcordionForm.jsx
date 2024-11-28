import React, { useContext, useState } from 'react'
import FormTitle from '../../../Helpers/FormTitle'
import InputField from '../../../Helpers/Inputs'
import FormSubTitle from '../../../Helpers/FormSubTitle'
import AddBtn from '../../../Helpers/AddBtn'
import { formContext } from '../../../ContextApi/ContextApi'

export default function AcordionForm() {

    const { formData, handleUpdateState } = useContext(formContext);
    const { heading, text } = formData.acordion;

    const [acordion, setAcordion] = useState({ question: "", answer: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAcordion({ ...acordion, [name]: value })
    }

    const handleAddToState = () => {
        const data = {
            name: "acordion",
            value: acordion,
        };

        handleUpdateState(data)
        setAcordion({ question: "", answer: "" })
    }

    const countLength = formData.acordion.acordions.length

    return (
        <div className='formWrapper'>
            <FormTitle text={"Add FAQ"} />

            <div className="formSection">
                <div className="formGroup">
                    <InputField
                        label="Heading"
                        name="acordion.heading"
                        placeholder="Ex : FAQ"
                        value={heading}
                        required={true}
                    />
                    <InputField
                        label="Text"
                        name="acordion.text"
                        placeholder="Ex : Your question Our Answer"
                        value={text}
                        required={true}
                    />
                </div>
            </div>
            <div className="formSection">
                <FormSubTitle text={`Add FAQ (${countLength})`} />
                <div className="formGroup">
                    <InputField
                        label="Question"
                        name="question"
                        placeholder="Ex : Why Chose Our Product"
                        handler={handleChange}
                        value={acordion.question}
                        required={countLength < 1 ? true : false}
                    />
                    <InputField
                        label="Answer"
                        name="answer"
                        placeholder="Ex : One of the Best Product"
                        handler={handleChange}
                        value={acordion.answer}
                        required={countLength < 1 ? true : false}
                    />
                    <AddBtn
                        handleAdd={handleAddToState}
                        text={"Add FAQ"}
                    />
                </div>
            </div>
        </div>
    )
}
