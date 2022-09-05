const ftoc = function(fval) {
  let cval = Math.round((((fval - 32) * (5/9)) * 10)) / 10;
  return cval;
};

const ctof = function(cval) {
  let fval = Math.round((((cval * (9/5)) + 32) * 10)) / 10;
  return fval;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
