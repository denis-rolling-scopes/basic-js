const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = '';
  if(!Array.isArray(members)) {
    return false;
  }
  members = members.filter(function (el) {
    return typeof el === "string";
  });
  members = members.map(function(elem) {
      return elem.trim().toLocaleUpperCase();
  })
  members = members.sort();
  members.forEach(element => {
    if(element.length > 0) {
        res += element.substr(0, 1);
    }
  });

  return res;
};
