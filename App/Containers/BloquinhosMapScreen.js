import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import BloquinhosMap from '../Components/BloquinhosMap'
import { Header, Icon } from 'react-native-elements'
import BloquinhoCarousel from '../Components/BloquinhoCarousel'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BloquinhosMapScreenStyle'

class BloquinhosMapScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Header
            centerComponent={<Text style={styles.title}>Bloquinhos SP 2018</Text>}
            rightComponent={<TouchableOpacity onPress={this.onPress}>
              <Icon color='#fff' name='add' />
            </TouchableOpacity>}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <BloquinhosMap />
          <View
            style = {{
              height: '20%',
              marginBottom: 10,
              justifyContent: 'center'
            }}
          >
            <BloquinhoCarousel />
        </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhosMapScreen)
