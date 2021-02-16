import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:'',
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='sign-in'>
            <h2>I alredy have an account</h2>
            <span>Sign in with email</span>
            
            <form onSubmit = {this.handleSubmit}>
                <FormInput label='email' name='email' type='email' handleChange={this.handleChange} value={this.state.email} required/>
                <FormInput 
                    id='password' 
                    name='password' 
                    type='password' 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    required
                    label='password'
                />
                <div className='buttons'>

                    <CustomButton type='submit' > Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with GG </CustomButton>
                </div>
            </form>
        </div>
        )
        
    }
}

export default SignIn;