import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.darkCloud,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.steel,
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  textContainer: {
    flexGrow: 1,
    width: 0,
    alignSelf: 'center'
  },
  image: {
    margin: 10,
    width: 75,
    height: 75,
    alignSelf: 'center',
    borderRadius: 37.5
  },
  title: {
    marginLeft: 10,
    fontFamily: "Avenir",
    fontSize: 15,
    color: Colors.snow,
    fontWeight: "500",
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
  },
  icon: {
    color: Colors.snow
  }
})
