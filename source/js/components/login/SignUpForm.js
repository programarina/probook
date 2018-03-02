import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setUserData } from '../../actions/index';

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

  submitSingUpForm = (e) => {
    e.preventDefault();
    const user = this.state;
    this.props.setUserData(user);
    localStorage.setItem('name', this.state.name);
    window.location.assign(`/`);

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
        <button type='submit' onClick={this.submitSingUpForm}>Sign up</button>
      </form>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUserData: setUserData }, dispatch);
};


export default connect(null, mapDispatchToProps)(SignUpForm);
