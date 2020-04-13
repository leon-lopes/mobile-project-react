import React from 'react';
import Routes from './src/routes';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import createStore from './src/store';
console.disableYellowBox = true;
const {store, persistor} = createStore();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#6C9E09" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
