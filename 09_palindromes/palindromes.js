const palindromes = function(string) {

  const array = (Array.from(string.toLowerCase())).filter((item) => {
    if (item === " ") { return false }
    else if (item === "!") { return false }
    else if (item === ".") { return false }
    else if (item === ",") { return false }
    else if (item === "?") { return false }
    else return true;
  });
  const reverseArray = [...array].reverse();
  return array.join("") === reverseArray.join("") ? true : false
};
// Do not edit below this line
module.exports = palindromes;
