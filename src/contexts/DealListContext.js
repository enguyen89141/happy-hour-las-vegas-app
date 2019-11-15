import React, { Component } from 'react'

const DealListContext = React.createContext({
  dealList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setDealList: () => {},
})

export default DealListContext

export class DealListProvider extends Component {
  state = {
    dealList: [],
    error: null,
  };

  setDealList = dealList => {
    this.setState({ dealList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      dealList: this.state.dealList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDealList: this.setDealList,
    }
    return (
      <DealListContext.Provider value={value}>
        {this.props.children}
      </DealListContext.Provider>
    )
  }
}