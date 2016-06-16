angular.module('artoo', [
  'appbar',
  'ngResource'
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Promises', url: 'subjects/promises'});
  });