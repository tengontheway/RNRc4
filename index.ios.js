/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RC4 from './rc4.js';

import { random_val, MAX_PLAYER, add } from './test.js';



class App extends Component {
  render() {
    var test = new RC4('ABCDEFG12345');

    var val = test.encrypt("helloworld");

    var tt = test.decrypt(val);
    alert(tt);

    return (
      <Text >
          Welcome to React Native!
        </Text>
    );
  }
}

AppRegistry.registerComponent('RNRc4', () => App);
