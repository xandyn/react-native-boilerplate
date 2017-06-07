import React from 'react';

import Home from '../containers/Home';


const HomeScreen = props => <Home {...props} />;


HomeScreen.navigatorStyle = {
  navBarNoBorder: true,
  topBarElevationShadowEnabled: false,
  navBarBackgroundColor: '#404246',
  statusBarColor: '#404246',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
};


export default HomeScreen;
