import React, { useRef } from 'react';
import {
  LogBox
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './App';
import { store } from '../reducers';
import { Provider } from 'react-redux';
import Router from './Router'

const Root = () => {
  const navigationRef = useRef();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router navigationRef={navigationRef} />
      </SafeAreaProvider>
    </Provider>
  )
};

export default Root;
