import React, { Component } from 'react'
import DealContext from '../../contexts/DealContext'
import DealApiContext from '../../services/deal-api-service'
import DealApiService from '../../services/deal-api-service'

export default class CommentForm extends Component {
  static contextType = DealContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { deal } = this.context
    const { text } = ev.target
    DealApiService.postComment(deal.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}
      >
        <div>
          <textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment...'>
            </textarea>
        </div>
        <button type ='submit'>
          Add a comment!
        </button>
      </form>
    )
  }
}