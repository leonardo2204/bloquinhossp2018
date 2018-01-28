import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Platform } from 'react-native'
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

  componentDidUpdate() {
    if (this.props.bloquinhoCardSelected) {
      this.props.navigation.navigate('BloquinhoDetail', { bloquinho: this.props.bloquinhoCardSelected })
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Header
            outerContainerStyles={{ height: Platform.OS === 'ios' ? 70 : 70 - 24 }}
            centerComponent={<Text style={styles.title}>Bloquinhos SP 2018</Text>}
          // rightComponent={<TouchableOpacity onPress={this.onPress}>
          //   <Icon color='#fff' name='add' />
          // </TouchableOpacity>}
          />
        </View>
        <View style={styles.blocoContainer}>
          <BloquinhosMap bloquinhos={this.props.bloquinhos} markerPress={this.props.bloquinhoSelected} />
          {this.props.fetching &&
            <LoadingIndicator />
          }
          {!this.props.fetching && this.props.bloquinhos && this.props.bloquinhos.length > 0 &&
            <View style={styles.carouselContainer}>
              <BloquinhoCarousel bloquinhos={this.props.bloquinhos} changed={this.props.bloquinhoSelected} bloquinhoCardClicked={this.props.bloquinhoCardClicked} />
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
    bloquinhoCardSelected: state.bloquinhos.bloquinhoCardSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(BloquinhosActions.bloquinhoRequest()),
    bloquinhoSelected: (bloquinho) => dispatch(BloquinhosActions.bloquinhoSelected(bloquinho)),
    bloquinhoCardClicked: (bloquinho) => dispatch(BloquinhosActions.bloquinhoCardClicked(bloquinho)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhosMapScreen)
