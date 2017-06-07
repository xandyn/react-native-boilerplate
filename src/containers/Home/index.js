import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


export default class Home extends React.Component {
  state = {
    message: 'Hello world'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          {this.state.message}
        </Text>
      </View>
    );
  }
}
