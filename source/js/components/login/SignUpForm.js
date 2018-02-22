import React, { Component } from 'react';

class SignUpForm extends Component {

    render() {
        return (
            <form className='signUpForm'>
                <label>Name*
                    <input type='text' />
                </label>
                <label>Email*
                    <input type='email' />
                </label>
                <label>Password*
                    <input type='password' />
                </label>
                <button type='submit'>Sign up</button>
            </form>

        );
    }
}

export default SignUpForm;