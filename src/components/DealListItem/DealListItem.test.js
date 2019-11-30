import React from 'react'
import ReactDOM from 'react-dom'
import DealListItem from './DealListItem'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DealListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});