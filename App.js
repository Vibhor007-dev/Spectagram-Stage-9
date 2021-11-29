import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import firebaseConfig from './config';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Loading from './screens/Loading';
import Dashboard from './screens/Dashboard';
import ToggleSwitch from "./components/ToggleSwitch";

const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
<React.Fragment>
  <ToggleSwitch label="Light Mode" />
  <ToggleSwitch label="Dark Mode" />
</React.Fragment>

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}

