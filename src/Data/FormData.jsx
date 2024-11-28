const initialFormState = {
    hero: {
        logo: '',
        headline: {
            main: '',
            sub: '',
        },
        utils: {
            gradientType: '',
            gradientRoated: 135,
            primaryBgColor: '#00c6ff',
            secondaryBgColor: '#0072ff',
            primaryTextColor: '#ffffff',
        }
    },
    product: {
        image: '',
        quote: [{}],
    },
    information: {
        productName: '',
        productType: '',
        regularPrice: 0,
        offerPrice: 0,
        shippingIn: 0,
        shippingOut: 0,
        deliverySystem: '',
        deliverySystemText: '',
        contact: {
            mobile: "",
            email: ""
        },
    },
    acordion: {
        heading: '',
        text: '',
        acordions: [{}],
    },
    subProduct: {
        about: [],
        image: [],
    },
    review: {
        heading: '',
        text: '',
        images: [],
    }
};


export default initialFormState