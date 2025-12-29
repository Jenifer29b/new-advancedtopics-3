//currying in Js : Currying in JavaScript means transforming a function that takes multiple parameters
// into a chain of nested functions, each taking one parameter and
// returning another function until all parameters are supplied.

function num1(val1) {
    return function num2(val2) {
        return (val1+val2)
    }
}
console.log(num1(2)(2))

function lenth(length) {
    return function width(width) {
        return function height(height) {
            return (length*width*height)
        }
    }
}
console.log(lenth(10)(10)(10))

//Tasks :

function sub(val1) {
    return function value(val2) {
        return val1-val2
    }
}
console.log(sub(10)(5))

function multiply(val1) {
    return function val2(val2) {
        return function val3(val3) {
            return (val1*val2*val3)
        }
    }
}
console.log(multiply(28)(23)(23))

function greet() {
    return function message(message) {
        return function name(name) {
            return (`${message}, ${name}`)
        }
    }
}
console.log(greet()("Hello Welcome")("Jenifer"))

function format(symbol) {
    return (cname) => {
        return (rupees) => {
            return (`${symbol} ${cname} ${rupees}`)
        }
    }
}
console.log(format("INR")("India")(1000))

function fact(n) {
    let result = 1
    for (let i = 1; i <= n; i++){
        result *=i
    }
    return result
}
console.log(fact(5))

