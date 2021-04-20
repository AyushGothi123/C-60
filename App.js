import * as React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SummaryScreen from './screens/SummaryScreen'


export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppHeader/>
       <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
SummaryScreen:SummaryScreen,
})

const AppContainer = createAppContainer(AppNavigator)