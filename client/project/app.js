angular.module('artoo', [
  'appbar',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Project', url: 'project'});
  });