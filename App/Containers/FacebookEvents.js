import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { AccessToken, GraphRequest, GraphRequestManager, LoginButton } from 'react-native-fbsdk'

// Styles
import styles from './Styles/FacebookEventsStyle'
import { Icon, Header, Avatar, Card } from 'react-native-elements';

import FacebookEventsActions from '../Redux/FacebookEventsRedux'
import LoadingIndicator from '../Components/LoadingIndicator';

class FacebookEvents extends React.PureComponent {

  componentDidMount() {
    this.props.fetchMyEvents()
  }

  renderRow({ item }) {
    return (
      <TouchableOpacity style={styles.row} activeOpacity={.7}>
        <Avatar
          medium
          source={{ uri: item.picture.data.url }}
          containerStyle={{ margin: 10 }}>
        </Avatar>
        <View style={styles.textContainer}>
          <Text numberOfLines={2}
            style={styles.title}>
            {item.name}
          </Text>
        </View>
        <Icon name={'navigate-next'} iconStyle={{ marginRight: 15, marginLeft: 5 }} />
      </TouchableOpacity>
    )
  }

  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <View style={styles.separator} />

  keyExtractor = (item, index) => item.id

  oneScreensWorth = 20

  render() {
    return (
      <View style={styles.container}>
        <Header
          outerContainerStyles={{ height: Platform.OS === 'ios' ? 70 : 70 - 24 }}
          centerComponent={<Text style={styles.barTitle}>Meus próximos eventos</Text>}
          leftComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View>
              <Icon name='arrow-back' iconStyle={styles.icon} />
            </View>
          </TouchableOpacity>} />
        {this.props.fetching && <LoadingIndicator />}
        {this.props.events && <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.events}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />}
        {!this.props.userLoggedIn && <View style={{flex: 1,  alignContent: 'center', justifyContent: 'center'}}>
          <Card title={'Login'} wrapperStyle={{alignItems: 'center'}}>
            <Text style={{marginBottom : 15}}>
              <Text>Usamos o facebook para importar seus eventos para nossa plataforma. Não salvamos absolutamente nenhuma informação de sua conta.</Text>
            </Text>
            <LoginButton onLoginFinished={
              (error, result) => {
                if (error || result.isCancelled) return null
                this.props.userLoggedIn()
              }
            }
              onLogoutFinished={() => this.props.userLoggedOut()} />
          </Card>
        </View>}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { events, fetching, userLoggedIn } = state.facebookEvents
  return {
    events, fetching, userLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMyEvents: () => dispatch(FacebookEventsActions.facebookEventsRequest()),
    userLoggedIn: () => dispatch(FacebookEventsActions.facebookEventsRequest()),
    userLoggedOut: () => dispatch(FacebookEvents.facebookEventsUserNotLoggedIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookEvents)
