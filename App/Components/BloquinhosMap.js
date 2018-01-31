import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import BloquinhosMapCallout from './BloquinhosMapCallout'
import Styles from './Styles/BloquinhosMapStyles'
import { connect } from 'react-redux'

/* ***********************************************************
* IMPORTANT!!! Before you get started, if you are going to support Android,
* PLEASE generate your own API key and add it to android/app/src/main/AndroidManifest.xml
* https://console.developers.google.com/apis/credentials
* Also, you'll need to enable Google Maps Android API for your project:
* https://console.developers.google.com/apis/api/maps_android_backend/
*************************************************************/

class BloquinhosMap extends React.Component {
  
  constructor (props) {
    super(props)
    
    //starts at Sao Paulo center region
    const region = { latitude: -23.5619262, longitude: -46.6412144, latitudeDelta: 0.1, longitudeDelta: 0.1}
    this.state = {
      region,
      //showUserLocation: false
    }
    
    this.renderMapMarkers = this.renderMapMarkers.bind(this)
    this.mapRef = null;
    //this.onRegionChange = this.onRegionChange.bind(this)
  }

  componentDidUpdate(){
    if(this.props.selectedBloquinho)
      this.mapRef.animateToCoordinate({latitude : this.props.selectedBloquinho.latitude, longitude : this.props.selectedBloquinho.longitude})
  }

  onRegionChange (newRegion) {
    /* ***********************************************************
    * STEP 4
    * If you wish to fetch new locations when the user changes the
    * currently visible region, do something like this:
    *************************************************************/
    // const searchRegion = {
    //   ne_lat: newRegion.latitude + newRegion.latitudeDelta / 2,
    //   ne_long: newRegion.longitude + newRegion.longitudeDelta / 2,
    //   sw_lat: newRegion.latitude - newRegion.latitudeDelta / 2,
    //   sw_long: newRegion.longitude - newRegion.longitudeDelta / 2
    // }
    // Fetch new data...
  }

  markerPress (bloquinhoSelected) {
    this.props.markerPress(this.props.bloquinhos.find(bloquinho => bloquinho.blocoId === bloquinhoSelected.id))
  }

  renderMapMarkers (bloquinho) {
    return (
      <MapView.Marker key={bloquinho.blocoId} identifier={bloquinho.blocoId} coordinate={{latitude: bloquinho.latitude, longitude: bloquinho.longitude}} 
      onPress={(e) => this.markerPress(e.nativeEvent)}/>
    )
  }

  render () {
    return (
      <MapView
        style={Styles.map}
        initialRegion={this.state.region}
        ref={(ref) => { this.mapRef = ref }}
        //onRegionChangeComplete={this.onRegionChange}
        //showsUserLocation={this.state.showUserLocation}
      >
        {this.props.bloquinhos && this.props.bloquinhos.map((bloquinho) => { 
            this.renderMapMarkers(bloquinho)
        })}
      </MapView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bloquinhos: state.bloquinhos.bloquinhos,
    selectedBloquinho: state.bloquinhos.bloquinhoSelected
  }
}

export default connect(mapStateToProps, null)(BloquinhosMap)

