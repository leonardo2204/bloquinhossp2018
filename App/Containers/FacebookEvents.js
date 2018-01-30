import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { AccessToken, GraphRequest, GraphRequestManager, LoginButton } from 'react-native-fbsdk'

// Styles
import styles from './Styles/FacebookEventsStyle'
import { Icon, Header, Avatar } from 'react-native-elements';

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

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <View style={styles.separator} />

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => item.id

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

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
        {this.props.fetching  && <LoadingIndicator />}
        {this.props.events && <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.events}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />}
        <LoginButton />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { events, fetching } = state.facebookEvents
  return {
    events, fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMyEvents: () => dispatch(FacebookEventsActions.facebookEventsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookEvents)
