const repeatString = function (string, num) {
    let newStr = ""
    if (num < 0) {
        return `ERROR`
    } else {
        for (let i = 0; i < num; i++) {
            newStr = newStr + string;
        }
        return newStr;
    }
};

// if (num < 0) {
//     return `ERROR`
// } else {
//     return `${string.repeat(num)}`
// }

// Do not edit below this line
module.exports = repeatString;