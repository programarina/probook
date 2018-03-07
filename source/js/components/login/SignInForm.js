import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignInForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = (touched && error) ? 'invalidInput' : '';
    return (
      <div className='formGroup'>
        <label>{field.label}</label>
        <input
          className={className}
          type={field.type}
          {...field.input}
        />
        <div className='errorContainer'>
          {touched ? error : ''}
        </div>
      </div>);
  }

  render() {
    return (
      <form className='signInForm'>
        <Field
          label='Username*'
          name='username'
          type='email'
          component={this.renderField}
        />
        <Field
          label='Password*'
          name='password'
          type='password'
          component={this.renderField}
        />
        <button type='submit' onClick={this.submitForm}>Sign in</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.username = 'Please insert valid email.';
  }
  if (!values.password) {
    errors.password = 'Please insert password.';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'SignInForm'
})(SignInForm);
