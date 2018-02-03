import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ActivityIndicator, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import Moment from 'moment/min/moment-with-locales'
import BloquinhoDetailsAction from '../Redux/BloquinhoDetailRedux'

// Styles
import styles from './Styles/BloquinhoDetailStyle'
import { Divider, Icon, Header, Card } from 'react-native-elements';
import ErrorCard from '../Components/ErrorCard'
import Hyperlink from 'react-native-hyperlink'

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
        <Header
          outerContainerStyles={{ height: Platform.OS === 'ios' ? 70 : 70 - 24 }}
          leftComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View>
              <Icon name='arrow-back' iconStyle={styles.icon} />
            </View>
          </TouchableOpacity>}
          centerComponent={<Text numberOfLines={1} style={styles.barTitle}>{this.props.bloquinho.bloco_name}</Text>} />
        <ScrollView>
          <Image source={{ uri: this.props.bloquinho.picture }} style={{ height: 220 }} resizeMode='stretch' />
          <Card>
            <Text style={styles.blocoTitle}>{this.props.bloquinho.bloco_name}</Text>
          </Card>
          
          {!this.props.error && this.props.bloquinho && <Card title={'Informações'}>
            {this.props.fetching ? <ActivityIndicator /> :
              <View>
                <View style={styles.iconedTextContainer}>
                  <Icon iconStyle={{ padding: 10 }} name='schedule' />
                  <Text style={styles.iconedText}>{outTime}</Text>
                </View>
                <View style={styles.iconedTextContainer}>
                  <Icon iconStyle={{ padding: 10 }} name='location-on' />
                  <Text numberOfLines={2} style={styles.iconedText}> {this.props.bloquinho.address}
                  </Text>
                </View>
                <View style={styles.iconedTextContainer}>
                  <Icon iconStyle={{ padding: 10 }} name='public' />
                  <Hyperlink linkStyle={{ color: '#074e8e', textDecorationLine: 'underline' }} linkDefault={true}>
                    <Text numberOfLines={2}> {this.props.bloquinho.page} </Text>
                  </Hyperlink>
                </View>
              </View>
            }
          </Card>}
          {!this.props.error && this.props.bloquinho && <Card title={'Detalhes'}>
            {this.props.fetching ? <ActivityIndicator /> :
              <Text>{this.props.bloquinho.description}</Text>
            }
          </Card>}
        </ScrollView>
        {this.props.error && <ErrorCard onPress={() => this.props.fetchBloquinhoDetail(this.props.bloquinho.blocoId)}/>}
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
