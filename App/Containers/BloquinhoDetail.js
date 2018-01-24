import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BloquinhoDetailStyle'

class BloquinhoDetail extends Component {
  constructor (props) {
    super(props)
    console.tron.log(this.props.navigation.state.params)
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>BloquinhoDetail Container</Text>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhoDetail)
