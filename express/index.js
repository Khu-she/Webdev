const express=require("express")
const app=express()
const path=require("path")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'/public')))

// type of url
            // http://localhost:3000/student/s100           url parameter
            // http://localhost:3000/student/s100/branch/btech           url parameter
            // http://localhost:3000/product/?pid=100&pname=mobile           query string
        
app.get("/student/:sid/branch/:bname",(req,res)=>{
    const sid=req.params.sid
    const branch=req.params.bname
    res.send("Student sid: "+sid+"<br>Student Branch:"+branch)
})

const logger=(req,res,next)=>{
         console.log(`you access method: ${req.method} at ${req.url}  at ${new Date().toISOString()}`);
         next()
         
}

app.get("/books/:bid/author/:bname",(req,res)=>{
    const bid=req.params.bid
    const author=req.params.bname
    res.send("Book bid: "+bid+"<br>Book name:"+author)
})

app.get("/", (req, res, next) => {
    const token = req.header("token");

    if (token) {
        return next();
    }

    return res.status(400).json({ error: "Not valid user" });
}, (req, res) => {
    res.send("Welcome to GET request");
});


app.use(logger)
app.get("/product",(req,res)=>{
    const pid=req.body.pid
    const pname=req.body.pname
    res.status(200).json({pid,pname})
})

app.get("/product",(req,res)=>{
    const pid=req.query.pid
    const pname=req.query.pname
    res.send("product pid: "+pid+"<br>product name: "+pname)
})
app.post("/",(req,res)=>{
    res.send("Welocme to post request")
})

app.put("/",(req,res)=>{
    res.send("Welocme to put request")
})

app.delete("/",(req,res)=>{
    res.send("Welocme to delete request")
})



app.listen(3000,(error)=>{
    if(error){
        console.log(error.message);
        
    } 
    console.log("Running express on http://127.0.0.1:3000");
    
})

// get has size limit appx 2mb. not secure can send data in url 
// post cannot filter data thats why middle ware