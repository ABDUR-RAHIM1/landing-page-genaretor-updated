import React, { useContext } from 'react'
import FormTitle from '../../../Helpers/FormTitle'
import InputField from '../../../Helpers/Inputs'
import FormSubTitle from '../../../Helpers/FormSubTitle'
import { formContext } from '../../../ContextApi/ContextApi'
import SelectField from '../../../Helpers/SelectField'

export default function HeroForm() {

    const { formData, handleUploadFile, imgLoading } = useContext(formContext)

    const { headline, utils } = formData.hero
  

    const handleFile = (e) => {
        const filePath = e.target.files[0]
        const data = {
            name: "logo",
            file: filePath
        }
        handleUploadFile(data)
    }

    const gradientTypes = [
        "linear-gradient",
        "radial-gradient",
        "conic-gradient",
        "repeating-linear-gradient",
        "repeating-radial-gradient",
    ];

    return (
        <div className='formWrapper'>
            <FormTitle text={"Hero"} />



            <div className="formSection">
                <div className="formGroup">



                    <InputField
                        label={imgLoading ? "Uplaoding . . . " : "Add logo"}
                        name="hero.logo"
                        type="file"
                        width="w-full"
                        handler={handleFile}
                        required={true}
                    />



                </div>
                <div className='formGroup'>

                    <InputField
                        label="Main Heading"
                        name="hero.headline.main"
                        placeholder="Heading"
                        value={headline.main}
                        required={true}
                    />
                    <InputField
                        label="Sub Heading"
                        name="hero.headline.sub"
                        placeholder="Sub Heading"
                        value={headline.sub}
                        required={true}
                    />
                </div>
            </div>
            <div className='formSection'>
                <FormSubTitle text={"Basic Utilites"} />
                <div className='formGroup'>

                    <SelectField
                        label="Gradient Type"
                        name="hero.utils.gradientType"
                        options={gradientTypes}
                        value={utils.gradientType}
                        required={true}
                    />
                    <InputField
                        label="gradient Roated"
                        type="number"
                        name="hero.utils.gradientRoated"
                        placeholder="ex : 180 (deg)"
                        value={utils.gradientRoated}
                        required={true}
                    />
                </div>
                <div className='formGroup'>
                    <InputField
                        label="primary BgColor"
                        name="hero.utils.primaryBgColor"
                        placeholder="primary BgColor"
                        type="color"
                        value={utils.primaryBgColor}
                        required={true}
                    />
                    <InputField
                        label="secondary BgColor"
                        name="hero.utils.secondaryBgColor"
                        placeholder="secondary BgColor"
                        type="color"
                        value={utils.secondaryBgColor}
                        required={true}
                    />
                </div>
                <div className='formGroup'>
                    <InputField
                        label="primary Text Color"
                        name="hero.utils.primaryTextColor"
                        placeholder="primary Text Color"
                        type="color"
                        width="w-full"
                        value={utils.primaryTextColor}
                        required={true}
                    />
                </div>
            </div>
        </div>
    )
}
