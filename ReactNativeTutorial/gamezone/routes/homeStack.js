import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';


const screens = {
  Home: { // inaczej niż w tutorialu
    screen: Home,
    navigatonOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='GameZone'/>,
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigatonOptions: {
      title: 'ReviewDetails', // to też nie działa
    }
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 } // to DZIAŁA!!
  }
});

export default HomeStack;