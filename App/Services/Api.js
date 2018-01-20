// a library to wrap and simplify api calls
import { API } from 'aws-amplify-react-native'

// our "constructor"
const create = () => {

  const getRoot = () =>  API.get('Bloquinho', '/bloco')

  return {
    getRoot,
  }
}

export default {
  create
}
