import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import User from './pages/User';
import Profile from './pages/Profile';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#6C9E09'},
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="SQUAD" component={Home} />
      <Stack.Screen name="Perfil do Jogador" component={Profile} />
      <Stack.Screen name="Adicionar ao SQUAD" component={User} />
    </Stack.Navigator>
  );
}
