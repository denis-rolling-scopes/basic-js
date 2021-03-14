const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  sampleActivity = Number(sampleActivity);
  if(!sampleActivity || sampleActivity <= 0 || sampleActivity >= 15) {
    return false;
  }
  let activity = parseFloat(sampleActivity);
  if(!activity) {
    return false;
  }
  return Math.ceil(((Math.log(MODERN_ACTIVITY / activity)) / (Math.log(2)) * HALF_LIFE_PERIOD));
};
