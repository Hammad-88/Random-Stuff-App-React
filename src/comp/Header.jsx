import React from 'react'
import logo from '../assets/logo_random.png'

function Header() {
  return (
    <div className='flex justify-center items-center'>
        <img className='h-32' src={logo} alt="" />
    </div>
  )
}

export default Header