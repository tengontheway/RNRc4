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


      netcore.createConnection({host:'192.168.0.162', port:8888}, ()=>{
          netcore.handler.ReqRC4Key();
      });


      //var server = net.createServer(function(socket) {
      //    socket.write('excellent!');
      //}).listen(12345);
      //
      //var client = net.createConnection({host:'192.168.0.162', port:8888}, ()=> {
      //    console.log("--------create connection succeed!");
      //
      //
      //
      //    //var req_rc4_msg = new message.ExchangeKeyReq;
      //    //req_rc4_msg.setSeed(2);
      //    //
      //    //var data = req_rc4_msg.serializeBinary();
      //    //alert(data.length);
      //    //client.write(data);
      //    //alert(data.length);
      //
      //    //var buff = new ByteBuffer(2 + 1 + data.length);
      //    //buff.writeUnsignedShort(1 + data.length);
      //    //buff.writeUnsignedByte(MsgID.CMD_REQ_RC4_KEY);
      //    //buff.write(data);
      //    //
      //    //// 凤爪干活呢
      //    //var buffers = new Uint8Array(buff.buffer);
      //    //alert(buffers);
      //    //client.write(buffers);
      //
      //
      //
      //    client.on('error', function(error) {
      //        console.log(">>>>>>>>>error:" + error);
      //    });
      //
      //    client.on('data', function(data) {
      //        console.log('message was received', data)
      //    });
      //});


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
