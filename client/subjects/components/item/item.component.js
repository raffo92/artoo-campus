angular.module('artoo').component('item',{
    
    bindings:{
        item: '<data',
    },
    controller: 'ItemCtrl',
    controllerAs: 'itemCtrl', //Default viene invocato con $ctrl
    templateUrl: 'subjects/components/item/item.html',

   
});