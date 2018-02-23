import React, { Component } from 'react';

class SignUpForm extends Component {
  render() {
    return (
      <form className='signUpForm'>
        <label htmlFor='name'>Name*
          <input type='text' id='name' />
        </label>
        <label htmlFor='email'>Email*
          <input type='email' id='email' />
        </label>
        <label htmlFor='pass'>Password*
          <input type='password' id='pass' />
        </label>
        <button type='submit'>Sign up</button>
      </form>

    );
  }
}

export default SignUpForm;
