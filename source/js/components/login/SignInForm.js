import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../../actions/index';

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

  submitForm(values) {

    // this.props.signIn(values, ()=>{
    //   this.props.history.push('/');
    // });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className='signInForm' onSubmit={handleSubmit(this.submitForm.bind(this))}>
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
        <button type='submit'>Sign in</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Please insert valid email.';
  }
  if (!values.password) {
    errors.password = 'Please insert password.';
  }
  return errors;
}


// for connecting actions to component you have to put connect function inside second pare of parantheses and write it in regular style

export default reduxForm({
  validate,
  form: 'SignInForm'
})(
  connect(null, { signIn })(SignInForm)
  );
