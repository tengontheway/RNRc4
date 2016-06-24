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

import { getDHPublicKey, longToByteArray } from './DHKey.js';
var BigNumber = require('bignumber.js');

var ByteBuffer = require('byte-buffer');
import {MsgID} from './api.js';

//var net = require('net');


class RNRc4 extends Component {

  constructor(props) {
    super(props);

      //
      ////net.createConnection({host:'192.168.0.155', port: 8888}, () => {
      ////net.createConnection('192.168.0.155',  8888, () => {
      //net.createConnection(  8888, '192.168.0.155', () => {
      //    //'connect' listener
      //    console.log('connected to server!');
      //    //client.write('world!\r\n');
      //});
      //client.on('data', (data) => {
      //    console.log(data.toString());
      //    client.end();
      //});
      //client.on('end', () => {
      //    console.log('disconnected from server');
      //});
      //var socket = Net.connect(8888, "192.168.0.155")
      //socket.write("Hello!")
      //socket.setEncoding("utf8")
      //var data = socket.read() // => "Hello back!"
      //alert(data);


      //var buff = new ByteBuffer(20);
      ////buff.writeByte(10);
      ////buff.writeInt(50);
      ////buff.writeString('hello');
      //buff.write([1, 2, 3]);
      //
      ////buff.front();
      ////
      ////alert(buff.readUnsignedByte());
      ////alert(buff.readInt());
      ////alert(buff.readString());
      ////alert(buff.read());
      //
      //var seed = getDHPublicKey();
      ////alert(seed);
      //console.log("seed:" + seed);
      //
      //var ws = new WebSocket('ws://192.168.0.155:8888');
      //
      //ws.onopen = () => {
      //    // 建立连接
      //    //ws.send('something');
      //    console.log('on open...');
      //
      //    var req_rc4_msg = new message.ExchangeKeyReq;
      //    req_rc4_msg.setSeed(seed);
      //
      //    var data = req_rc4_msg.serializeBinary();
      //    //var req = message.ExchangeKeyReq.deserializeBinary(data);
      //
      //    var buff = new ByteBuffer(2 + 2 + data.length);
      //    buff.writeUnsignedShort(2 + data.length);
      //    buff.writeUnsignedByte(MsgID.CMD_REQ_RC4_KEY);
      //    buff.write(data);
      //
      //    console.log(buff.raw());
      //
      //    socket.send(buff.raw());
      //};
      //
      //ws.onmessage = (e) => {
      //    // 收到了消息
      //    console.log(e.data);
      //};
      //
      //ws.onerror = (e) => {
      //    // 有错误发生
      //    console.log(e.message);
      //};
      //
      //ws.onclose = (e) => {
      //    // 连接关闭
      //    console.log(e.code, e.reason);
      //};


      //
    //// 1.Create message object.
    //var people = new message.Person;
    //people.setId(100);
    //people.setName('ttt');
    //people.setEmail('teng_ontheway@163.com');
    //
    //var data = people.serializeBinary();
    //
    //// // 2.Encrypt stream data.
    //// var rc4 = new RC4('ABCDEFG12345');
    //
    //// var en_data = rc4.encrypt(data);
    //// var de_data = rc4.decrypt(en_data);
    //
    //
    //var pub_key = getDHPublicKey();
    //
    //var k = longToByteArray(pub_key);
    //// alert(k);
    //
    //var encrypted = spritzjs.encrypt(k, data);       // "encrypted" now contains ciphertext C
    //var decrypted = spritzjs.decrypt(k, encrypted);
    //
    //// 3.Decrypt
    //var new_people = message.Person.deserializeBinary(decrypted);
    //// alert(new_people);
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
