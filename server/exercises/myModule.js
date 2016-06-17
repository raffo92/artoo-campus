module.exports=function (option) { //uso nel return fn e non obj poiche posso passare parametri di confing
  option= option || {};
  var robotName= option.robot || 'Alpha Tj!';
  
  function sayHello (name){
    return console.log('Hello '+ name + ' ! - from '+robotName);
  }
  
  return {
    name: 'My module',
    version: '1.0.0',
    
    //public API
    sayHello: sayHello,
  }
  
  
}