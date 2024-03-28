// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    // let charMap = {};
    // for (let char of str) {
    //     charMap[char] = charMap[char] + 1 || 1;
    // }
    // return Object.keys(charMap).reduce((a, b) => charMap[a] > charMap[b] ? a : b);

    let map = {};
    let max = str[0];

    for (let char of str) {
        map[char] = map[char] ? map[char] + 1 : 1;
    }

    for (let char in map) {
        if (map[char] > map[max]) {
            max = char;
        }
    }

    return max;
}

module.exports = maxChar;