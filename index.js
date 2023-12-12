/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import Root from './src/app/main/Root';
import {name as appName} from './app.json';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => Root);
