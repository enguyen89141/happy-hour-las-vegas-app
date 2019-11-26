import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className="Header_logged_in">
        <Link
          onClick={this.handleLogoutClick}
          to='/home'>
          Logout
          </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className="Header_logged_out">
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
    const AuthButton = withRouter(() => (
      TokenService.hasAuthToken() ?
        <p>
          {this.renderLogoutLink()}
        </p>
        : <p>
          {this.renderLoginLink()}
        </p>
    ))
    return (
      <nav className="Header">
        <h1>
          <Link to='/home'>
            <FontAwesomeIcon color='#722f37' icon='cocktail' pulse />
            Happy Hour Las Vegas
          </Link>
        </h1>
        <AuthButton />
      </nav>
    )
  }
}