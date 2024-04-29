import React from 'react'
import Nav from '../Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

function LayOut() {
  return (
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}

export default LayOut