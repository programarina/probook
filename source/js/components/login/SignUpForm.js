import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <form className='signUpForm'>
        <label htmlFor='name'>Name*
          <input
            type='text'
            id='name'
            value={this.state.name}
            name='name'
            onChange={this.handleChange} />
        </label>
        <label htmlFor='email'>Email*
          <input
            type='email'
            id='email'
            value={this.state.email}
            name='email'
            onChange={this.handleChange} />
        </label>
        <label htmlFor='pass'>Password*
          <input
            type='password'
            id='pass'
            value={this.state.password}
            name='password'
            onChange={this.handleChange} />
        </label>
        <button type='submit'>Sign up</button>
      </form>

    );
  }
}

export default SignUpForm;
