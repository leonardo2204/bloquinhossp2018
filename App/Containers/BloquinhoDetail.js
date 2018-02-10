import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ActivityIndicator, TouchableOpacity, Platform, Linking, Alert } from 'react-native'
import { connect } from 'react-redux'
import Moment from 'moment/min/moment-with-locales'
import BloquinhoDetailsAction from '../Redux/BloquinhoDetailRedux'
import BloquinhoHeaderComponent from "../Components/BloquinhoHeaderComponent";

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
    this.props.fetchBloquinhoDetail(this.props.bloquinho.blocoId)
  }

  openMap = (lat, long) => {
    const call = Platform.select({
      ios: () => {
        Linking.openURL(`http://maps.apple.com/?ll=${lat},${long}`);
      },
      android: () => {
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${lat},${long}`).catch(err => console.error('An error occurred', err));;
      }
    });

    Alert.alert(
      'Maps',
      'Abrir no Maps?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => call() },
      ]
    )
  }

  render() {
    if (!this.props.bloquinho)
      return null;

    const startTime = Moment(this.props.bloquinho.start_time).format('lll')
    const outTime = this.props.bloquinho.end_time ? startTime + ' - ' + Moment(this.props.bloquinho.end_time).format('kk:mm') : startTime
    return (
      <View style={styles.mainContainer}>
        <BloquinhoHeaderComponent
          navigateBack={true}
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
                <TouchableOpacity style={styles.iconedTextContainer} onPress={() => this.openMap(this.props.bloquinho.latitude, this.props.bloquinho.longitude)} activeOpacity={.9}>
                  <Icon iconStyle={{ padding: 10 }} name='location-on' />
                  <Text numberOfLines={2} style={styles.iconedText}> {this.props.bloquinho.address}
                  </Text>
                </TouchableOpacity>
                <View style={styles.iconedTextContainer}>
                  <Icon iconStyle={{ padding: 10 }} name='public' />
                 {this.props.bloquinho.page && <Hyperlink linkStyle={{ color: '#074e8e', textDecorationLine: 'underline' }} linkDefault={true}>
                    <Text numberOfLines={2}> {this.props.bloquinho.page} </Text>
                  </Hyperlink>}
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
        {this.props.error && <ErrorCard onPress={() => this.props.fetchBloquinhoDetail(this.props.bloquinho.blocoId)} />}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bloquinho: state.bloquinhoDetail.bloquinho || state.bloquinhos.bloquinhoSelected,
    fetching: state.bloquinhoDetail.fetching,
    error: state.bloquinhoDetail.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBloquinhoDetail: (id) => dispatch(BloquinhoDetailsAction.bloquinhoDetailRequest(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhoDetail)
