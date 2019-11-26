import React, { Component } from 'react'
import DealContext from '../../contexts/DealContext'
import DealApiService from '../../services/deal-api-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CommentForm.css'

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
        <button className="commentSubmit" type ='submit'>
          <FontAwesomeIcon color='#722f37' icon='comments' />
          {' '}
          Add a comment!
        </button>
      </form>
    )
  }
}