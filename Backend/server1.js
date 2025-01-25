// const express=require('express')
// const app=express();
// const PORT=7788

// app.get("/",(request,response)=>{
//     response.send("Welcome to express js get method")
// })
// app.get("/getName",(request,response)=>{
//     response.send("My College name is Vasantdada")
// })
// app.get("/getName/area",(request,response)=>{
//     response.send("Vasantdada from Mumbai");
// })

// app.listen(PORT,()=>{
//     console.log(`My Server is running on port number ${PORT}`)
// })
const express=require('express')
const users=require("./users.json")
const app=express();
const PORT=8899;

app.get("/users",(request,response)=>{
    return response.json(users)
})
app.get("/users/:id",(request,response)=>{
    const id=Number(request.params.id);
    const user=users.find((user)=>user.id===id);
    return response.json(user);
})

app.listen(PORT, ()=>{
    console.log(`My Server is running on ${PORT} number`)
})