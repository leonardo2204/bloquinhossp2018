export default {
  // Functions return fixtures
  getRoot: () => {
    return require('../Fixtures/bloquinhos.json')
  },
  getBloquinho: (blocoId) => {
    const bloquinhos = {
      '155648371739352' : require('../Fixtures/bloquinhoDetail/155648371739352.json'),
      '207035546507008' : require('../Fixtures/bloquinhoDetail/207035546507008.json'),
    }
    return bloquinhos[blocoId]
  }
}
