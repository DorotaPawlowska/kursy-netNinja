import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const screens = {
  GameZone: { // inaczej niż w tutorialu
    screen: Home,
    navigatonOptions: {
      // title: 'GameZone', // to też nie działa
      headerStyle: { backgroundColor: '#333'} // to też nie działa
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigatonOptions: {
      title: 'Review Details', // to też nie działa
      headerStyle: { backgroundColor: '#eee'} // to też nie działa
    }
  },

}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 } // to DZIAŁA!!
  }
});

export default createAppContainer(HomeStack);