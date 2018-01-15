import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  componentDidMount(){
    const navigate = this.props.navigation.navigate;
    setTimeout(() => navigate("BloquinhosMapScreen"), 1);
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Bloquinhos SP 2018
            </Text>
          </View>
          </View>
      </View>
    )
  }
}
