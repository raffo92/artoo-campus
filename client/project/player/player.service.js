angular.module('artoo').service('PlayerSrv',function () {
  
  var player1= {
    id: 1,
    name : "player1",
    sesso: "M",
    classe: "Guerriero",
    level: 1,
    exp: 0,
    //--Statistiche
    hp: 10,
    mana:6,
    att: 2,
    dif: 3,
  }
  
  var player2= {
    id: 2,
    name : "player2",
    sesso: "F",
    classe: "Mago",
    level: 1,
    exp: 0,
    //--Statistiche
    hp: 6,
    mana:10,
    att: 4,
    dif: 1,
  }
  
  var player3= {
    id: 3,
    name : "player3",
    sesso: "M",
    classe: "Assasino",
    level: 1,
    exp: 0,
    //--Statistiche
    hp: 8,
    mana:8,
    att: 3,
    dif: 2,
  }
  
  //--------------------------------------------------------------------
  
      this.get = (id) => { // Prende come parametro l'id del Player da usare
      switch (id){
        case 1: return player1;
        case 2: return player2;
        case 3: return player3;
      }
        
    };
  
  
      this.die = (id) => {
      switch (id){
        case 1: player1.hp = 0;
        case 2:player2.hp = 0;
        case 3:player3.hp = 0;
      }
     
        
        
    };
  
  
  
  
});