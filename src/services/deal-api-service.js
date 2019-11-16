import TokenService from '../services/token-service'
import config from '../config'

const DealApiService = {
  getDeals() {
    return fetch(`${config.API_BASE_URL}/deals`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getDeal(dealId) {
    return fetch(`${config.API_BASE_URL}/deals/${dealId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getDealComments(dealId) {
    return fetch(`${config.API_BASE_URL}/deals/${dealId}/comments`, {
      headers: {
      },
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
  },
  postUser(user) {
    return fetch(`${config.API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(dealId, text) {
    return fetch(`${config.API_BASE_URL}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        deal_id: dealId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default DealApiService