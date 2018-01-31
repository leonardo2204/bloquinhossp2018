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
    marginBottom: 28,
    justifyContent: 'center'
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  errorContainer: {
    marginBottom: 28,
    justifyContent: 'center'
  }
})
