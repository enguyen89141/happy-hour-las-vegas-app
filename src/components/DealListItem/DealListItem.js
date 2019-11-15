import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DealListItem extends Component {
  render() {
    const { deal } = this.props
    return (
      <Link to ={`/deals/${deal.id}`}>
        {deal.name}
      </Link>
    )
  }
}