import React, { Component } from 'react'
import { Dimensions, View, Text, Image, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { connect } from 'react-redux'

import { styles, sliderWidth, itemWidth } from './Styles/BloquinhosCarouselStyles'

class BloquinhoCarousel extends Component {

  constructor(props) {
    super(props)

    this._carousel = null;
  }

  componentDidUpdate() {
    if (this.props.selectedBloquinho)
      this._carousel.snapToItem(this.props.bloquinhos.indexOf(this.props.selectedBloquinho), true)
  }

  cardClicked(item){
    this.props.bloquinhoCardClicked(bloquinho)
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity onPress={() => this.props.bloquinhoCardClicked(item)}
        style={styles.container} activeOpacity={.9}>
        <Image
          source={{ uri: item.picture }}
          style={styles.image}>
        </Image>
        <View style={styles.textContainer}>
          <Text numberOfLines={4}
            style={styles.title}>
            {item.bloco_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      this.props.bloquinhos && <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.props.bloquinhos}
        renderItem={this._renderItem.bind(this)} //workaround so we can call the 'this.props.bloquinhoCardClicked' function
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
    selectedBloquinho: state.bloquinhos.bloquinhoSelected,
  }
}

export default connect(mapStateToProps, null)(BloquinhoCarousel)