import React, { Component } from 'react'
import { Dimensions, View, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const horizontalMargin = 40
const sliderWidth = Dimensions.get('window').width
const itemWidth = sliderWidth - 2 * horizontalMargin

export default class BloquinhoCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={{ flex: 1, width: itemWidth, backgroundColor: item.backgroundColor}}>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={[{title: 'serete', backgroundColor: 'red'}, {title: 'sei que la', backgroundColor: 'green'}, {title: 'é sim, num é não', backgroundColor: 'yellow'}]}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}