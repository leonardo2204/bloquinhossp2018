import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import BloquinhosMap from '../Components/BloquinhosMap'
import { Header, Icon } from 'react-native-elements'
import BloquinhoCarousel from '../Components/BloquinhoCarousel'
import BloquinhosActions from '../Redux/BloquinhoRedux'

// Styles
import styles from './Styles/BloquinhosMapScreenStyle'

class BloquinhosMapScreen extends Component {

  componentDidMount(){
    this.props.fetch()
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Header
            centerComponent={<Text style={styles.title}>Bloquinhos SP 2018</Text>}
            rightComponent={<TouchableOpacity onPress={this.onPress}>
              <Icon color='#fff' name='add' />
            </TouchableOpacity>}
          />
        </View>
        <View style={styles.blocoContainer}>
          <BloquinhosMap />
          <View style = {styles.carouselContainer}>
            <BloquinhoCarousel />
        </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(BloquinhosActions.bloquinhoRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhosMapScreen)
