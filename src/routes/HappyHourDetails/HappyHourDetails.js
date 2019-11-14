import React, { Component } from 'react'
import HappyHourDeal from '../../components/HappyHourDeal/HappyHourDeal'
import { findDeal } from '../../deals-helper'
import ApiContext from '../../ApiContext'

export default class HappyHourDetails extends Component {
  static contextType = ApiContext
  render() {
    const {deals = []} = this.context
    const {dealId} = this.props.match.params
    const deal = findDeal(deals, parseInt(dealId)) || { description: ''}
    return (
      <div>
        <HappyHourDeal
                id={deal.id}
                name={deal.name}
                address={deal.address}
                phone_number={deal.phone_number}
                zip={deal.zip}
                happy_hour_days={deal.happy_hour_days}
                happy_hour_start={deal.happy_hour_start}
                happy_hour_end={deal.happy_hour_end}
                reverse_happy_hour_start={deal.reverse_happy_hour_start}
                reverse_happy_hour_end={deal.reverse_happy_hour_end}
                />
        <p>Descripton: {deal.description}</p>
        {deal.url && <p><a href={deal.url} target="_blank">Click here to visit their website!</a></p>}
        <ul>
          <li>Comment 1</li>
          <li>Comment 2</li>
        </ul>
        <textarea>
          Add a comment!
        </textarea>
        <button>Post comment</button>
      </div>
    )
  }
}