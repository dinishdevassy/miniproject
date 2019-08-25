var mongoose=require("mongoose");
var schema=mongoose.Schema;//instance created for schema

var userschema=new schema(
    {
        uname:{type:String,required:true},
        pwd:{type:String,required:true},
        email:{type:String,required:true},
        role:{type:String,required:true}
    }
)
var usermodel=mongoose.model("users",userschema,"users");
module.exports=usermodel;