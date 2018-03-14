import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../../actions/signin';
import { publicPath } from '../../constants/routes';
import { VALIDATE_EMAIL } from '../../constants/regex';

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
    this.props.signIn(values);
    // localStorage.setItem('sessionId', this.props.user.id);
  }
  
  render() {
    console.log('PROPSSSSSS',this.props);
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
        <button type='submit'>Sign in</button>
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

// for connecting actions to component you have to put connect function inside second pare of parantheses and write it in regular style
function mapStateToProps(state) {
  return {
    user: state.userSignIn
  }
}

export default reduxForm({
  validate,
  form: 'SignInForm'
})(
  connect(mapStateToProps, { signIn })(SignInForm)
  );
