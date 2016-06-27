/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View
//} from 'react-native';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';


// rc4 encrypt/decrypt
// import RC4 from './components/crypt/rc4.js';
// https://github.com/therealjampers/spritzjs
var spritzjs = require('spritzjs')();

// Protobuf msg.
import message from './protobuf/message_pb.js';
import LoginMsg from './protobuf/test_pb';

var BigNumber = require('bignumber.js');

global.Buffer = global.Buffer || require('buffer').Buffer;
var net = require('react-native-tcp');
import netcore from './network/NetCore';

class RNRc4 extends Component {

  constructor(props) {
    super(props);

      netcore.createConnection({host:'192.168.0.155', port:8888}, ()=>{
          netcore.msg.ReqRC4Key();
      });

  }


  render() {
    return (
      <Text >
          Welcome to React Native!
        </Text>
    );
  }
}

AppRegistry.registerComponent('RNRc4', () => RNRc4);
