import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import  { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>

        <div className='options'>
            <Link to='/shop' className='option'>SHOP NOW</Link>
            <Link to='/shop' className='option'>CONTACT NOW</Link>
            {currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to ='/sign-in'> SIGN IN </Link>
            }
            <CartIcon className='option'/>
        </div>
        {hidden ? null : <CartDropdown/>}
        
    </div>
)

const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);