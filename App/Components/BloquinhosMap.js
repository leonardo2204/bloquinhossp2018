import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import BloquinhosMapCallout from './BloquinhosMapCallout'
import Styles from './Styles/BloquinhosMapStyles'
import { connect } from 'react-redux'

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

  markerPress (bloquinhoSelected) {
    this.props.markerPress(this.props.bloquinhos.find(bloquinho => bloquinho.blocoId === bloquinhoSelected.id))
  }

  renderMapMarkers (bloquinho) {
      const bloquinhoSelected = bloquinho.blocoId  === this.props.selectedBloquinho.blocoId
    
    return (
      <MapView.Marker key={bloquinho.blocoId} pinColor={ bloquinhoSelected ? 'lime': 'red' }
       identifier={bloquinho.blocoId} coordinate={{latitude: bloquinho.latitude, longitude: bloquinho.longitude}} 
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
            return this.renderMapMarkers(bloquinho)
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

