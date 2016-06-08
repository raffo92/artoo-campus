angular.module('artoo').service('PlayerSrv', function(){
    
    var player = {
        name: 'Raffo',
        hp : 100,
        exp: 17,
        level : 2,
        race : 'Gnome',
    }
    
    this.get = () => {
      return player;  
    };
    
    this.die = () => {
        player.hp = 0;
    };
    
    this.drinkPotion = () => {
        
        if(this.isDead()) return;
        var hp = player.hp + 50;
        player.hp = (hp > 100) ? 100 : hp;
    };

    this.gainExp = () => {
        
    };
    
    this.isDead = () => {
        //0 E' FALSE
        //!! PRENDE IL VALORE BOOLEAN
        return !(!!player.hp);
    };
    this.levelUp = () => {
        player.level += 1;
    };
    
    this.respawn = () => {
        if(!(this.isDead()))return;
        player.hp = 10;
    };
   
    this.takeHit = (damage) => {
        var hp = player.hp - damage;
        player.hp = (hp <= 0) ? 0 : hp
    };
});