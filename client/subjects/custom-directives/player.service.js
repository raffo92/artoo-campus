angular.module('artoo').service('PlayerSrv', function(){
   
    var dictionary = {
        fight: 'The player started a fight',
        drink: 'The player just drank a potion',
    };
    
    var logs= [];
    
    this.log = (code) => {
    var text =  dictionary[code] || "The player just made an unknown action";
    var date = new Date();    
      logs.push({text: text , date: date}); 
    };
    
    
    this.getLogs = () =>{
        return logs;
    };
    
})