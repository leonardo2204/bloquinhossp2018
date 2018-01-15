import React, { Component } from 'react'
import { connect } from 'react-redux'
import BloquinhosMap from '../Components/BloquinhosMap'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BloquinhosMapScreenStyle'

class BloquinhosMapScreen extends Component {
  render () {
    return (
      <BloquinhosMap />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhosMapScreen)
