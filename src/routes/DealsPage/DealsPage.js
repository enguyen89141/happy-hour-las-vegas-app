import React, { Component } from 'react'
import DealContext from '../../contexts/DealContext'
import DealApiService from '../../services/deal-api-service'
import CommentForm from '../../components/CommentForm/CommentForm'
import './DealsPage.css'

export default class DealsPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = DealContext

  componentDidMount() {
    const { dealId } = this.props.match.params
    this.context.clearError()
    DealApiService.getDeal(dealId)
      .then(this.context.setDeal)
      .catch(this.context.setError)
    DealApiService.getDealComments(dealId)
      .then(this.context.setComments)
      .catch(this.context.setError)

  }

  componentWillUnmount() {
    this.context.clearDeal()
  }

  renderDeal() {
    const { deal } = this.context
    return <div className='dealsPage'>
      <h2><a href={deal.url} rel="noopener noreferrer" target="_blank">{deal.name}</a></h2>
      <p>{deal.description}</p>
      <p>Address: {deal.address}</p>
      <p>Happy hours: {deal.happy_hour_days} from {deal.happy_hour_start} to {deal.happy_hour_end}</p>
      {deal.reverse_happy_hour_start ?
        <p>Reverse happy hour from {deal.reverse_happy_hour_start} to {deal.reverse_happy_hour_end}</p>
        : <p>No reverse happy hour specials</p>}
      <CommentForm />
    </div>
  }

  renderComments() {
    const { comments = [] } = this.context
    return <div className='commentsList'>
      <h4>What people are saying about this place!</h4>
      {comments.map(comment =>
        <p className="comment">
          {comment.text}
        </p>
      )}
    </div>
  }
  render() {
    const { error } = this.context
    let content
    if (error) {
      content = (error.error === `Deal doesn't exist`)
        ? <p>Deal not found.</p>
        : <p>There was an error</p>
    } else {
      content = this.renderDeal()
    }
    return (
      <div>
        {content}
        {this.renderComments()}
      </div>
    )
  }
}
