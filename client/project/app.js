angular.module('artoo', [
  'appbar',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Services', url: 'project'});
  });