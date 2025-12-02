function debounce(fn,delay,immediate) {
    let timeout;
     
    return function (...args) {
        let context = this
        clearTimeout(timeout)

        if (immediate == true && !timeout) {
             fn.apply(context,args)
        } 
            timeout = setTimeout(() => {
             if (!immediate) fn.apply(context, args)
             timeout = null
        }, delay);
        
         
    }
}
function repeat(value) {
    console.log(value)
}

let debounced = debounce(repeat, 2000,true)
debounced("fool")
debounced("foolished")