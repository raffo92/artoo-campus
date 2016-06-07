// define app module
// define a run function

var app= angular
         .module("artooinit",[])
        .run (() =>{//ECMA SCRIPT 6
            console.info('I run in the setter!');}); 



angular
.module("artooinit")
.config(function (){})
.run(function (){})
.run (() =>{//ECMA SCRIPT 6
    console.info('I run in the getter!');
    }); 
 
        
app.run(function (){
    console.info('I run in the var!')
});