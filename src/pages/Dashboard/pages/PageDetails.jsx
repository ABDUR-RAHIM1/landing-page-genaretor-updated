import React, { createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../../API/Api';
import Product from '../../../PageComponents/Product';
import Acordion from '../../../PageComponents/Acordion';
import Order from '../../Order/Order';
import Hero from '../../../PageComponents/Hero';
import SubProduct from '../../../PageComponents/SubProduct';
import Footer from '../../../PageComponents/Footer';
import Reviews from '../../../PageComponents/Reviews';
import { formContext } from '../../../ContextApi/ContextApi';
import FullLoader from '../../../PageComponents/FullLoader';

export const pageContext = createContext()

export default function PageDetails() {
    const { pageDetails, setPageDetails } = useContext(formContext)
    const { id, username } = useParams();
    const [loading, setLoading] = useState(false)

    // console.log(pageDetails)



    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${BASE_URL}/page/one/${username}/${id}`);
                const result = await res.json();
                setPageDetails(result)
                const colors = result?.hero.utils;
                if (colors) {
                    localStorage.setItem("colors", JSON.stringify(colors))
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }

        }

        getData()
    }, [id, username])


    if (loading) {
        return <FullLoader />
    }


    return (

        <div>

            {pageDetails !== null ? (
                <>
                    <Hero heroData={pageDetails.hero} />
                    <Product productData={pageDetails.product} hero={pageDetails.hero} />
                    <Acordion acordionData={pageDetails.acordion} />
                    <SubProduct subProductData={pageDetails.subProduct} />
                    <Reviews reviewData={pageDetails.review} />
                    <Order info={pageDetails.information} page={pageDetails} />
                    <Footer />
                </>
            )
                : (
                    <p className=' text-center my-10'>Empty Data</p>
                )
            }
        </div>
    )
}
