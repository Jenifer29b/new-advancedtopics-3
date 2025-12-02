//Debounce is used to avoid unwanted function calls by waiting for a specified period of inactivity,
//  and then executing the function with the latest value or event data from the user.
// it excutes only the last value
// it taskes two parameter : debounce function and delay

// function debounce(fn, delay) {
//   let timerout;

//   return function (...args) {
//     let context = this; // to store the values of function
//     clearTimeout(timerout);

//     timerout = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

// function search(value) {
//   console.log("Searched value", value);
// }

// let debounced = debounce(search, 2000);
// debounced("Pos");
// debounced("Postm");
// debounced("Postman");

// function debounce(fn, delay) {
//   let timeout;

//   return function (...args) {
//     let context = this;
//     clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

// function loop(num) {
//   for (let i = 0; i < num; i++) {
//     console.log("Looping", i);
//   }
// }

// let debounced = debounce(loop, 2000);
// debounced(3);
// debounced(5);
// debounced(10);
// debounced(15);

var debounce = function (fn, t) {
    let timeout
    return function (...args) {
        let context = this;
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            fn.apply(context,args)
        }, t);
      
  };
};


 const log = debounce(console.log, 100);
 log('Hello'); // cancelled
 log('Hello'); // cancelled
 log('Hello'); // Logged at t=100ms
 


function debounce(fn, delay, immediate = true) {
    let timeout;
    
    return function (...args) {
        let context = this;
        clearTimeout(timeout);

        if (immediate && !timeout) {
            fn.apply(context, args);
        }

        timeout = setTimeout(() => {
            if (!immediate) fn.apply(context, args);
            timeout = null;
        }, delay);
    };
}

function fakequery(query) {
    console.log("Searching ...", query)
}

let debounced = debounce(fakequery, 2000);
debounced("sea")
debounced("sear")
debounced("search")
debounced("searchi")
debounced("searchin")
debounced("searched")

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

let debounced1 = debounce(repeat, 2000,true)
debounced1("fool")
debounced1("foolished")