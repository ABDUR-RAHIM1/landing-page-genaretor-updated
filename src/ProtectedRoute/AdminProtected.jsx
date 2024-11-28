import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { formContext } from '../ContextApi/ContextApi';


export default function AdminProtected() {
    const { token } = useContext(formContext)

    return (
        token ? <Outlet /> : <Navigate to={"/auth"} />
    )
}
