/**
 * Created by tzt on 6/26/16.
 */
import netcore from './NetCore';
import {MsgID} from './api';
var ByteBuffer = require('byte-buffer');
var BigNumber = require('bignumber.js')

import message from '../protobuf/message_pb.js';
import LoginMsg from '../protobuf/test_pb';
import gconfig from "../config/globalconfig";

import { getDHPublicKey, getPrivateKey, longToByteArray } from './DHKey.js';

var public_key = getDHPublicKey();


function NetHandle() {
    this.msgHandler = new Array();

    // 注册所有的消息回调
    this.msgHandler[MsgID.CMD_RES_RC4_KEY] = this.AckRC4Key;

}

// 解析回馈的消息
// @param msg_id {number} 消息ID
// @param data {Array} 可以被消息结构体直接反序列化 deserializeBinary
NetHandle.prototype.ParseAck = function(msg_id, data) {
    if (this.msgHandler[msg_id] === null) {
        var m = "MsgID:" + msg_id + " not registered!";
        alert(m);
        console.log(m);
        return;
    }

    // 解密
    if (msg_id !== MsgID.CMD_RES_RC4_KEY) {
        // TODO: 解密
    }

    this.msgHandler[msg_id](data);
}

// 请求RC4交换key
NetHandle.prototype.ReqRC4Key = function() {
    //var login_msg = new LoginMsg.Login();
    var msg_login = new message.ExchangeKeyReq();
    msg_login.setSeed(public_key);

    console.log("client send key:" + public_key);

    netcore.sendMsg(MsgID.CMD_REQ_RC4_KEY, msg_login);
}

// 回馈RC4秘钥
// @param data {Array} 数据源
NetHandle.prototype.AckRC4Key = function(data) {
    //var login = LoginMsg.Login.deserializeBinary(data);
    var msg_login = message.ExchangeKeyRes.deserializeBinary(data);
    var seed = msg_login.getSeed();
    console.log("Receive seed:" + seed);

    var num = new BigNumber(seed);

    gconfig.SERVER_PUB_KEY = num.toString();
    gconfig.SERVER_PRIVATE_KEY = getPrivateKey(seed).toString();
    console.log("seed:" + gconfig.SERVER_PUB_KEY + " Key:" + gconfig.SERVER_PRIVATE_KEY);
    //alert("ServerPubKey:", gconfig.SERVER_PUB_KEY);






}

export default NetHandle;