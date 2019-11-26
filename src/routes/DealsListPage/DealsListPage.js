import React, { Component } from 'react'
import DealListContext from '../../contexts/DealListContext'
import DealApiService from '../../services/deal-api-service'
import DealListItem from '../../components/DealListItem/DealListItem'
import './DealsListPage.css'

export default class DealsListPage extends Component {
  static contextType = DealListContext

  componentDidMount() {
    this.context.clearError()
    DealApiService.getDeals()
      .then(this.context.setDealList)
      .catch(this.context.setError)
  }

  renderDeals() {
    const { dealList = [] } = this.context
    return dealList.map(deal =>
      <p>
        <DealListItem
          key={deal.id}
          deal={deal}
        />
      </p>
    )
  }

  render() {
    const { error } = this.context
    return (
      <div className='DealsListPage'>
        {error
          ? <p>There was an error, try again</p>
          : this.renderDeals()}
      </div>
    )
  }
}