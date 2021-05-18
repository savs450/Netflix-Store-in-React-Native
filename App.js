
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'; 

import 'react-native-gesture-handler';                   /* only after this */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//bring in all screens
import Home from './screens/Home'
import Edit from './screens/Edit'
import Add from './screens/Add'

const Stack = createStackNavigator();
// Stack.Navigator initialRouteName="Home">  This Home is exactly that name which we imported from ./screens/Home
const App= () =>{
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"> 
      <Stack.screen
      name="home"
      component={Home}
      options={{
        headerStyle: {
          backgroundColor:"0f4c75" },
      title: 'LCO netflix App',
      headerTitleStyle:{
        textAlign:"center",
        color:"aqua"
      }
      }}>

      </Stack.screen>
    </Stack.Navigator>
  </NavigationContainer>
  )}

export default App;
