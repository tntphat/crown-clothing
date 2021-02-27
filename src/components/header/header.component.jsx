import React from 'react';
import { connect } from 'react-redux';

import  { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from '../../assets/logo.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer className='header'>
        <LogoContainer to='/' >
            <Logo className='logo'></Logo>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop' >SHOP NOW</OptionLink>
            <OptionLink to='/shop' >CONTACT NOW</OptionLink>
            {currentUser ? 
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                :
                <OptionLink  to ='/sign-in'> SIGN IN </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
        
    </HeaderContainer>
)

const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);