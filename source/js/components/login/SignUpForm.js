import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { signUp } from '../../actions/signup';
import { routeCodes } from '../../constants/routes';
import { VALIDATE_EMAIL } from '../../constants/regex';
import { redirectionService } from '../../services/redirectionService';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      loader: false,
      serverError: null
    };
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = (error && touched) ? 'invalidInput' : '';
    return (
      <div className='formGroup'>
        <label>{field.label}</label>
        <input
          className={className}
          type={field.type}
          name={field.name}
          {...field.input}
        />
        <div className='errorContainer'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  submitForm(values) {
    console.log(values)
    this.props.signUp(values);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      localStorage.setItem('sessionId', nextProps.user.id);
      redirectionService.redirect(routeCodes.HOME);
    }
    if (nextProps.loader !== this.props.loader) {
      this.setState({
        loader: nextProps.loader
      });
    }
    if (nextProps.error !== this.props.error) {
      this.setState({
        serverError: nextProps.error
      });
    }
  }

  render() {
    const { loader, serverError } = this.state;
    const { handleSubmit } = this.props;
    return (
      <form
        className='signUpForm'
        onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <Field
          name='username'
          label='Username*'
          type='text'
          component={this.renderField}
        />
        <Field
          name='email'
          label='Email*'
          type='email'
          component={this.renderField}
        />
        <Field
          name='password'
          label='Password*'
          type='password'
          component={this.renderField}
        />
        <Field
          name='repeat_password'
          label='Repeat password*'
          type='password'
          component={this.renderField}
        />
        <img
          className={loader ? 'loader' : 'loaderHiden'}
          src='../../../assets/img/loader.gif'
          alt='loader' />
        <button
          className={loader ? 'loaderHiden' : 'signUpForm-button'}
          type='submit'>Sign up</button>
        <p>{serverError ? serverError.message : ''}</p>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  const validateEmail = VALIDATE_EMAIL;

  if (!values.username) {
    errors.username = 'Username field is mandatory.';
  }
  if (!values.email || !(validateEmail.test(values.email))) {
    errors.email = 'Please insert valid email.';
  }
  if (!values.password || values.password.length < 6) {
    errors.password = 'Password should be at least 6 characters long.';
  }
  if (!values.repeat_password || (values.password !== values.repeat_password)) {
    errors.repeat_password = 'Repeat password doesn\'t match with password.';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    user: state.user.get('user'),
    loader: state.user.get('loading'),
    error: state.user.get('error')
  }
}

export default reduxForm({
  validate,
  form: 'SignUpForm'
})(connect(
  mapStateToProps,
  { signUp }
)(SignUpForm));
