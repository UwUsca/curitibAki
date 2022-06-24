import api from '@/api'

export default {
  find(queryParams = {}) {
    return new Promise((resolve, reject) => {
      api.get('/locais', queryParams)
        .then((response) => {
          const data = response.data
          if (data) resolve(data)
          else reject(response)
        })
        .catch(reject)
    })
  },

  findById(id) {
    return new Promise((resolve, reject) => {
      api.get(`/locais/${id}`)
        .then((response) => {
          const data = response.data
          if (data) resolve(data)
          else reject(response)
        })
        .catch(reject)
    })
  },

  create(data) {
    return new Promise((resolve, reject) => {
      api.post(`/locais`, null, data)
        .then(resolve)
        .catch(reject)
    })
  },

  update(id, data) {
    return new Promise((resolve, reject) => {
      api.post(`/locais/${id}`, null, data)
        .then(resolve)
        .catch(reject)
    })
  },

  remove(id) {
    return new Promise((resolve, reject) => {
      api.remove(`/locais/${id}`)
        .then(resolve)
        .catch(reject)
    })
  },
}