import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import BloquinhosMap from '../Components/BloquinhosMap'
import { Header, Icon, Card } from 'react-native-elements'
import BloquinhoCarousel from '../Components/BloquinhoCarousel'
import BloquinhosActions from '../Redux/BloquinhoRedux'
import { NavigationActions } from 'react-navigation'

import LoadingIndicator from '../Components/LoadingIndicator'
import Modal from 'react-native-modal';
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
            outerContainerStyles={{ height: Platform.OS === 'ios' ? 70 : 70 - 24 }}
            centerComponent={<Text style={styles.title}>Bloquinhos SP 2018</Text>}
            rightComponent={<TouchableOpacity onPress={() => this.props.openModal()}>
              <Icon color='#fff' name='add' />
            </TouchableOpacity>}
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
            </View>
          }
        </View>
        <Modal isVisible={this.props.bloquinhoModalVisible}
          onBackdropPress={() => this.props.closeModal()}
          onBackButtonPress={() => this.props.closeModal()}>
          <Card title={'Adicionar bloquinho do Facebook'}>
            <Text>dasda</Text>
          </Card>
        </Modal>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bloquinhos: state.bloquinhos.bloquinhos,
    fetching: state.bloquinhos.fetching,
    error: state.bloquinhos.error,
    bloquinhoCardSelected: state.bloquinhos.bloquinhoCardSelected,
    bloquinhoModalVisible: state.bloquinhos.bloquinhoModalVisible,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(BloquinhosActions.bloquinhoRequest()),
    bloquinhoSelected: (bloquinho) => dispatch(BloquinhosActions.bloquinhoSelected(bloquinho)),
    bloquinhoCardClicked: (bloquinho) => dispatch(NavigationActions.navigate({ routeName: 'BloquinhoDetail', params: {bloquinho} })),
    openModal: () => dispatch(BloquinhosActions.bloquinhoModalVisible(true)),
    closeModal: () => dispatch(BloquinhosActions.bloquinhoModalVisible(false)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhosMapScreen)
