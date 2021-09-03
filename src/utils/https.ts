import axios from 'axios'

const http = axios.create({
  baseURL:  'http://localhost:3024',
  headers: {
    authorization: 'Bearer 1235460'
  }
})

export default http