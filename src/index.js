import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './components/App/App'
import './index.css';
import { DealListProvider } from './contexts/DealListContext'
import { DealProvider } from './contexts/DealContext'

ReactDOM.render(
  <BrowserRouter>
    <DealListProvider>
      <DealProvider>
        <App />
      </DealProvider>
    </DealListProvider>
  </BrowserRouter>
  , document.getElementById('root'));
