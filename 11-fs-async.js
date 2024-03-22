const {writeFile, readFile} = require('fs');
console.log("start")
readFile("./content/first.txt", "utf-8" ,(err,res)=>{
    if(err){
        console.log(err)
        return
    }
    const first = res;
    readFile("./content/second.txt","utf-8",(err,res)=>{
        if(err){
            console.log(err)
            return
        }
        const second = res;
        writeFile("./content/result-async", `Here is the result: ${first}, ${second}` ,(err,res)=>{
            if(err){
                console.log(err)
            }
            console.log("done with this task");
        })
    })
})
console.log("starting the next task")