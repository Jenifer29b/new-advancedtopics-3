// function memorize(fn) {
//     let cache = {}

//     return function (n) {
//         if (cache[n]) {
//             console.log("Returning from cache")
//             return cache[n]
//         }

//         console.log("caculating")
//         let result = fn(n)
//         cache[n] = result
//         return result
//     }
// }

//     function square(n) {
//         return n*n
//     }
    


// let result = memorize(square)
// console.log(result(2))
// console.log(result(2))

//Tasks :

function Factorial(fn) {
    let cache = {};

    return function (n) {
        if (cache[n]) {
            console.log("Returning from cache")
            return cache[n]
        }

        console.log("Calculating...")
        let results = fn(n)
        cache[n] = results
        return results
    }
}

function fact(n) {
    let result = 1
    for (let i = 1; i <= n; i++){
        result *=i
    }
    return result
}

let value = Factorial(fact)
console.log(value(5))
console.log(value(5))