const reverseString = function(str) {
    res = "";
    for (const c of str) {
        res = c + res;
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
