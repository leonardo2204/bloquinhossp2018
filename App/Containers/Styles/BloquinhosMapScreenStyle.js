import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  title: {
    color: Colors.snow,
  },
  icon: {
    color: Colors.snow,
  },
  blocoContainer: {
    flex: 1,
    justifyContent: 'flex-end'  
  },
  carouselContainer: {
    height: '20%',
    marginBottom: 10,
    justifyContent: 'center'
  }
})
