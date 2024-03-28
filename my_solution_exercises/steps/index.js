// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {

    //percorrendo pra ver tamanho dos steps
    for (let i = 0; i < n; i++) {
        let estrelas = ''

        //percorrendo o tamanho do step e adicionando espaços vazios
        for (let colunas = 0; colunas < n; colunas++) {
            //condição de adicao do '#' enquanto a coluna  for menor que o indice
            if (colunas <= i) {
                estrelas += '#'
            } else {
                estrelas += ' '
            }
        }
        console.log(estrelas)
    }
}
console.log(steps(4))
module.exports = steps;
