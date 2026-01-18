/**
 * @param {string} s
 * @return {boolean}
 */
var isValidParantheses = function (s) {
    let stack = [],
        bracketPairs = {
            "(": ")",
            "{": "}",
            "[": "]",
        };

    for (let char of s) {
        if (!stack.length) {
            stack.push(char);
            continue;
        }
        if (bracketPairs[stack.at(-1)] == char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length == 0;
};

var isValid = function (s) {
    const pair = {
            "(": ")",
            "{": "}",
            "[": "]",
        },
        stack = [];

    for (let ch of s) {
        if (!stack.length) {
            stack.push(ch);
            continue;
        }

        if (pair[stack.at(-1)] === ch) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return !stack.length;
};

console.log(isValidParantheses("[]()"));
