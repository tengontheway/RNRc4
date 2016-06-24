var BigNumber = require('bignumber.js')

// DH密钥交换算法
// 公开密钥=DG_G^DH_POWER mod DH_P;
export var DH_G = 3;
export var DH_P = 0x7FFFFFC3;
export var DH_POWER = 65535;//Math.ceil(Math.random() * 65535);

// 公开秘钥(to server...)
export function getDHPublicKey() {
    return new BigNumber(DH_G).pow(DH_POWER).mod(DH_P);
}

// 获得私钥，用来解密数据
// @param server_public_key number
export function getPrivateKey(server_public_key) {
    return new BigNumber(server_public_key).pow(DH_POWER).mod(DH_P);
}

export function longToByteArray(/*long*/long) {
    // we want to represent the input as a 8-bytes array
    var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];

    for ( var index = 0; index < byteArray.length; index ++ ) {
        var byte = long & 0xff;
        byteArray [ index ] = byte;
        long = (long - byte) / 256 ;
    }

    return byteArray;
};

export function byteArrayToLong(/*byte[]*/byteArray) {
    var value = 0;
    for ( var i = byteArray.length - 1; i >= 0; i--) {
        value = (value * 256) + byteArray[i];
    }

    return value;
};