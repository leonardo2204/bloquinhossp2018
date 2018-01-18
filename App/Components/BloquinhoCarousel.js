import React, { Component } from 'react'
import { Dimensions, View, Text, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { styles, sliderWidth, itemWidth } from './Styles/BloquinhosCarouselStyles'

export default class BloquinhoCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.container}>
              <Image
                source={{uri: 'https://instagram.fgru5-1.fna.fbcdn.net/vp/a807d5a6d52823dc0614e1cdd92d32bb/5ADF0E92/t51.2885-15/s750x750/sh0.08/e35/14488217_151215075346617_1886875705472450560_n.jpg'}}
                style={styles.image}>
              </Image>
              <View style={styles.textContainer}>
                <Text
                  style={styles.title}>
                  {item.title}
                </Text>
                <Text
                  style={styles.subtitle}>
                  Sei que lá sei que lá sei que lá sei que lá sei que lá sei que lá sei que lá 
                  </Text>
              </View>
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