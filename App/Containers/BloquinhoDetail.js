import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ActivityIndicator, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import Moment from 'moment/min/moment-with-locales'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import BloquinhoDetailsAction from '../Redux/BloquinhoDetailRedux'

// Styles
import styles from './Styles/BloquinhoDetailStyle'
import { Divider, Icon, Header, Card } from 'react-native-elements';

class BloquinhoDetail extends Component {

  constructor(props) {
    super(props)

    Moment.locale('pt-br')
  }

  componentDidMount() {
    this.props.preset(this.props.navigation.state.params.bloquinho)
    this.props.fetchBloquinhoDetail(this.props.navigation.state.params.bloquinho.blocoId)
  }

  render() {
    if (!this.props.bloquinho)
      return null;

    const startTime = Moment(this.props.bloquinho.start_time).format('lll')
    const outTime = this.props.bloquinho.end_time ? startTime + ' - ' + Moment(this.props.bloquinho.end_time).format('kk:mm') : startTime
    return (
      <View style={styles.mainContainer}>
        <Header leftComponent={<TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <View>
            <Icon name='arrow-back' iconStyle={{ color: 'white' }} />
          </View>
        </TouchableHighlight>}
          centerComponent={<Text numberOfLines={1} style={{ color: 'white' }}>{this.props.bloquinho.bloco_name}</Text>} />
        <ScrollView>
          <Image source={{ uri: this.props.bloquinho.picture }} style={{ height: 220 }} resizeMode='stretch' />
          <Card>
            <Text style={{ fontSize: 20, padding: 20, textAlign: 'center' }}>{this.props.bloquinho.bloco_name}</Text>
          </Card>
          <Card title={'Informações'}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Icon iconStyle={{ padding: 10 }} name='schedule' />
              {this.props.fetching ? <ActivityIndicator /> : <Text>{outTime}</Text>}
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Icon iconStyle={{ padding: 10 }} name='location-on' />
              {this.props.fetching ? <ActivityIndicator /> : <Text numberOfLines={2}> Rua das cabras</Text>}
            </View>
          </Card>
          <Card title={'Detalhes'}>
            <Text>asdhigasd gasdgasasjdgasjdg jagsdhj asdhg agdahj gashjdg asgdjhas gddasg asdgasdgashj gdahjs gasgdasgdas jasg djasgdagsdhj gashjdg as gdasgdas</Text>
          </Card>
        </ScrollView>
      </View>
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
