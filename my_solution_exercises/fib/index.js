// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    //está função melhora a performace da funcao abaixo, cacheando os resultados anteriores
    const cache = {}

    return function (...args) {
        if (cache[args]) {
            return cache[args]
        }
        //apply = recebe o parametro this e o argumento, quando nao sabemos quais são os array de argumentos recebidos, por isso o ... 
        const result = fn.apply(this, args);
        cache[args] = result

        return result
    }
}

function slowFib(n) {
    //esta funcao funciona, porem a perfomace é mto lenta
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2)
}
const fib = memoize(slowFib)

console.log(fib(4))

module.exports = fib;

// function fib(n) {

//     const soma = [0, 1]

//     for (let i = 2; i <= n; i++) {
//         const indice1 = soma[i - 1]
//         const indice2 = soma[i - 2]

//         soma.push(indice1 + indice2)
//         console.log(soma)
//     }

//     return soma[n]
// }
