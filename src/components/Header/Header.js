import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/happyhour'>
            Happy Hour Las Vegas
        </Link>
        </h1>
        <span className="Header_login">
          <button>
            <Link to='/signup'>
              Sign Up
            </Link>
          </button>
          <button>
            <Link to='/login'>
              Log In
            </Link>
          </button>
        </span>
      </nav>
    )
  }
}