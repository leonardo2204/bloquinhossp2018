import React, { Component } from 'react'
import { Dimensions, View, Text, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const horizontalMargin = 40
const sliderWidth = Dimensions.get('window').width
const itemWidth = sliderWidth - 2 * horizontalMargin

export default class BloquinhoCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={{ flex: 1,
              width: itemWidth,
              backgroundColor: item.backgroundColor,
              height: 99,
              borderRadius: 6,
              shadowColor: "rgba(0, 0, 0, 0.13)",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowRadius: 0,
              shadowOpacity: 1,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "rgba(151, 151, 151, 0.2)",
              flexDirection: 'row',
            }}>
              <Image
                source={{uri: 'https://instagram.fgru5-1.fna.fbcdn.net/vp/a807d5a6d52823dc0614e1cdd92d32bb/5ADF0E92/t51.2885-15/s750x750/sh0.08/e35/14488217_151215075346617_1886875705472450560_n.jpg'}}
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  width: 75,
                  height: 75,
                  borderRadius: 37.5
                }}
              >
              </Image>
              <View>
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    fontFamily: "Avenir",
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >{item.title}
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    fontFamily: "Avenir",
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >Sei que lá sei que lá sei que lá sei que lá sei que lá sei que lá sei que lá </Text>
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