const palindromes = function (str) {
    newString = str.replace(/[^\w\s]/g, "").replace(/\s+/g, "").toLowerCase();

    let len = Math.floor(newString.length / 2);
    for (let i = 0; i < len; i++)
      if (newString[i] !== newString[newString.length - i - 1])
        return false;
    return true;
  }

// Do not edit below this line
module.exports = palindromes;
