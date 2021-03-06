import React, { useState } from 'react';
import { connect } from 'react-redux'

import './sign-up.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

const SignUp = ({signUpStart}) => {

    const [userCredentials, setCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: ''})
    const { displayName, email, password, confirmPassword} = userCredentials;
    const handleSubmit = async e => {
        e.preventDefault();
        setCredentials({...userCredentials, email: '', password: ''});

        if(password !== confirmPassword) {
            alert('Password dont match');
            return;
        }

        signUpStart({ displayName, email, password })
    }

    const handleChange = e => {
        const {value, name} = e.target;

        setCredentials({...userCredentials ,[name]: value})
    }
    return (
        <div className='sign-up'>
        <h2>I don't have an account </h2>
        <span>Sign up with your email</span>
        
        <form className='sign-up-form' onSubmit ={handleSubmit}>
            <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label=' Display name'
                required
            />

            <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
            />

            <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
            />

            <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
            />
            
            <CustomButton type='submit' onClick={handleSubmit} > Sign Up </CustomButton>
        </form>
    </div>
    )
        
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);