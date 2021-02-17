import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:'',
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password}= this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        }
        catch(error){
            console.log(error);
        }

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

                    <CustomButton type='submit' onClick={this.handleSubmit} > Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with GG </CustomButton>
                </div>
            </form>
        </div>
        )
        
    }
}

export default SignIn;