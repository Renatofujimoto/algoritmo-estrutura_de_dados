// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    let contador = 0
    const vogais = ['a', 'e', 'i', 'o', 'u']

    for (char of str.toLowerCase()) {
        if (vogais.includes(char)) {
            contador++
        }
    }
    return contador
}

console.log(vowels('Why do you ask?'))

module.exports = vowels;


// function vowels(str) {
//     const vogais = str.match(/[aeiou]/gi)

//     return vogais ? vogais.length : 0
// }

// console.log(vowels('Why do you ask?'))

// module.exports = vowels;
