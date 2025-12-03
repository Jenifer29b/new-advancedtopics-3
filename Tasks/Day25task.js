function debouncesearch(fn, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}

let searchres = debouncesearch(console.log, 2000)
searchres("sea")
searchres("searc")
searchres("search")

function buttonspam(fn, delay) {
    let time = 0;

    return function (...args) {
        let now = Date.now()
        console.log(now)

        if (now-time >= delay) {
            fn.apply(this, args)
            time = now;
        }
        
    }
}



let result = buttonspam(console.log, 2000)
result("Button Clicked")