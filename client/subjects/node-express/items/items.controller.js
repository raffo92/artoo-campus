angular.module('artoo').controller('ItemsCtrl', function($scope, ItemsSrv){
    
    
    ItemsSrv.query().then((items)=>{
        //console.log(items);
    })
    
    var newItem = ItemsSrv.create();
    newItem.name= 'Shuriken';
    newItem.$save().then((date)=>{
        console.log(date)
    }).catch((err)=>{
        console.error(err);
    });
})