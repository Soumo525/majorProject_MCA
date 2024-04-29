import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../../Auth/AuthProvider'

export const Private = () => {
    const {user} = useAuth()
    return user ? <Outlet /> : <Navigate to ="/loginFrom" />;
}