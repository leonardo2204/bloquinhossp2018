import React, { Component } from 'react'
import { Dimensions, View, Text, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { connect } from 'react-redux'

import { styles, sliderWidth, itemWidth } from './Styles/BloquinhosCarouselStyles'

class BloquinhoCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.container}>
              <Image
                source={{uri: item.picture}}
                style={styles.image}>
              </Image>
              <View style={styles.textContainer}>
                <Text numberOfLines={4}
                  style={styles.title}>
                  {item.bloco_name}
                </Text>
              </View>
            </View>
        );
    }

    render () {
        return (
           this.props.bloquinhos && <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.props.bloquinhos}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              onSnapToItem={idx => this.props.changed(this.props.bloquinhos[idx])}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
      bloquinhos: state.bloquinhos.bloquinhos,
    }
  }

export default connect(mapStateToProps, null)(BloquinhoCarousel)