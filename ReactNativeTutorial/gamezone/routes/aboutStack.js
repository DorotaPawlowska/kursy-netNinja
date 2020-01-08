import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
  About: { // inaczej niż w tutorialu
    screen: About,
    navigatonOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
      }
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