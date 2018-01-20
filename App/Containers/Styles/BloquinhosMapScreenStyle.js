import {
  StyleSheet
} from 'react-native'
import {
  ApplicationStyles
} from '../../Themes/'
import {
  Colors
} from '../../Themes'

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
  },
  loadingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  loadingIntrisics: {
    padding: 20,
    backgroundColor: '#535558'
  },
  loadingText: {
    paddingTop: 20,
    color: 'white'
  }
})
