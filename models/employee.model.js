const mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    
    fullName:{
        type : String,
        required :" This is required... "
    },
    email:{
        type : String,
        required :" This is required... "
    },
    mobile:{
        type : String,
        required :" This is required... "
    },
    city:{
        type : String,
        required :" This is required... "
    }
});

mongoose.model('employee',employeeSchema);
