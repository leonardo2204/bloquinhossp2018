import { StackNavigator } from 'react-navigation'
import FacebookEvents from '../Containers/FacebookEvents'
import BloquinhoDetail from '../Containers/BloquinhoDetail'
import LaunchScreen from '../Containers/LaunchScreen'
import BloquinhosMapScreen from '../Containers/BloquinhosMapScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  FacebookEvents: { screen: FacebookEvents },
  BloquinhoDetail: { screen: BloquinhoDetail },
  LaunchScreen: { screen: LaunchScreen },
  BloquinhosMapScreen : { screen: BloquinhosMapScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'BloquinhosMapScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
