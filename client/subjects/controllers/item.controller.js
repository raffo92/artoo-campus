// create a controller for the items

angular.module('artoo').controller('ItemsCtrl', ($scope)=>{//Lo scope è un oggetto speciale che sta tra il controller e la view
 
   $scope.item = {
// attach the following data to it
/*
 * Ascia bipenne
 * L’ascia bipenne è una scure a due lame, simbolo del potere minoico.
 * Spazio occupato: 3 slots
 * http://khazalidgrungron.altervista.org/axes/05.png
 */
       name : 'Ascia bipenne',
       description:'L\’ascia bipenne è una scure a due lame, simbolo del potere minoico.',
       image:'http://khazalidgrungron.altervista.org/axes/05.png',
       slots:3,
       classes: ['WAR','SHAM'],
   };
  
  
  // attach some behaviours to the controller: read-description, check-if-fits, dispose
  
  $scope.dispose = () =>{
      $scope.item = undefined; 
  }; 
  
   
  $scope.toggleDescription = () => { //Nascondi/Mostra Descrizione
     $scope.visibleDescription = !$scope.visibleDescription;
     
  };
   
   
   
   $scope.checkIfFits = (item, bagSize) =>{
     var flag=item.slots <=  bagSize;
    
    if(flag){mex="YES";}
    else{mex="NOPE"}
     return mex;
     
   };
   
   
  
   
   
   
});




