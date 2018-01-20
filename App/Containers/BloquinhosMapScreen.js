import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import BloquinhosMap from '../Components/BloquinhosMap'
import { Header, Icon } from 'react-native-elements'
import BloquinhoCarousel from '../Components/BloquinhoCarousel'
import BloquinhosActions from '../Redux/BloquinhoRedux'

// Styles
import styles from './Styles/BloquinhosMapScreenStyle'

class BloquinhosMapScreen extends Component {

  componentDidMount() {
    this.props.fetch()
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Header
            centerComponent={<Text style={styles.title}>Bloquinhos SP 2018</Text>}
          // rightComponent={<TouchableOpacity onPress={this.onPress}>
          //   <Icon color='#fff' name='add' />
          // </TouchableOpacity>}
          />
        </View>
        <View style={styles.blocoContainer}>
          <BloquinhosMap />
          {this.props.fetching &&
            <View style={styles.loadingContainer}>
              <View style={styles.loadingIntrisics}>
                <ActivityIndicator color='white' />
                <Text style={styles.loadingText}>Carregando</Text>
              </View>
            </View>}
          {!this.props.fetching && this.props.bloquinhos && this.props.bloquinhos.length > 0 &&
            <View style={styles.carouselContainer}>
              <BloquinhoCarousel bloquinhos={this.props.bloquinhos} />
            </View>}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bloquinhos: state.bloquinhos.bloquinhos,
    fetching: state.bloquinhos.fetching,
    error: state.bloquinhos.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(BloquinhosActions.bloquinhoRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhosMapScreen)
