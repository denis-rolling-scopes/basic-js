const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deapth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
       let currentDepth = this.calculateDepth(arr[i]);
       if(currentDepth >= deapth) {
          deapth = currentDepth + 1;
       }
      }
    }
    return deapth;
  }
};