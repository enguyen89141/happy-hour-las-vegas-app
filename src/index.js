import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCocktail, faSignInAlt, faComments } from '@fortawesome/free-solid-svg-icons'
import App from './components/App/App'
import './index.css';
import { DealListProvider } from './contexts/DealListContext'
import { DealProvider } from './contexts/DealContext'

library.add(
  faCocktail,
  faSignInAlt,
  faComments
)

ReactDOM.render(
  <BrowserRouter>
    <DealListProvider>
      <DealProvider>
        <App />
      </DealProvider>
    </DealListProvider>
  </BrowserRouter>
  , document.getElementById('root'));
