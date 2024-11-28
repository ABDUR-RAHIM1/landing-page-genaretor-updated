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
    console.log(orders)
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

    const handleDeleteOrder = () => {
        window.alert("Delete Functionality Under Proccesing !")
    }

    const columns = [
        {
            name: "Customer Name",
            selector: row => row.name,
            cell: row => <span className="font-medium text-gray-800">{row.name}</span>, // Bold text
            sortable: true,
        },
        {
            name: "Product",
            selector: row => row.productName,
            cell: row => <span className="text-gray-600">{row.productName}</span>, // Gray text
            sortable: true,
        },
        {
            name: "Address",
            selector: row => row.address,
            cell: row => <span className="text-gray-600">{row.address}</span>, // Gray text
            sortable: true,
        },
        {
            name: "Quantity",
            selector: row => row.quantity,
            cell: row => <span className="text-gray-700">{row.quantity}</span>,
            sortable: true,
        },
        {
            name: "Date",
            selector: row => row.createdAt,
            cell: row => <span className="text-gray-700">{new Date(row.createdAt).toLocaleDateString()}</span>,
            sortable: true,
        },
        {
            name: "Page URL",
            cell: row => (
                <Link
                    to={row.pageUrl}
                    className="inline-block py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-transform transform hover:scale-105 shadow-md"
                >
                    See Product
                </Link>
            ),
            ignoreRowClick: true,
        },
        {
            name: "Order Details",
            cell: row => (
                <Link
                    to={`/dashboard/${username}/order-details/${row._id}`}
                    state={row}
                    className="inline-block py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md transition-transform transform hover:scale-105 shadow-md"
                >
                    Details
                </Link>
            ),
            ignoreRowClick: true,
        },
        {
            name: "Cancel Order",
            cell: row => (
                <div
                    onClick={handleDeleteOrder}
                    state={row}
                    className="inline-block py-2 px-4 cursor-pointer bg-red-500 hover:bg-red-600 text-white rounded-md transition-transform transform hover:scale-105 shadow-md"
                >
                    Cancel
                </div>
            ),
            ignoreRowClick: true,
        },
    ];


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
