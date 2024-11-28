const formFields = [
    { label: "Quantity", name: "quantity", field: "quantity", type: "number", required: true, placeholder: "How Much" },
    { label: "Name", name: "name", field: "name", type: "text", required: true, placeholder: "Enter Your Good Name" },
    { label: "Present Address", name: "address", field: "address", type: "text", required: true, placeholder: "Division" },
    { label: "District", name: "district", field: "district", type: "text", required: true, placeholder: "Present District" },
    { label: "Town / City", name: "city", field: "city", type: "text", required: true, placeholder: "Present Town" },
    { label: "Postcode / ZIP (optional)", name: "zip", field: "postcodeOrZip", type: "text", required: false, placeholder: "Your Postal Code" },

    { label: "Mobile Number", name: "mobile", field: "mobileNumber", type: "text", required: true, placeholder: "Your Phone Number" },
    { label: "Emergency Contact (optional)", name: "emergency", field: "emergencyContact", type: "text", required: false, placeholder: "For Emergency Contact" },
    { label: "Email Address", name: "email", field: "emailAddress", type: "email", required: true, placeholder: "Valid Email Address" },
    { label: "Company Name (optional)", name: "company", field: "companyName", type: "text", required: false, placeholder: "Your Company Name" },
    { label: "Message (optional)", name: "opinion", field: "opinion", type: "text", required: false, placeholder: "Message with Us" },

];

export default formFields;
