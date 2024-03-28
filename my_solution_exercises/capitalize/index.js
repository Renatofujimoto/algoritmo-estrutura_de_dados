// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const map = []

    //percorrendo a frase letra por letra
    for (char of str.split(' ')) {
        //transformando a primeira letra de cada palavra maiscula, concatenando com o resto da frase e adicionando no array vazio
        map.push(char[0].toUpperCase() + char.slice(1))
    }
    //retornando a frase com a primeira letra maiuscula e juntando tudo, passando o join com espaço
    return map.join(' ')
}
console.log(capitalize('a short sentence'))

module.exports = capitalize;
