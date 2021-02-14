import React from 'react'
import {Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/logo.svg'
import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>

        <div className='options'>
            <Link to='/shop' className='option'>SHOP NOW</Link>
            <Link to='/shop' className='option'>CONTACT NOW</Link>
        </div>
    </div>
)

export default Header;