import React, { useContext } from 'react'
import FormTitle from '../../../Helpers/FormTitle'
import InputField from '../../../Helpers/Inputs'
import FormSubTitle from '../../../Helpers/FormSubTitle'
import { formContext } from '../../../ContextApi/ContextApi'

export default function InfoForm() {
    const { formData } = useContext(formContext)
    
    const { productName, productType, regularPrice, offerPrice, shippingIn, shippingOut, deliverySystem, deliverySystemText, contact } = formData.information;

    return (
        <div className='formWrapper'>
            <FormTitle text="Basic Information" />
            <div className="formSection">
                <div className="formGroup">
                    <InputField
                        label=" product Name"
                        name="information.productName"
                        placeholder="Ex : hunny nut"
                        value={productName}
                        required={true}
                    />
                    <InputField
                        label=" product Type"
                        name="information.productType"
                        placeholder="Ex : kg / kilo / piece"
                        value={productType}
                        required={true}
                    />
                </div>
                <div className="formGroup">
                    <InputField
                        label=" regular Price"
                        type="number"
                        name="information.regularPrice"
                        placeholder="Ex : 150"
                        value={regularPrice}
                        required={true}
                    />
                    <InputField
                        label="offer Price"
                        type="number"
                        name="information.offerPrice"
                        placeholder="Ex : 120"
                        value={offerPrice}
                        required={true}
                    />
                </div>
                <div className="formGroup">
                    <InputField
                        label="Shipping inside Dhaka"
                        type="number"
                        name="information.shippingIn"
                        placeholder="Ex : 50"
                        value={shippingIn}
                        required={true}
                    />
                    <InputField
                        label="Shipping Outside Dhaka"
                        type="number"
                        name="information.shippingOut"
                        placeholder="Ex : 100"
                        value={shippingOut}
                        required={true}
                    />
                </div>

                <div className="formGroup">
                    <InputField
                        label="Delevery System"
                        name="information.deliverySystem"
                        placeholder="Ex : Cash on"
                        value={deliverySystem}
                        required={true}
                    />
                    <InputField
                        label="Delevery System Text"
                        name="information.deliverySystemText"
                        placeholder="Ex : On the hand payment"
                        value={deliverySystemText}
                        required={true}
                    />
                </div>
                <div className="formSection">
                    <FormSubTitle text={"Contact Information"} />
                    <div className="formGroup">
                        <InputField
                            label="Mobile"
                            type="number"
                            name="information.contact.mobile"
                            placeholder="Ex : 01864432943"
                            value={contact.mobile}
                            required={true}
                        />
                        <InputField
                            label="Email"
                            type="email"
                            name="information.contact.email"
                            placeholder="Ex : example@gmail.com"
                            value={contact.email}
                            required={true}
                        />


                    </div>
                </div>
            </div>
        </div>
    )
}
