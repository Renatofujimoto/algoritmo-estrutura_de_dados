// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // cria um array vazio chamado resultado
    let resultado = []

    for (let i = 0; i < n; i++) {
        resultado.push([])
    }

    // cria um contador, começando com 1
    let contador = 1
    let comeco_coluna = 0;
    let fim_da_coluna = n - 1;
    let comeco_linha = 0;
    let fim_da_linha = n - 1;

    // inicia coluna <= final da coluna e inicio da linha <= fim da linha
    while (comeco_coluna <= fim_da_coluna && comeco_linha <= fim_da_linha) {

        //loop para começo da coluna para o fim da colina
        for (let i = comeco_coluna; i <= fim_da_coluna; i++) {
            //nos resultado [comeco_linha][i] atribuir variavel de contador
            resultado[comeco_linha][i] = contador
            //incrementar contador
            contador++
        }
        //incrementar começo da linha
        comeco_linha++;

        //loop para o começo da linha até o fim da linha
        for (let i = comeco_linha; i <= fim_da_linha; i++) {
            // nos resultados[i][fim_da_colina]  atribuir variavel de contador
            resultado[i][fim_da_coluna] = contador
            // incrementar contador
            contador++
        }
        // decrementar o fim da linha
        fim_da_coluna--;

        //repentindo para o comeda da linha
        for (let i = fim_da_coluna; i >= comeco_coluna; i--) {
            resultado[fim_da_linha][i] = contador
            contador++
        }
        fim_da_linha--

        //repentindo para o comeco da coluna
        for (let i = fim_da_linha; i >= comeco_linha; i--) {
            resultado[i][comeco_coluna] = contador
            contador++
        }
        comeco_coluna++

    }
    return resultado
}
console.log(matrix(4))
module.exports = matrix;
