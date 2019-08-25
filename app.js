var express=require("express");
const path=require("path");
var userrouter=require("./Routes/userrouter");
var productrouter=require("./Routes/productrouter")

const app=express();


app.use(express.static(path.join(__dirname,"/public")));

app.set("views","./src/view");
app.set("view engine","ejs");

app.use("/user",userrouter);
app.use("/product",productrouter);

app.listen("8080",function(req,res){
    console.log("Server Started Listening...")
})

app.get("/",function(req,res){
    res.render('index');
})

app.get("/index",function(req,res){
    res.redirect('/');
})
app.get("/register",function(req,res){
    res.render('register');
})
app.get("/newproduct",function(req,res)
{
    res.render("product");
})