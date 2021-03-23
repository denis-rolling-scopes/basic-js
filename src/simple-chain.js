const CustomError = require("../extensions/custom-error");

const chainMaker = {
  connector: '~~',
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
      this.chain.push(`( ${value} )`);
      return this;
  },
  removeLink(position) {
    if(position < 0 || position > this.getLength() || typeof position !== 'number') {
      this.chain = [];
      throw new Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let strChain = this.chain.join(this.connector);
    this.chain = [];
    return strChain;
  }
};

module.exports = chainMaker;
