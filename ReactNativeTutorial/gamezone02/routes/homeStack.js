import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  test: {
    screen: Home
  },
  ReviewDetails: {
    screen: ReviewDetails
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);