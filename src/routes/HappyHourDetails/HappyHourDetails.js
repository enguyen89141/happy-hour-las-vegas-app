import React, { Component } from 'react'
import HappyHourDeal from '../../components/HappyHourDeal/HappyHourDeal'

export default class HappyHourDetails extends Component {
  render() {
    return (
      <div>
        <HappyHourDeal />
        <p>Happy hour specials include: half off select drinks and appetizers!</p>
        <textarea>
          Add a comment!
        </textarea>
        <button>Post comment</button>
      </div>
    )
  }
}