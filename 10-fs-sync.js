const {readFileSync, writeFileSync} = require('fs');
console.log("starting the task")
const first = readFileSync("./content/first.txt","utf-8");
const second = readFileSync("./content/second.txt","utf-8")

console.log(first,second)

writeFileSync("./content/result-syn.txt", `Here is the result of the first and second: ${first}, ${second}`, {flag:"a"})
console.log("done with this task")
console.log("starting the next one")