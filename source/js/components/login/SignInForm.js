import React, { Component } from 'react';

class SignInForm extends Component {
  render() {
    return (
      <form className='signInForm'>
        <label htmlFor='email'>Email*
          <input type='email' id='email' />
        </label>
        <label htmlFor='pass'>Password*
          <input type='password' id='pass' />
        </label>
        <button type='submit'>Sign in</button>
      </form>
    );
  }
}

export default SignInForm;
