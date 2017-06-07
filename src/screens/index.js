import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';


export default function registerScreens(store, Provider) {
  Navigation.registerComponent('tasq.HomeScreen', () => HomeScreen, store, Provider);
}
