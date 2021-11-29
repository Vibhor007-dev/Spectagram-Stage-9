import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './BottomTabNav';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const StackNavigator = () =>{
  return(
    <Stack.Navigator
    initialRouteName="home"
    screenOptions={{
      headerShown:false
    }}
    >
    <Stack.Screen name = "Home" component = {TabNavigator} />
    <Stack.Screen name = "Home" component = {PostScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;