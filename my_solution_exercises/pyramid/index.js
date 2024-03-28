// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // multiplicando o n por 2 - 1 vc acha a base, dividindo tudo por 2 vc acha a posicao das estrelas
    const posicaoDoSimbolo = Math.floor((2 * n - 1) / 2)

    // de 0 a n (iterar pelas linhas)
    for (let linhas = 0; linhas < n; linhas++) {
        // crie uma String vazia, nível
        let nivel = ''

        for (let colunas = 0; colunas < 2 * n - 1; colunas++) {
            // se a coluna deve ter um #
            if (posicaoDoSimbolo - linhas <= colunas && posicaoDoSimbolo + linhas >= colunas) {
                // adicione um '#' ao nível
                nivel += '#'
            } else {
                // caso contrário, adicione um espaço ao 'nível'
                nivel += ' '
            }
        }
        console.log(nivel)
    }
}
console.log(pyramid(4))

module.exports = pyramid;
