angular.module('artoo').controller('PageLoaderCtrl', function($scope){
   
    // console.log('run controller');

    $scope.$on('$stateChangeStart',(event,toState,toParams,fromState,fromParams)=>{
        this.loading= true;
          console.log('Transition starts....');
          console.log(fromParams);
    })
    
    $scope.$on('$stateChangeSuccess',()=>{
      this.loading= false;
      console.log('Transition Terminata....');
    })
    

  
});