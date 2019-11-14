import React, { Component } from 'react'
import HappyHourDeal from '../../components/HappyHourDeal/HappyHourDeal'
import ApiContext from '../../ApiContext'

export default class HappyHourPage extends Component {
  static contextType = ApiContext
  render() {
    const {deals = []} = this.context
    return (
      <section>
        <ul>
          {deals.map(deal => 
            <li key={deal.id}>
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
            </li>)}
        </ul>
      </section>
    )
  }
}