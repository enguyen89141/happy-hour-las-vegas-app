import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddDeal extends Component {
  render() {
    return (
      <div>
        <section>
          <h3>Name of Happy Hour Location: <input /></h3>
          <h4>Hours of operation: </h4>
          <select>
            <option>Hours 1-12</option>
          </select>
          <select>
            <option>AM</option>
            <option>PM</option>
          </select>
          <h4>Happy Hours: </h4>
          <select>
            <option>Hours 1-12</option>
          </select>
          <select>
            <option>AM</option>
            <option>PM</option>
          </select>
          <h4>Details: </h4>
          <textarea>
            Happy hour deal consists of...
        </textarea>
        </section>
        <button>
          <Link to="/happyhour">
            Add Happy Hour Deal!
          </Link>
        </button>
      </div>
    )
  }
}