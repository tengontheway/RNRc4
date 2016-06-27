/**
 * Created by tzt on 6/26/16.
 */
import {MsgID} from './api.js';
var ByteBuffer = require('byte-buffer');
var net = require('react-native-tcp');

import NetHandle from "./NetHandle";

import netcore from './NetCore';


var client = null;

NetCore = {}

NetCore.msg = new NetHandle();

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
            NetCore._processMsg(data);
        });
    });
}

// @param msg 消息结构体, 必须为
// @param msg_id 消息ID
// @parm client 客户端
// @parm encrypt 加密
NetCore.sendMsg = function(msg_id, msg, encrypt) {
    if (encrypt === null) {
        encrypt = true;
    }

    var data = msg.serializeBinary();

    //alert(data.length);

    var buff = new ByteBuffer(2 + 2 + data.length);
    buff.writeUnsignedShort(2 + data.length);
    buff.writeUnsignedShort(msg_id);
    buff.write(data);

    // 封装BUFF
    var buffers = new Uint8Array(buff.buffer);
    client.write(buffers);
}

// 处理服务器返回的消息
// @param data 服务器反馈的数据
NetCore._processMsg = function(data) {
    var buff = new ByteBuffer(data);
    var len = buff.readUnsignedShort();
    var id = buff.readUnsignedShort();

    console.log('message was received! id:' + id + " len:" + (len-2) + " data:" + data);

    // 获得消息源数据
    var data = buff.read();
    netcore.msg.ParseAck(id, data.raw);
}



export default NetCore;
