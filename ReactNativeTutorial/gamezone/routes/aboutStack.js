import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
  About: { // inaczej niż w tutorialu
    screen: About,
    navigatonOptions: {
      title: 'About GameZone', // to też nie działa
    }
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 } // to DZIAŁA!!
  }
});

export default AboutStack;