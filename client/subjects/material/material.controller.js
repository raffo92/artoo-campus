angular.module('artoo').controller('matirialCtrl', function($scope){
    
    $scope.minDate = new Date (2016,06,10);
    
      $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day%2 == 1;
       // return day === 0 || day === 6;
    }
    
    
})