import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import BloquinhosMap from '../Components/BloquinhosMap'
import { Header, Icon } from 'react-native-elements'
import BloquinhoCarousel from '../Components/BloquinhoCarousel'
import BloquinhosActions from '../Redux/BloquinhoRedux'

import LoadingIndicator from '../Components/LoadingIndicator'

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
          <BloquinhosMap bloquinhos={this.props.bloquinhos} calloutPress={this.props.bloquinhoSelected}/>
          {this.props.fetching &&
            <LoadingIndicator />
          }
          {!this.props.fetching && this.props.bloquinhos && this.props.bloquinhos.length > 0 &&
            <View style={styles.carouselContainer}>
              <BloquinhoCarousel bloquinhos={this.props.bloquinhos} changed={this.props.bloquinhoSelected}/>
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
    selectedBloquinho: state.selectedBloquinho
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(BloquinhosActions.bloquinhoRequest()),
    bloquinhoSelected: (bloquinho) => dispatch(BloquinhosActions.bloquinhoSelected(bloquinho))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhosMapScreen)
