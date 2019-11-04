import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GuestPage extends Component {
  render() {
    return (
      <div>
        <h2>Username: </h2>
        <input />
        <h2>Password: </h2>
        <input />
        <Link to="/happyhourdetails">
          <button>
            Log In.
          </button>
        </Link>
        <Link to="/admin">
          <button>
            Log In As Admin
            </button>
        </Link>
      </div>
    )
  }
}