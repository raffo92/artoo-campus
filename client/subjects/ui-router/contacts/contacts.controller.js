angular.module('artoo').controller('ContactsCtrl', function($state, color){
    //ACCEDERE AI DATI PRESENTI NELLO STATO
    this.color = $state.current.data.color;
    this.resolveColor = color;
    
    //console.info("Contacts controller runs");
});