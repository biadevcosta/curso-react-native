/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; //esta importando o app.js
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); //esta registrando a app como a raiz
