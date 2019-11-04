import React, { Component } from 'react'
import HappyHourDeal from '../../components/HappyHourDeal/HappyHourDeal'

export default class HappyHourPage extends Component {
  render() {
    return (
      <section>
        This area will have the happy hour deals mapped  using the HappyHourDeal component
        <HappyHourDeal />
        <HappyHourDeal />
        <HappyHourDeal />
        <HappyHourDeal />
        <HappyHourDeal />
      </section>
    )
  }
}