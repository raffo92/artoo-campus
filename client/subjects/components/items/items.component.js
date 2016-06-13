angular.module('artoo').component('items',{
    
    controller: 'ItemsCtrl',
    controllerAs: 'itemsCtrl', //Default viene invocato con $ctrl
    //controller: function(){console.info('item run');}, //Funzione Semplici
    templateUrl: 'subjects/components/items/items.html',
    // template: '<hr><div>Name: </div>'  //Usato per HTML semplici su una riga
    bindings:{ //Prende gli attributi (var o strg)
        // comment: '@',
        // items: '<',
        typology: '@',
    },
   
});