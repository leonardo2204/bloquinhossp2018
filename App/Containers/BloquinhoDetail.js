import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import BloquinhoDetailsAction from '../Redux/BloquinhoDetailRedux'

// Styles
import styles from './Styles/BloquinhoDetailStyle'
import { Divider, Icon } from 'react-native-elements';

class BloquinhoDetail extends Component {

  componentDidMount() {
    this.props.preset(this.props.navigation.state.params.bloquinho)
    this.props.fetchBloquinhoDetail(this.props.navigation.state.params.bloquinho.blocoId)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: this.props.bloquinho ? this.props.bloquinho.picture: '' }} style={{ height: 220 }} resizeMode='stretch' />
        <Text style={{ fontSize: 20, padding: 20, textAlign: 'center' }}>{this.props.bloquinho ? this.props.bloquinho.bloco_name: ''}</Text>
        <Divider style={{ height: 2, backgroundColor: 'black' }} />
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Icon iconStyle={{ padding: 10 }} name='schedule' />
          {this.props.fetching ? <ActivityIndicator /> : <Text>{ this.props.bloquinho ? this.props.bloquinho.start_time : '' }</Text>}
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Icon iconStyle={{ padding: 10 }} name='location-on' />
          <Text>adlasdlasdlasldasldasl</Text>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bloquinho: state.bloquinhoDetail.bloquinho,
    fetching: state.bloquinhoDetail.fetching,
    error: state.bloquinhoDetail.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBloquinhoDetail: (id) => dispatch(BloquinhoDetailsAction.bloquinhoDetailRequest(id)),
    preset: (bloquinho) => dispatch(BloquinhoDetailsAction.bloquinhoDetailPreset(bloquinho.bloco_name, bloquinho.blocoId, bloquinho.picture))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhoDetail)
