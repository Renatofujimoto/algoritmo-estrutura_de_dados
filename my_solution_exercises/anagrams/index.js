// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const anagram1 = buildCharMap(stringA)
    const anagram2 = buildCharMap(stringB)

    if (Object.keys(anagram1).length !== Object.keys(anagram2).length) {
        return false;
    }

    for (let char in anagram1) {
        if (anagram1[char] !== anagram2[char]) {
            return false;
        }
    }
    return true
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}
console.log(buildCharMap('RAIL! SAFETY!'))
console.log(anagrams(stringA = 'Hi there', stringB = 'Bye there'))

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//     return str
//         .replace(/[^\w]/g, '')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('');
// }



module.exports = anagrams;
