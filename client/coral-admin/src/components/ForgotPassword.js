import React from 'react';
import PropTypes from 'prop-types';
import styles from './ForgotPassword.css';
import { Button, TextField, Alert, Success } from 'coral-ui';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEmailChange = e => this.props.onEmailChange(e.target.value);

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  handleSignInLink = e => {
    e.preventDefault();
    this.props.onSignInLink();
  };

  renderSuccess() {
    return (
      <div className={styles.success} onClick={this.handleSignInLink}>
        {this.props.success}{' '}
        <a
          className={styles.signInLink}
          href="#"
          onClick={this.handleSignInLink}
        >
          Sign in
        </a>
        <Success />
      </div>
    );
  }

  renderForm() {
    const { email, errorMessage } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {errorMessage && <Alert>{errorMessage}</Alert>}
        <TextField
          label="Email Address"
          value={email}
          onChange={this.handleEmailChange}
        />
        <Button type="submit" cStyle="black" full>
          Reset Password
        </Button>
        <p className={styles.cta}>
          Go back to{' '}
          <a
            href="#"
            className={styles.signInLink}
            onClick={this.handleSignInLink}
          >
            Sign In
          </a>
          .
        </p>
      </form>
    );
  }

  render() {
    return this.props.success ? this.renderSuccess() : this.renderForm();
  }
}

ForgotPassword.propTypes = {
  success: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onSignInLink: PropTypes.func.isRequired,
};

export default ForgotPassword;
