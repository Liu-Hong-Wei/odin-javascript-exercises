const repeatString = function(str, times) {
    if (times < 0) {
        console.error("Invalid repeat times!");
    }
    else if (times == 0) {
        return "";
    }

    for (; times > 0; --times) {
        str += str;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
