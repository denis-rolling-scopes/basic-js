const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  if (repeatTimes && !addition && addition !== false && addition !== null) {
    for (let i = 0; i < repeatTimes; i++) {
      res += str + separator;
    }
    return res.slice(0, -separator.length);
  }
  if(addition || addition === false || addition === null) {
    for (let i = 0; i < repeatTimes; i++) {
      res += str;
      for (let j = 0; j < additionRepeatTimes; j++) {
        res += addition + additionSeparator;
      }
      if (additionSeparator) {
        res = res.slice(0, -additionSeparator.length);
      }
      res += separator;
    }
    return res.slice(0, -separator.length);
  }
};