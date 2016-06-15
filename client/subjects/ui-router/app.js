angular.module('artoo', [
  'appbar',
  'ui.router',
  'page-loader',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'UI Router', url: 'subjects/ui-router'});
  })
  //MI CONFIGURO TUTTI GLI STATI DELL'APPLICAZIONE
  .config(($stateProvider,  $urlRouterProvider) => {
    $stateProvider
      .state('contacts', {
        data : {
          color: 'red',
        },
        // SERVE PER NON TRANSIZIONARE IN QUESTO URL
        //abstract: true,
        resolve: {
          color: function( $timeout){
            //console.info("Start resolve");
            return $timeout(function (){
           //   console.info("Resolve Done");
              return 'blue';
            }, 1500);
          },
        },
        controller: 'ContactsCtrl',
        controllerAs: 'ContactsCtrl',
        //ANCHE TEMPLATEURL
        templateUrl: '/subjects/ui-router/contacts/contacts.html',
        url : '/contacts',
        onEnter : function (color, $state){
         // console.info("onEnter Function");
          if(color !== 'blue') {
           // console.info("Wrong color");
            // $state.go('home');
          }
        },
        onExit : function(){
          //  console.info("onEnter Finish");
        },
      })
      .state('items', {
        templateUrl : 'subjects/ui-router/items/items.html',
        controller: 'ItemsCtrl',
        controllerAs : 'ItemsCtrl',
        url: '/items',
      })
      
      .state('items-details', {
        controller: 'ItemsDetailsCtrl',
        controllerAs : 'ItemsDetailsCtrl',
        templateUrl: 'subjects/ui-router/items/items-details.html',
        url: '/items/:code',
        // resolve: {
        //   item: function($stateParams, ItemsSrv){
        //     console.log("CODE = " + $stateParams.code );
        //     return ItemsSrv.getDetails($stateParams.code);
        //   },
        // }, 
        // onEnter: function ($state, item){
        //   if(!item) $state.go('items');
        // },
      })
      .state('contacts.list', {
        templateUrl : 'subjects/ui-router/contacts/list/list.html',
        url: '/list',
      })
      .state('contacts.add', {
        template : '<h2>Add</h2>',
        url: '/add',
      })
      .state('contacts.query', {
        template : '<h2>Query</h2>',
        url: '/query',
      })
      .state('home', {
        controller: function() {
          // console.info("I'm home");
        },
        template: '<h1>Home</h1>',
        url : '/home',
      });
      
      $urlRouterProvider.otherwise('/');
  })
  // .run(($rootScope) => {
  //   $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => {
  //       $rootScope.loading = true;
  //       fromState.name = fromState.name || 'nowhere';
  //       console.log("Transition Start from state " + fromState.name + " to state " + toState.name + "...");
  //   });
  //   $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams, options) => {
  //       $rootScope.loading = false;
  //       fromState.name = fromState.name || 'nowhere';
  //       console.log("Transition Success from state " + fromState.name + " to state " + toState.name + "...");
  //   });
  // });