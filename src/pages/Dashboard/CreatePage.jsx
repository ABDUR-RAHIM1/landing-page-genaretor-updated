import React, { useState } from 'react'
import DashboardLayout from './DashboardLayout'
import CreatePageForm from './Forms/CreatePageForm'
import DemoPage from './Components/DemoPage'

export default function CreatePage() {
    const [show, setShow] = useState(false)

    const openDemo = () => {
        setShow(true)
    }
    const closeDemo = () => {
        setShow(false)
    }
    return (
        <DashboardLayout>
            <div className=' flex items-center justify-between relative'>
                <h2 className=' text-xl md:text-2xl my-5 font-medium'>Create Your Business Page</h2>
                <button onClick={openDemo} className=' py-3 px-4 text-white font-normal bg-orange-600 '>View Demo</button>
            </div>
            {
                show &&
                <DemoPage closeDemo={closeDemo} />
            }
            <CreatePageForm />
        </DashboardLayout>
    )
}
