/**
    https://github.com/danjford/RC4.js

    To use rc4.js, once you have included it in your project. Simply create a new instance of it, passing rc4 your key. For example:

    var test = new RC4('This is my secret key');

    test.encrypt(/* Text to encrypt to go here );
    test.decrypt(/* Text to decrypt to go here );
 */
var privateKey = '';

function RC4(key) {
  privateKey = keySetup(key);
}


/**
 * Converts the text into an array of the characters numeric Unicode values
 * @param  {String} text, the text to convert
 * @return {Array} the array of Unicode values
 */
function convert(text) {
  var codes = [];

  for (var i = 0, ii = text.length; i < ii; i++) {
    codes.push(text[i]);
  }

  return codes;
}

/**
 * Sets up the key to use with the byte stream
 * @param  {String} key, The key that you want to use
 * @return {Array}, the key stream which with be used in the byteStreamGenerator
 */
function keySetup(key) {

  var K = [...Array(256).keys()],
    j = 0,
    key = convert(key);

  for (var i = 0, ii = K.length; i < ii; i++) {
    j = (j + K[i] + key[i % key.length]) % 256;
    [K[i], K[j]] = [K[j], K[i]];
  }

  return K;

}


/**
 * byteStreamGenerator uses ES6 generators which will be 'XOR-ed' to encrypt and decrypt
 * @param {Array} K, the array generated from the keySetup
 * @yield {Integer}, the current value which will be 'XOR-ed' to encrypt or decrypt
 */
var byteStreamGenerator = function *(K) {
  var i = 0,
    j = 0;

  while (true) {
    i = (i + 1) % 256;
    j = (j + K[i]) % 256;
    [K[i], K[j]] = [K[j], K[i]];
    yield (K[(K[i] + K[j]) % 256]);
  }
}

/**
 * Encrypts the input text
 * @param  {String} input, the text to encrypt
 * @return {String}, the encrypted text
 */
RC4.prototype.encrypt = function(input) {

  var outputText = '',
    byteStream = byteStreamGenerator(privateKey.slice(0));

  for (var i = 0, ii = input.length; i < ii; i++) {
    outputText += ('00' + (input[i] ^ byteStream.next().value).toString(16)).substr(-2) ;
  }

  return outputText;
}

/**
 * Decrypts the input text
 * @param  {String} input, the text to decrypt
 * @return {String}, the decrypted text (if the same key was used)
 */
RC4.prototype.decrypt = function(input) {
  var outputText = '',
    byteStream = byteStreamGenerator(privateKey.slice(0));

  input = input.match(/[a-z0-9]{2}/gi);

  for (var i = 0, ii = input.length; i < ii; i++) {
    outputText += String.fromCharCode((parseInt(input[i], 16) ^ byteStream.next().value));
  }

  return outputText;
}

module.exports = RC4;
