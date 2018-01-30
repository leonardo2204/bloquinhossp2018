import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    paddingBottom: 10
  },
  icon: {
    color: 'white'
  },
  blocoTitle: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center' 
  },
  iconedTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconedText: { 
    flexGrow: 1,
    width: 0
  },
  barTitle: {
    color: Colors.snow,
    marginLeft: 10,
    marginRight: 15
  }
})
