// function memorize(fn) {
//     let cache = {};

//     return function (...n) {
//         let keys = JSON.stringify(n)
//         if (keys in cache) {
//             console.log("Already In")
//             return cache[keys]
//         }

//         console.log("Calculating")
//         let result = fn(...n)
//         cache[keys] = result
//         return result
//     }
// }

// function sum(...n) {
//     let array = n;
//     return array.reduce((prev, curr) => {
//         return prev+curr
//     }, 0)
    

// }

// let finalresult = memorize(sum)
// console.log(finalresult(1, 2, 3, 4, 5))
// console.log(finalresult(1, 2, 3, 4, 5))


function memorize1(fn) {
    let cache = {};

    return function(n) {
        if ( n in cache) {
            console.log("Already there")
            return cache[n]
        }

        console.log("Calculating..")
        let result = fn(n)
        cache[n] = result;
        return result
    }
}

function fibonnaci(x) {
    if (x <= 1) {
        return x
    }
    let value = fibonnaci(x - 1) + fibonnaci(x - 2)

    return value
   
}

let output = memorize1(fibonnaci)
console.log(output(10))
console.log(output(10))


