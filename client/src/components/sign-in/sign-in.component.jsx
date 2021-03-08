import React , { useState } from 'react';
import { connect } from 'react-redux'

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn= ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email:'', password: ''});

    const {email, password}= userCredentials;
    const handleSubmit = async e => {
        e.preventDefault();

        emailSignInStart(email, password)
    }

    const handleChange = e => {
        const {value, name} = e.target;

        setCredentials({...userCredentials, [name]: value})
    }
    return (
        <div className='sign-in'>
        <h2>I alredy have an account</h2>
        <span>Sign in with email</span>
        
        <form>
            <FormInput label='email' name='email' type='email' handleChange={handleChange} value={email} required/>
            <FormInput 
                id='password' 
                name='password' 
                type='password' 
                handleChange={handleChange}
                value={password} 
                required
                label='password'
            />
            <div className='buttons'>

                <CustomButton type='submit' onClick={handleSubmit} > Sign In </CustomButton>
                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn > Sign in with GG </CustomButton>
            </div>
        </form>
    </div>
    )
        
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);