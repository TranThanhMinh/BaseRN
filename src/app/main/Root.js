import React, { useRef ,useEffect} from 'react';
import {
  LogBox
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './App';
import { store } from '../reducers';
import { Provider } from 'react-redux';
import Router from './Router'
import NetInfo from '@react-native-community/netinfo'
import { Alert, Logging, LogUtils } from '@common';

global.isConnected = true;

const Root = () => {
  const navigationRef = useRef();

  useEffect(() => {
    NetInfo.addEventListener((connectionInfo) => {
      if (connectionInfo.type === 'wifi' || connectionInfo.type === 'cellular') {
        global.isConnected = true;
      } else {
        global.isConnected = false;
      }
      Logging.log('ConnectionChange\n' + JSON.stringify(connectionInfo));
      LogUtils.writeLog('ConnectionChange\n' + JSON.stringify(connectionInfo));
    });
  }, [])

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router navigationRef={navigationRef} />
      </SafeAreaProvider>
    </Provider>
  )
};

export default Root;
