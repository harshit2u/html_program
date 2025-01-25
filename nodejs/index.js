// // // // console.log("Welcome to node js Application")
// // // //Operating System module
// // // const os = require("os")
// // // console.log(os.type())
// // // console.log(os.platform())
// // // console.log(os.arch())
// // // console.log(os.version())
// // // console.log(os.freemem())
// // // console.log(__dirname)
// // // console.log(__filename)
// // // console.log(os.cpus());

// // // const path = require("path")
// // // console.log(__dirname)
// // // console.log(__filename)
// // // console.log(path.dirname(__dirname))
// // // console.log(path.dirname(__filename))
// // // console.log(path.basename(__filename))
// // // console.log(path.extname(__filename))

// // // const fs = require("fs")
// // // fs.readFile("one.txt", "utf-8", (err, data) => {
// // //     if (err) {
// // //         console.log(err)
// // //     } else {
// // //         console.log(data)
// // //     }
// // // })

// // // const fs = require("fs")
// // // fs.writeFile("hello.doc", "Welcome to Node JS", (err) => {
// // //     if (err) {
// // //         console.log(err)
// // //     } else {
// // //         console.log("created file adn added text successfully")
// // //     }
// // // })

// // const fs = require("fs")
// // console.log("This is my first statement in console") 
// // const result = fs.readFileSync("one.txt", "utf-8",(err,result)=>{
// //     if(err){
// //         console.log(err)
// //     }else{
// //         console.log(result)
// //     }
// // })
// // console.log("This is my last statement in console")
// // console.log(result)


// const http=require('http')
// const PORT=7788;
// const mySerevr=http.createServer((request,response)=>{
//     response.write("Backend application running successfully");
//     response.write("One more statement from nodejs")
//     response.end();
// })
// mySerevr.listen(PORT,()=>{
//     console.log(`My server is running on ${PORT} number`);
// })

let { Addition, Multiplication } = require('./Add');
console.log("Addition result is " + Addition(10, 20));
console.log("Multiplication result is " + Multiplication(10, 20));