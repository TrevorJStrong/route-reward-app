import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeNavigator';
import ProfileStack from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="SettingsTab" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
