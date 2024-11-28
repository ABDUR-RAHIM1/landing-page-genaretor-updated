import React, { useContext, useEffect } from 'react'
import DashboardLayout from '../DashboardLayout'
import EditPageForm from '../Forms/EditPageForm'
import { useLocation } from 'react-router-dom'
import { formContext } from '../../../ContextApi/ContextApi';
import Spinner from '../../../Homecomponents/Spinner';
import Title from '../../../Helpers/Title';

export default function EditPage() {
    const editableFormData = useLocation().state;
    const { formData, setFormData, loading, handleEditPage } = useContext(formContext)
 

    useEffect(() => {
        setFormData(editableFormData)
    }, [editableFormData])


    const handleEditSubmit = (e) => {
        e.preventDefault(); 
        handleEditPage(formData._id)
    }

    return (
        <DashboardLayout>
            <div className=' flex items-center justify-between relative'>
                <h2 className=' text-2xl my-5 font-medium'>Edit Page</h2>
            </div>
 
            <form onSubmit={handleEditSubmit}>
                <EditPageForm />
                <button title='Edit Page' className=' button w-full bg-orange-600 text-white'>
                    {
                        loading ? <Spinner /> : "Edit and Publish"
                    }
                </button>

            </form>
        </DashboardLayout>
    )
}
