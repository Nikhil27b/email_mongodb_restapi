const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/clients",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then((res)=>{
    console.log("Database connected");
}).catch((e)=>{
    console.log(e);
})