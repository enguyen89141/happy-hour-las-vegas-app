import React, { Component } from 'react'

export const nullDeal = {}

const DealContext = React.createContext({
  deal: nullDeal,
  comments: [],
  error:null,
  setError: () => {},
  clearError: () => { },
  setDeal: () => {},
  clearDeal: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default DealContext

export class DealProvider extends Component {
  state = {
    deal: nullDeal,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setDeal = deal => {
    this.setState({ deal })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearDeal = () => {
    this.setDeal(nullDeal)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      deal: this.state.deal,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDeal: this.setDeal,
      setComments: this.setComments,
      clearDeal: this.clearDeal,
      addComment: this.addComment,
    }
    return (
      <DealContext.Provider value={value}>
        {this.props.children}
      </DealContext.Provider>
    )
  }
}
