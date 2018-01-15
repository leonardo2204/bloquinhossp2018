import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import BloquinhosMapScreen from '../Containers/BloquinhosMapScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  BloquinhosMapScreen: { screen: BloquinhosMapScreen },
  LaunchScreen: { screen: LaunchScreen },
  BloquinhosMapScreen : { screen: BloquinhosMapScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
