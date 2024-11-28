import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../DashboardLayout'
import FormTitle from '../../../Helpers/FormTitle'
import { formContext } from '../../../ContextApi/ContextApi';
import Loader from '../../../PageComponents/Loader';
import DataTable from 'react-data-table-component';
import { Link, useParams } from 'react-router-dom';

export default function Orders() {
    const { username } = useParams()
    const [isLoading, setIsLoading] = useState(false);
    const { getUser, userInfo } = useContext(formContext)
    const { orders } = userInfo

    useEffect(() => {

        setIsLoading(true)
        const getData = async () => {
            try {
                await getUser()
            } catch (error) {
                console.log(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        getData()

    }, []);


    const columns = [
        {
            name: "Costomer Name",
            selector: row => row.name
        },
        {
            name: "Address",
            selector: row => row.address
        },
        {
            name: "Quantity",
            selector: row => row.quantity
        },
        {
            name: "Page Url",
            selector: row => <Link to={row.pageUrl} className=' inline-block py-2 px-3 bg-blue-500 text-white rounded-md my-2'>
                See Product
            </Link>
        },
        {
            name: "Order Details",
            selector: row => <Link to={`/dashboard/${username}/order-details/${row._id}`}
                state={row} className='inline-block py-2 px-3 bg-blue-500 text-white rounded-md my-2'>
                Details
            </Link>
        }
    ]

    if (isLoading) {
        return <Loader />
    }


    return (
        <DashboardLayout>
            <div className=' my-5'>
                <FormTitle text={"Orders"} />
            </div>
            <div>
                <DataTable
                    columns={columns}
                    data={orders}
                    pagination
                    highlightOnHover
                />
            </div>

        </DashboardLayout>
    )
}
