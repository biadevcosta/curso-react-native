/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; //aqui que faz a importação 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); 
