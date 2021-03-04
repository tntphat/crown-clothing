import React from 'react';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { signOutStart } from '../../redux/user/user.actions';

import {ReactComponent as Logo} from '../../assets/logo.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer className='header'>
        <LogoContainer to='/' >
            <Logo className='logo'></Logo>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop' >SHOP NOW</OptionLink>
            <OptionLink to='/shop' >CONTACT NOW</OptionLink>
            {currentUser ? 
                <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
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
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);