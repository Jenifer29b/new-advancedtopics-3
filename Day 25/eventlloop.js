//Important in Js
//Event Loop : In JavaScript, the event loop manages execution orderflow of program.
//The event loop is a constantly running process that checks the call stack and the task queues.
// it categorized into two types : micro and macro task ,micro - Higher priority macro - lower priority
// micro - promise.then promise.catch (exceutes first after stack is empty)
// macro - settimeout,setInterval,i/o (exceutes after the micro tasks r finished)

console.log("Step 1")

setTimeout(() => console.log("Macro task :step 2"))
let promise = new Promise((resolve) => resolve())
promise.then(()=>console.log("Micro task :Step 3"))

console.log("Step 4")