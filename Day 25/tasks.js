function debounce(fn, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

let debounced = debounce(console.log, 2000);
debounced("ab");
debounced("abc");
debounced("abcd");
debounced("abcde");

function debounce1(fn,delay) {
    let timeout 

    return function (...args) {
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
    
}

function search(value) {
    console.log("Searched for :",value)
}
let searched = debounce1(search, 1000)
searched("se")
searched("sea")
searched("sear")
searched("search")

let desres = debounce1(console.log, 3000)

for (let index = 0; index < 5; index++) {
    desres("loop")
    
}


function deboun(fn, delay,immediate) {
    let timeout 

    return function (...args) {
        clearTimeout(timeout)

        if (immediate == true && !timeout) {
            fn.apply(this,args)
        }

        timeout = setTimeout(() => {
           if(!immediate) fn.apply(this, args)
            timeout = null
        },delay)
    }
}

let res = deboun(console.log, 4000, false)
res("First")
res("Second")
res("Third")
res("Fourth")


function throttle(fn, delay) {
    let timelaps = 0;

    return function (...args) {
        let now = Date.now()

        if (now - timelaps >= delay) {
            fn.apply(this, args)
            timelaps = now;
        }
    }
}
let result = throttle(console.log, 2000)
result("A")
result("B")
result("C")
result(setTimeout(() => {
    console.log("D")
}, 2500))

let result2 = throttle(console.log, 3000)

for (let index = 0; index < 5; index++) {
   result2(index)
    
}