angular.module('artoo').directive('cssAdder', function(){
    
    return{
      restrict: 'AE',
      scope:{
        options: '='
        //cssAdder: '='
        
        // color:'@',
        // typology:'@',
        // thickness:'@',
      },
      
      link: function (scope , elem){
          
          var options= scope.options || {};//Linea di sicurezza per non entrare in eccezione se options is undefined 
          var color = options.color || 'gray';
          var thickness= options.thickness || '1px';
          var typology = options.typology || 'solid';
          elem.css('border',[thickness , typology,color].join(' '));
      }
    };
});