var express=require("express");
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var url="mongodb+srv://dinish:dinish@cluster0-llco8.mongodb.net/sampledb?retryWrites=true&w=majority";
var user=require("../model/usermodel");

const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,function(err){
    if (err) throw err;
    else{
        console.log("Databse Connected...");
    }
})

router.get("/",function(req,res){
    res.redirect("register");
})
router.get("/productdetails",function(req,res){
    res.render("productdetails")
})

router.post("/newuser",function(req,res){
    var u1=new user();
    u1.uname=req.body.uname;
    u1.pwd=req.body.pwd;
    u1.email=req.body.email;
    u1.role=req.body.role;

    u1.save(function(err){
        if(err) throw err;
        else
        {
            res.redirect("/");
        }
    });

});

router.post("/login",function(req,res){
    var username=req.body.uname;
    var userpwd=req.body.pwd;
    user.find({uname:username,pwd:userpwd},function(err,result){
        if(err) throw err;
        else{
            if(result.length!=0)
                res.redirect('/user/productdetails');
            else
                res.redirect('/index')
        }

     })
})

module.exports=router;