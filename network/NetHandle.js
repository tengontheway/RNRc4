/**
 * Created by tzt on 6/26/16.
 */
import netcore from './NetCore';
import {MsgID} from './api';

import LoginMsg from '../protobuf/test_pb';

function NetHandle() {
    this.datasource = new Array();
    this.datasource[MsgID.CMD_REQ_RC4_KEY] = this.AckRC4Key;
}

NetHandle.prototype.ReqRC4Key = function() {
    var login_msg = new LoginMsg.Login();
    login_msg.setSeed(5);

    var data = login_msg.serializeBinary();

    netcore.sendMsg(login_msg, MsgID.CMD_REQ_RC4_KEY);
}

NetHandle.prototype.AckRC4Key = function(data) {
    alert(this.datasource[MsgID.CMD_REQ_RC4_KEY]);
}


export default NetHandle;