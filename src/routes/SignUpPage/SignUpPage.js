import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignUpPage extends Component {
  render() {
    return (
      <div>
        <h2>Full Name: <input /></h2>
        <h2>Email: <input /></h2>
        <h2>Password: <input /></h2>

        <section>
          <button>
            <Link to="/happyhourdetails">
              Sign Up
            </Link>
          </button>
          <p>or continue as a</p>
          <button>
            <Link to="/happyhour">
              Guest
          </Link>
          </button>
        </section>
      </div>
    )
  }
}