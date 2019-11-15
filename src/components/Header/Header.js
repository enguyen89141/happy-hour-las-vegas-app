import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
          </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div>
        <p><Link
          to='/login'>
          Login
          </Link>
          </p>
        <p>
        <Link
          to='/signup'>
          Sign Up!
            </Link>
        </p>
      </div>
    )
  }
  render() {
    return (
      <nav>
        <h1>
          <Link to='/'>
            Happy Hour Las Vegas
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}