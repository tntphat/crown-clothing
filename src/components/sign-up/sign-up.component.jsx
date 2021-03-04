import React from 'react';
import { connect } from 'react-redux'

import './sign-up.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { signUpStart } = this.props;
        this.setState({email: '', password: ''});

        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert('Password dont match');
            return;
        }

        signUpStart({ displayName, email, password })
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }
    render() {
        const {email, displayName, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
            <h2>I don't have an account </h2>
            <span>Sign up with your email</span>
            
            <form className='sign-up-form' onSubmit ={this.handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label=' Display name'
                    required
                />

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                />
                
                <CustomButton type='submit' onClick={this.handleSubmit} > Sign Up </CustomButton>
            </form>
        </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);