const repeatString = function(str, times) {
    if (times < 0) {
        return "ERROR";
    }
    else if (times == 0) {
        return "";
    }

    res = ""
    for (; times > 0; --times) {
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
