/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Raiz'; //aqui que faz a importação 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); 
