import React, { Component } from 'react';

class SignInForm extends Component {

    render() {
        return (
            <form className='signInForm'>
                <label>Email*
                <input type='email' />
                </label>
                <label>Password*
                <input type='password' />
                </label>
                <button type='submit'>Sign in</button>
            </form>
        );
    }
}

export default SignInForm;