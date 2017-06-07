import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);


const startApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'tasq.HomeScreen',
      title: 'Welcome',
      navigatorButtons: {}
    },
    animationType: 'fade',
    appStyle: {
      orientation: 'portrait',
      navBarNoBorder: true,
      topBarElevationShadowEnabled: false,
      navBarTitleTextCentered: true,
      navBarBackgroundColor: '#404246',
      statusBarColor: '#404246',
      navBarTextColor: 'white',
      navBarButtonColor: 'white',
      statusBarTextColorScheme: 'light',
    },
  });
};

startApp();
