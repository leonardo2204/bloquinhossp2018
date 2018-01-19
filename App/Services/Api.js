// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://ayrjnymlpd.execute-api.us-east-1.amazonaws.com/Development/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10 * 1000
  })

  const getRoot = () => api.get('')

  return {
    getRoot,
  }
}

export default {
  create
}
