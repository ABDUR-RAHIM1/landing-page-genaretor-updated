import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../DashboardLayout'
import DataTable from 'react-data-table-component';
import { formContext } from '../../../ContextApi/ContextApi';
import Loader from '../../../PageComponents/Loader';
import FormTitle from '../../../Helpers/FormTitle';
import { Link } from 'react-router-dom';

export default function ManagePage() {
  const { getUser, userInfo, handleDeletePage, loading, isDone } = useContext(formContext)
  const { user, page } = userInfo

  useEffect(() => {

    const getData = async () => {
      try {
        await getUser()
      } catch (error) {
        console.log(error.message)
      }
    }
    getData()

  }, [isDone]);


  const columns = [
    {
      name: 'Image',
      selector: row => row.product.image,
      cell: row => <a  target='_blank' href={`/page/${user.username}/${row._id}`}  >
        <img src={row.product.image} className='w-[70px] h-[70px] my-5 cursor-pointer' alt="product Image" />
      </a>
    },
    {
      name: 'Product Name',
      selector: row => row.information.productName,
    },
    {
      name: 'Product Type',
      selector: row => row.information.productType,
    },
    {
      name: 'Price',
      selector: row => row.information.offerPrice,
    },
    {
      name: 'published Date',
      selector: row => row.createdAt ? new Date(row.createdAt).toLocaleDateString() : new Date().toLocaleDateString(),
    },
    {
      name: 'Edit',
      selector: row => <Link to={`/dashboard/${user.username}/edit-page`} state={row} className=' block py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-600 duration-300'>Edit</Link>
    },
    {
      name: 'Delete',
      selector: row => <button onClick={() => handleDeletePage(row._id)} className=' py-2 px-4 bg-red-700 text-white rounded-md hover:bg-red-600 duration-300'>Delete</button>
    },
  ];


  if (loading) {
    return <Loader />
  }


  return (
    <DashboardLayout>
      <div className=' my-5 '>
        <FormTitle text={`Manage pages - ${page.length} `} />
      </div>
      <DataTable
        columns={columns}
        data={page}
        highlightOnHover
        pagination
      />
    </DashboardLayout>
  )
}
