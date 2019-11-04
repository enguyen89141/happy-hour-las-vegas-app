import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import HappyHourPage from '../../routes/HappyHourPage/HappyHourPage'
import HappyHourDetails from '../../routes/HappyHourDetails/HappyHourDetails'
import AddDeal from '../../routes/AddDeal/AddDeal'


export default class App extends Component {
  state = {
    hasError: false
  }
  // catches JS errors in child component tree, logs errors, and changes error state
  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true }
  }
  render() {
    return (
      <div className="App">
        <header className="App_header">
          <Header />
        </header>
        <main className="App_main">
          {this.state.hasError && <p>There was an error. Please try again later</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              exact
              path={'/login'}
              component={LoginPage}
            />
            <Route
              exact
              path={'/signup'}
              component={SignUpPage}
            />
            <Route
              exact
              path={'/happyhour'}
              component={HappyHourPage}
            />
            <Route
              exact
              path={"/happyhourdetails"}
              component={HappyHourDetails}
            />
            <Route
              exact
              path={"/admin"}
              component={AddDeal}
            />
          </Switch>
        </main>
      </div>
    )
  }
}