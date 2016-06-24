/**
 * Created by qx on 6/24/16.
 */

export var CMD_REQ_RC4_KEY = 1 //客户端请求rc4 key相关数据;
export var CMD_RES_RC4_KEY = 2 //服务器回复rc4 key相关数据;
export var CMD_REQ_LOGIN = 3 //客户端请求登陆;
export var CMD_RES_LOGIN = 4 //回复登陆请求;

export var MsgID = {
    CMD_REQ_RC4_KEY: 1,     //客户端请求rc4 key相关数据;
    CMD_RES_RC4_KEY: 2,     //服务器回复rc4 key相关数据;
    CMD_REQ_LOGIN: 3,       //客户端请求登陆;
    CMD_RES_LOGIN: 4,       //回复登陆请求;
}