angular.module('artoo').filter('yesOrNo', function(){
  return function(input){return input ? "YES" : "NO"};
});
