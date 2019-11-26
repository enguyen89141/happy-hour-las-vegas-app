import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import './SignUpForm.css'

export default class SignUpForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })

  }

  render() {
    const { error } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='SignUpForm_user_name'>
            User name
          </label>
          <input
            name='user_name'
            type='text'
            required
            id='SignUpForm_user_name'>
          </input>
        </div>
        <div>
          <label htmlFor='SignUpForm_password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            required
            id='SignUpForm_password'>
          </input>
        </div>
        <button type='submit'>
          Register
        </button>
      </form>
    )
  }
}