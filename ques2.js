const express = require("express")
const app = express()
app.get("/books",logger,(req,res)=>
{
 res.send({ route: "/books"})
})
app.get("/libraries",logger,checkPermission("librarian"),(req,res)=>
{
 res.send({ route: "/libraries"} )
})
app.get("/authors",logger,checkPermission("authors"),(req,res)=>
{
 res.send({ route: "/authors"})
})

function logger(req,res,next)
{
    next()
    console.log("hello")
}

function checkPermission(role)
{
   return function lod(req,res,next)
   {
       if(role=="librarian")
       {
           return res.send({route:"/libraries",permission: true})
       }
       else if(role=="authors")
       {
           return res.send({route:"/authors",permission: true})
       }
   }
}


app.listen(7000,()=>
{
    console.log("listening on port 7000")
})