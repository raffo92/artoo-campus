angular.module('artoo').controller('ItemsCtrl', function ($scope , ItemsSrv) {
    
  $scope.ItemsSrv= ItemsSrv;

    $scope.selectItem= (code) =>{
    $scope.item= angular.copy(ItemsSrv.find(code));
    
    };
    

   $scope.resetForm= (form) => {
     $scope.item={};
     form.$setPristine();
   };
  
  
  $scope.insert= function (item, form){
    // console.info($scope.justAnInput);// è visibile poiche è dichiarata con ng-model (viene dichiarata in $scope)
    //  console.info('Send message: '+ text);
     ItemsSrv.add(item);
     $scope.resetForm(form);
  };
  
  
   $scope.save= function (item, form){
     ItemsSrv.update(item);
     $scope.resetForm(form);
  };
  
  
});