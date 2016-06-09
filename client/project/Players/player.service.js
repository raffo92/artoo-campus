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
    hp_tot:10,
    mana:6,
    mana_tot:6,
    att: 2,
    dif: 3,
    gold: 0,
  }, {
    id: 1,
    name : "player2",
    sesso: "F",
    classe: "Mago",
    level: 1,
    exp: 0,
    //--Statistiche
    hp: 6,
    hp_tot:6,
    mana:10,
    mana_tot:10,
    att: 4,
    dif: 1,
    gold: 0,
  }, {
    id: 2,
    name : "player3",
    sesso: "M",
    classe: "Assasino",
    level: 1,
    exp: 0,
    //--Statistiche
    hp: 8,
    hp_tot:8,
    mana:8,
    mana_tot:8,
    att: 3,
    dif: 2,
    gold: 0,
  }]
  
  //--------------------------------------------------------------------
  
    this.get= () =>{
      return player;
    }
  
    this.getPlayerById = (id) => { // Prende come parametro l'id del Player da usare [partendo da 0]
      return player[id];
    };
  

    this.killPlayer = (id) => {
      player[id].hp=0;  
    };
  
  
  
  
});