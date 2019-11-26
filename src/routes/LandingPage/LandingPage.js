import React, { Component } from 'react'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <h2>Hello and thank you for visiting my web app that helps users find places in Las Vegas that offer happy hour deals!</h2>
        <h4>You'll be able to sign up and log in with an account if you wish or you are welcome to use a demo account.</h4>
        <p>The username is test-user1 and the password is Password1!</p>
        <p>The app currently contains 4 locations with their happy hour deals with the ability to comment on each location.</p>
        <p>I do plan to add more locations in the future or add a functionality for users to add locations; however, I need to work on more validation for back end to determine current location of the users and timezones. Stay tuned for updates!</p>
      </div>
    )
  }
}