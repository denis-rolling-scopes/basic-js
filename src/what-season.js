const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } 
  try {
    date.getTime();
  } catch(err) {
    throw new Error(err);
  }

  let month = date.getMonth();
  switch(month) {
    case 11:
    case 0:
    case 1:
      res = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      res = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      res = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      res = 'fall';
      break;
  }
  
  return res;
};
