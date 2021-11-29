import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


const BottomTabNavigator=createBottomTabNavigator();
const BottomTabNavigation=()=>{
  return(
    <BottomTabNavigator.Navigator>
    <BottomTabNavigator.Screen name = "CreatePost" component = {CreatePost}/>
    <BottomTabNavigator.Screen name = "Feed" component = {Feed}/>
    </BottomTabNavigator.Navigator>
  )
}

export default BottomTabNavigation;