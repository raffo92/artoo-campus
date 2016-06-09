angular.module('artoo').service('PlayerSrv',function () {
  
  var player=[ {
    id: 0,
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
  }, {
    id: 1,
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
  }, {
    id: 2,
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
  }]
  
  //--------------------------------------------------------------------
  
      this.get = (id) => { // Prende come parametro l'id del Player da usare
      switch (id){
        case 1: return player[id];
        case 2: return player[id];
        case 3: return player[id];
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