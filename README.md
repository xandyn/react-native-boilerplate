# React Native Boilerplate



## What's inside

* [redux-saga](#https://github.com/redux-saga/redux-saga)
* [react-native-navigation](#https://github.com/wix/react-native-navigation)
* [react-native-code-push (with sagas)](#https://github.com/Microsoft/react-native-code-push)
* eslint (airbnb plugins)
* remote-redux-devtools

### Install
```sh
$ yarn
```

### Run
ios
```sh
$ yarn run:ios
```

android
```sh
$ yarn run:android
```

### Tests
```sh
$ yarn run test
```

### Setup CodePush deployment keys
iOS

In `./ios/ReactNativeBoilerplate/Info.plist` file, edit entry named `CodePushDeploymentKey`

Android

In `MainActivity.java` edit line
```java
    new CodePush("<INSERT_STAGING_KEY>", MainApplication.this, BuildConfig.DEBUG)
```

### To rename react native app
[react-native-rename](https://github.com/JuneDomingo/react-native-rename)