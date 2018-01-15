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
  }
})
