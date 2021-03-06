import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './SignUpPage.css'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleSignUpSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <div className="signup">
        <h2>Register</h2>
        <SignUpForm
          onSignUpSuccess={this.handleSignUpSuccess}
        />
      </div>
    )
  }
}
