import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BloquinhoDetailStyle'
import { Divider, Icon } from 'react-native-elements';

class BloquinhoDetail extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      ...this.props.navigation.state.params.bloquinho
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={{uri : this.state.picture}} style={{height: 220}} resizeMode='stretch'/>
        <Text style={{fontSize: 20, padding: 20, textAlign:'center'}}>{this.state.bloco_name}</Text>
        <Divider style={{height: 2, backgroundColor:'black'}}/>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Icon iconStyle={{padding: 10}} name='schedule'/>
          <Text>adlasdlasdlasldasldasl</Text> 
        </View>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Icon iconStyle={{padding: 10}} name='location-on'/>
          <Text>adlasdlasdlasldasldasl</Text> 
        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(BloquinhoDetail)
