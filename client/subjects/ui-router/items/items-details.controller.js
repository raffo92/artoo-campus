angular.module('artoo').controller('ItemsDetailsCtrl', function($stateParams, ItemsSrv){
    //console.log("ENTRA ITEMSDETAILSCTRL");
    //console.log($stateParams);
    this.ItemsSrv = ItemsSrv;
    this.loading = true;
    ItemsSrv.getDetails($stateParams.code, (item) => {
        this.item = item;
        this.loading = false;
    });
});