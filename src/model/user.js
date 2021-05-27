const mongoose = require("mongoose");
const valid = require("validator");


const userSchema = mongoose.Schema({    
    fname:{
        type:String,
        require:true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already present"],
        validate(value) {
          if (!valid.isEmail(value)) {
            throw new Error("Invaild Email");
          }
        },
      },
})

const User = mongoose.model("Client",userSchema)

module.exports = User;