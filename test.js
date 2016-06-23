// DH密钥交换算法
// 公开密钥=DG_G^DH_POWER mod DH_P;
export var DH_G = 3;
export var DH_P = 0x7FFFFFC3;
export var DH_POWER = Math.ceil(Math.random() * 65535);
