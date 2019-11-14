import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import HappyHourPage from '../../routes/HappyHourPage/HappyHourPage'
import HappyHourDetails from '../../routes/HappyHourDetails/HappyHourDetails'
import AddDeal from '../../routes/AddDeal/AddDeal'
import ApiContext from '../../ApiContext'
import { API_BASE_URL } from '../../config'


export default class App extends Component {
  state = {
    hasError: false,
    deals: []
  }

  componentDidMount() {
    fetch(API_BASE_URL + '/deals')
      .then(deals => {
        if(!deals.ok) {
          console.log('Error during retrieval of deals')
          throw new Error('There was an issue obtaining happy hour deals from the server')
        }
        return deals;
      })
      .then(deals => deals.json())
      .then(deals => {
        this.setState({
          deals: deals
        })
      })
  }
  // catches JS errors in child component tree, logs errors, and changes error state
  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true }
  }
  render() {
    const value = {
      deals: this.state.deals
    }
    return (
      <ApiContext.Provider value={value}>
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
              path={"/api/deals/:dealId"}
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
      </ApiContext.Provider>
    )
  }
}