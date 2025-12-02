function throttle(fn, delay) {
    let lastcall = 0;

    return function (...args) {
        let now = Date.now()
        console.log(now)
        
        if (now - lastcall >= delay) {
            fn.apply(this, args)
            lastcall=now
        }
    }
}

let result = throttle(console.log, 2000)
result("A")
result("B")
result("C")
result("D")
result(setTimeout(()=>console.log("E")),2500)