   
   var express = require("express");
   
   var router= express.Router();
   var controller = require("./users.controller")();
   
   router.get('/',controller.query);
   
//   users.get ('/user',function(req,res){
//         res.send([{name:'Raffo', email: 'pippo@prova.it'}]);
//     });
    
    
    module.exports ={
        name:'Users Router',
        router:router,
        versione: '1.0.0',
    };