import React from 'react'
import Header from './comp/Header'
import Sidebar from './comp/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout">
      <aside className='bg-secondary h-screen md:py-5 py-4 px-8 fixed left-0'>
        <Sidebar />
      </aside>
      <div className="main grid grid-cols-12">
        <div className='md:col-span-1'></div>
        <div className='md:col-span-10'>
          <Header />
          <div className='md:ms-10'>
          <Outlet />
          </div>
        </div>
        <div className='md:col-span-1'></div>
      </div>
    </div>
  )
}

export default Layout