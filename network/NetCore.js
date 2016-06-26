/**
 * Created by tzt on 6/26/16.
 */
import { getDHPublicKey, longToByteArray } from './DHKey.js';
import {MsgID} from './api.js';
var ByteBuffer = require('byte-buffer');
var net = require('react-native-tcp');

import NetHandle from "./NetHandle";

var public_key = getDHPublicKey();
var client = null;

NetCore = {}

NetCore.handler = new NetHandle();

// @param options {host:'192.168.0.162', port:8888}
// @param cb callback
NetCore.createConnection = function(options, cb) {
    client = net.createConnection(options, ()=> {
        console.log("--------create connection succeed!");

        if (cb != null) {
            cb();
        }

        client.on('error', function(error) {
            console.log(">>>>>>>>>error:" + error);
        });

        client.on('data', function(data) {
            console.log('message was received', data)
        });
    });
}

// @param msg 消息结构体, 必须为
// @param msg_id 消息ID
// @parm client 客户端
NetCore.sendMsg = function(msg, msg_id) {
    var data = msg.serializeBinary();

    //alert(data.length);

    var buff = new ByteBuffer(2 + 1 + data.length);
    buff.writeUnsignedShort(1 + data.length);
    buff.writeUnsignedByte(msg_id);
    buff.write(data);

    // 封装BUFF
    var buffers = new Uint8Array(buff.buffer);
    alert(buffers);
    client.write(buffers);
}

export default NetCore;
