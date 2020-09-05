import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

//using class since  we want to store what users is typing in
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }    

        handleSubmit = async event => {
            event.preventDefault();

            const { email, password } = this.state;

            try {
                await auth.signInWithEmailAndPassword(email, password)
                this.setState({ email: '', password: '' })
        } catch(error) {
            console.log(error);
        }
        
    };

        handleChange = event => {
            const { value, name } = event.target;

            this.setState({ [name]: value })
        }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email" 
                     type="email" 
                     handleChange={this.handleChange} 
                     value={this.state.email}
                     label="email" 
                     required
                    />
                    <FormInput
                     name="password" 
                     type="password" 
                     value={this.state.password}
                     handleChange={this.handleChange}
                     label="password" 
                     required
                    />

                    <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{''}
                    Sign In With Google{''}</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;