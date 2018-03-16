import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../../actions/signin';
import { publicPath } from '../../constants/routes';
import { VALIDATE_EMAIL } from '../../constants/regex';
import { redirectionService } from '../../services/redirectionService';
import { routeCodes } from '../../constants/routes';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      loader: false,
      serverError: null,
    };
  }
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
    this.props.signIn(values);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      redirectionService.redirect(routeCodes.HOME);
      localStorage.setItem('sessionId', nextProps.user.id);
    }
    if (this.props.loader !== nextProps.loader) {
      this.setState({
        loader: nextProps.loader
      });
    }
    if (this.props.error !== nextProps.error) {
      this.setState({
        serverError: nextProps.error
      });
    }
  }

  render() {
    const { loader, serverError } = this.state;
    const { handleSubmit } = this.props;
    return (
      <form className='signInForm' onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <Field
          label='Email*'
          name='email'
          type='email'
          component={this.renderField}
        />
        <Field
          label='Password*'
          name='password'
          type='password'
          component={this.renderField}
        />
        <img
          className={loader ? 'loader' : 'loaderHiden'}
          src='../../../assets/img/loader.gif'
          alt='loader' />
        <button
          className = {loader ? 'loaderHiden' : 'signInForm-button'}
          type='submit'>
          Sign in</button>
        <p>{serverError ? serverError.message : ''}</p>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  const validateEmail = VALIDATE_EMAIL;

  if (!values.email || !(validateEmail.test(values.email))) {
    errors.email = 'Please insert valid email.';
  }
  if (!values.password) {
    errors.password = 'Please insert password.';
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
  form: 'SignInForm'
})(
  connect(mapStateToProps, { signIn })(SignInForm)
  );
