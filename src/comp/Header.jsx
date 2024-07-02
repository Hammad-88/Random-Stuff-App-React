import React from 'react'
import logo from '../assets/logo_random.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

  let toggleSidebar = () => {
    document.querySelector('.sideBar').classList.toggle('zinda');
    document.querySelector('.overlay').classList.toggle('hidden');
  }

  return (
    <div className='flex lg:justify-center justify-between w-full md:px-8'>
      <button onClick={toggleSidebar} className='flex lg:hidden text-2xl mt-4'>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img className='lg:h-32 md:h-28 lg:ms-auto' src={logo} alt="Logo" />
      <div className='lg:ml-auto'>
        
      </div>
    </div>
  )
}

export default Header