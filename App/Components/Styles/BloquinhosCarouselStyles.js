import {
  StyleSheet,
  Dimensions
} from 'react-native'

const horizontalMargin = 40
export const sliderWidth = Dimensions.get('window').width
export const itemWidth = sliderWidth - 2 * horizontalMargin

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: itemWidth,
    backgroundColor: 'white',
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
  },
  image: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  textContainer: {
    flexGrow: 1,
    width: 0,
    alignSelf: 'center'
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "500",
  },
})
