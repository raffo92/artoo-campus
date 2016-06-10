angular.module('artoo')
    .filter('price', function(){
        return function (input, corrency = true){
            
        var output=input.toFixed(2);
        return (corrency) ? output+' Gold' : output;
        };
    })   
    
    .filter('availability', function(){
        return function (input){
         return parseInt(input)?input+" Pieces" : 'out-of-stock';
        };
    })
    
    .filter('races', function(){
        return function (input){
         return input.join(', ')+'.'; //Join trasforma a stringa e separa con virgola (, )
        };
    })
    
    .filter('suitable', function(PlayerSrv){
       var race= PlayerSrv.get().race;
        return function (input){
            
        return input.indexOf(race)>-1; 
        };
    })
    
    .filter('suitability', function(PlayerSrv){
       var race= PlayerSrv.get().race;
       
        return function (input , active){
             return (!active && input)|| input.filter(singleItem => singleItem.races.indexOf(race) > -1);
        };
    
});