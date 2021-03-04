import React from 'react';
import { connect } from 'react-redux'

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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
        const { emailSignInStart } = this.props;
        const {email, password}= this.state;

        emailSignInStart(email, password)
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }
    render() {
        const { googleSignInStart } = this.props;
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
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn > Sign in with GG </CustomButton>
                </div>
            </form>
        </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);