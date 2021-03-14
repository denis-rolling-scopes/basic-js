const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(element => {
    for(let i = 0; i < element.length; i++) {
      if(element[i] === '^^') {
        count++;
      }
    }
  });
  return count;
};
