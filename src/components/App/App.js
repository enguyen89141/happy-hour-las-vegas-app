import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LoginPage from '../../routes/LoginPage/LoginPage'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import PrivateRoute from '../Utils/PrivateRoute'
import DealsListPage from '../../routes/DealsListPage/DealsListPage'
import DealsPage from '../../routes/DealsPage/DealsPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={DealsListPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/signup'}
              component={SignUpPage}
            />
            <PrivateRoute
              path={'/deals/:dealId'}
              component={DealsPage}
            />
          </Switch>
        </main>
      </div>

    )
  }
}