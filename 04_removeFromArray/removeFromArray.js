
// const removeFromArray = function(array, ...args) {
//     return array.filter(val => !args.includes(val));
// }

const removeFromArray = function() {
    let res = []
    let hasSkip = false;
    for (let i = 0; i < arguments[0].length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (arguments[0][i] === arguments[j]) {
                hasSkip = true;
                break;
            }
        }
        if (!hasSkip) {
            res.push(arguments[0][i]);
        }
        hasSkip = false;
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
