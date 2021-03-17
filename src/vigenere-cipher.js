const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine) {
    if(machine === false) {
      this.directMachine = false;
    } else {
      this.directMachine = true;
    }
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error;
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let messageLength = message.length;
    let index = 0;
    let resArray = [];

    for (let i = 0; i < messageLength; i++) {
      if (message[i].charCodeAt(0) > 64 &&  message[i].charCodeAt(0) < 91) {
        let res = String.fromCharCode(( message[i].charCodeAt(0) + key.charCodeAt(index)) % 26 + 'A'.charCodeAt(0));
        resArray.push(res);
        if (index !== key.length - 1) {
          index++;
        } else {
          index = 0;
        }
      } else {
        resArray.push(message[i]);
      }
    }

    if (this.directMachine) {
      return resArray.join('');
    } else {
      return resArray.reverse().join('');
    }
  }
  
  decrypt(encryptedMesage, key) {
    if(!encryptedMesage || !key) {
      throw new Error;
    }

    let resArray = [];
    let index = 0;
    encryptedMesage = encryptedMesage.toUpperCase();
    key = key.toUpperCase();
    let encryptedMesageLength = encryptedMesage.length;

    for( let i = 0; i < encryptedMesageLength; i++) {
      if (encryptedMesage[i].charCodeAt(0) > 64 &&  encryptedMesage[i].charCodeAt(0) < 91) {
        let res = String.fromCharCode((encryptedMesage[i].charCodeAt(0) + 26 - key.charCodeAt(index)) % 26 + 'A'.charCodeAt(0));
        resArray.push(res);
        if(index !== key.length - 1) {
          index++;
        } else {
          index = 0;
        }
      } else {
        resArray.push(encryptedMesage[i])
      }
    }

    if (this.directMachine) {
      return resArray.join('');
    } else {
      return resArray.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
