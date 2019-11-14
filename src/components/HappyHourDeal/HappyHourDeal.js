import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext'

export default class HappyHourDeal extends Component {
  static contextType = ApiContext
  render() {
    const {id, name, phone_number, address, zip, happy_hour_days, happy_hour_start, happy_hour_end, reverse_happy_hour_start, reverse_happy_hour_end } = this.props
    return (
      <div>
        <h3><Link to={`/api/deals/${id}`}>{name}</Link></h3>
        <p>Address: {address}</p>
        <p>Zip: {zip}</p>
        <p>Phone Number: {phone_number}</p>
        <p>Happy Hours: {happy_hour_days} from {happy_hour_start} to {happy_hour_end}</p>
        {reverse_happy_hour_start ? 
          (<p>Reverse Happy Hours from {reverse_happy_hour_start} to {reverse_happy_hour_end}</p>)
          : (<p>No reverse Happy Hour</p>)
        }
      </div>
    )
  }
}