angular.module('artoo', [
  'appbar',
  'ngMessages',
  'ngMaterial',
])

  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Angular Material', url: 'subjects/material'});
  })
  
  
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
     .primaryPalette('blue')
     .accentPalette('deep-orange')
     .warnPalette('red')
     .backgroundPalette('blue-grey');
  })
  
  ;