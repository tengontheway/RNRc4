/**
* rc4加密，并转为无0X开头的16进数字字符串
* re4 encript and convert to hex string with 0X in the beginning
* params srcString 源字符串，即未加密
* params password 密匙字符串
* return rc4加密后无0X开头的16进数字字符串
*/
function rc4Encript(srcString, password){
	if(srcString && password && typeof(srcString) == 'string' && typeof(password) == 'string'){
		return byteToHex(rc4(stringTocharCode(srcString), stringTocharCode(password)));
	}
	return undefined;
}

/**
* rc4解密
* rc4 decript
* params hexString 无0X开头的16进数字字符串
* params password 密匙字符串
* return 源字符串
*/
function rc4Decript(hexString, password){
	if(hexString && password && typeof(hexString) == 'string' && typeof(password) == 'string'){
		return charCodeToString(rc4(hexToByte(hexString), stringTocharCode(password)));
	}
	return undefined;
}
function padLeft(str , totalWidth, paddingChar){
	if(str && str.length < totalWidth){
		var padCount = totalWidth - str.length;
		var tmpStr = "";
		while(padCount--){
			tmpStr += paddingChar;
		}
		return (tmpStr + str);
	}
	return str;
}
function padRight(str, totalWidth, paddingChar){
	if(str && str.length < totalWidth){
		var padCount = totalWidth - str.length;
		var tmpStr = "";
		while(padCount--){
			tmpStr += paddingChar;
		}
		return (str + tmpStr);
	}
	return str;
}
function rc4(refDataArray, keyArray){
	var s = new Array(256);
	var k = new Array(256);
	var i = 0, j = 0, x = 0, xor = 0, swap = 0;
	for (i = 0; i < 256; i++){
		s[i] = i;
		k[i] = keyArray[i % keyArray.length];
	}
	j = 0
	for (i = 0; i < 256; i++){
		j = (j + s[i] + k[i]) % 256;
		swap = s[i];
		s[i] = s[j];
		s[j] = swap;
	}
	i = j = 0;
	for (x = 0; x < refDataArray.length; x++){
		i = (i + 1) % 256;
		j = (j + s[i]) % 256;
		swap = s[i];
		s[i] = s[j];
		s[j] = swap;
		xor = (s[i] + s[j]) % 256;
		refDataArray[x] ^= s[xor];
	}
	return refDataArray;
}
function stringTocharCode(str){
	if(str && str.length){
		var bytes = new Array();
		for(var i=0; i<str.length; i++){
			bytes[i] = str.charCodeAt(i);
		}
		return bytes;
	}
	return undefined;
}
function charCodeToString(charCodeArray){
	if(charCodeArray && charCodeArray.length){
		var resultStr = "";
		for (var b in charCodeArray){
			resultStr += String.fromCharCode(charCodeArray[b]);
		}
		return resultStr;
	}
	return undefined;
}
function byteToHex(dataArray){
	if(dataArray && dataArray.length){
		var resultStr = "";
		for (var b in dataArray){
			resultStr += padLeft(dataArray[b].toString(16), 2, "0");
		}
		return resultStr;
	}
	return undefined;
}
function hexToByte(hexStr){
	if(hexStr && hexStr.length && hexStr.length % 2 == 0){
		var i = 0, j = 0;
		var result = new Array();
		for (i = 0; i < hexStr.length; i += 2){
			result[j++] = parseInt(hexStr.substr(i, 2), 16);
		}
		return result;
	}
	return undefined;
}
