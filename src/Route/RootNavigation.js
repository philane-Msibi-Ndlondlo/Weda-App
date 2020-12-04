import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/HomeScreen/Home';
import Search from '../screens/SearchScreen/Search';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
