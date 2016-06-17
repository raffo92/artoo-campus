angular.module('artoo', [
  'appbar',
  'ngResource'
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'NodeJS & ExpressJS', url: 'subjects/node-express'});
  });