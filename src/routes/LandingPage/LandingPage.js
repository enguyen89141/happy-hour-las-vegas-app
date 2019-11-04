import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Thank you for visiting!</h1>
        <h3>This is my full stack capstone project for Bloc.io</h3>
        <p>From this page you'll be able to continue as a guest, user, or admin</p>
        <p>As a guest you'll be able to see all of the happy hour locations.</p>
        <p>As a user account will be able to view more details and comment on the locations.</p>
        <p>As an admin account will be able to add a new location.</p>
        <p>Please select either Sign Up or Login from the upper right.</p>
        <p>Username and passwords will be listed here for different account types</p>
      </div>
    )
  }
}