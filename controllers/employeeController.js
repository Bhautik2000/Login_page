const express = require('express');
const mongoose = require('mongoose');
const Employee = mongoose.model('employee')
var router = express.Router();

router.get('/',(req,res)=>{
    res.render("employee/addOrEdit", {
        viewTitle : "Insert Employee"
    });
});

router.post('/',(req,res)=>{
    insertRecord(req,res);
});

function insertRecord(req,res){
  var emp = new Employee();
  emp.fullName = req.body.fullName;
  emp.email = req.body.email;
  emp.mobile = req.body.mobile;
  emp.city = req.body.city;
  emp.save((err,doc)=>{
    if(!err)
         res.redirect('employee/list');
    else{
        console.log('err during record insertion ....' + err);
    }
  });
}


router.get('/list',(req,res)=>{
    res.json('Resister succesfully......');
});

module.exports = router;
