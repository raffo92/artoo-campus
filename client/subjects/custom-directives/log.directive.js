angular.module('artoo').directive('log', function($timeout,PlayerSrv){
    return{
     restrict: 'A',
     scope:{
         log: '@'
     },
     link: function(scope , elem , attrs){
         elem.on('click',function($e){
             $timeout(() => {
              PlayerSrv.log(scope.log);
         });
            }); 
     }
    };
})