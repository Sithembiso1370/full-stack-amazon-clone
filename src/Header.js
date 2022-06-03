import React from 'react'
import './Header.css'
import logo from './images/logo.png'

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt=""/>

      <div className='header__search'>
        <input type="text" className="header__searchInput"/>
        {/* Logo */}
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineOne'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineOne'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineOne'>Prime</span>
        </div>
      </div>
    </div>
  )
}

export default Header