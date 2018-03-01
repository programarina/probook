import React, { Component } from 'react';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <form className='signInForm'>
        <label htmlFor='email'>Email*
          <input
            type='email'
            id='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange} />
        </label>
        <label htmlFor='pass'>Password*
          <input
            type='password'
            id='pass'
            name='password'
            value={this.state.password}
            onChange={this.handleChange} />
        </label>
        <button type='submit'>Sign in</button>
      </form>
    );
  }
}

export default SignInForm;
