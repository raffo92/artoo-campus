console.log('Hello world from a '+process.env.NODE_ENV+' enviroment!');

var myModule = require("./exercises/myModule.js")();

// console.log(typeof myModule); //vedo tipo del Modulo (obj)

//console.log(myModule.sayHello('Raffo'));

// var http = require("http");
//  var server = http.createServer(function (req,res){
//      res.write('<h1>Dossami Sta ceppa!</h1>');
//      res.end();
//  })
 
//     server.listen(8082,'0.0.0.0', function (){
//       console.log('Server run!'); 
//     });
     
    var express = require("express");
    
    var app = express();
    
    app.get ('/',function(req,res){
        // console.log(req);
        // res.redirect('https://mean-artoo-lorenzocestaro.c9users.io:8080/')
        res.send('<h1>Hello Pippo!</h1>');
    });
    
    // app.get ('/user',function(req,res){
    //     res.send([{name:'Raffo', email: 'pippo@prova.it'}]);
    // });
    
    
    app.get ('/reverse/:string',function(req,res){
       var input = req.params.string;
       var output= input.split('').reverse().join('');
       if(req.query.uppercase !== 'false') output= output.toUpperCase();
       if(req.query.spaced) output= output.split('').join(' ');
       res.send('<h1>'+output+'</h1> <audio controls><source src="public/Fail.ogg" type="audio/ogg"></audio>');
    });
    
    var users= require('./exercises/users');
    app.use('/users',users.router);
    
    
    
    var items= require('./exercises/items');
    app.use('/items',items.router);    
    
    app.listen(8082, function(){
            
        });
        console.log('My server is ON and running!');
  
