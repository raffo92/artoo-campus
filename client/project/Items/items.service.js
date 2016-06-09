angular.module('artoo').service('itemsSrv',function () {
    
    var items = [{
    id:"w1",    
    nome: "Spada",
    type: "weapon",
    price: 20,
    att_value: 10,
    dif_value: 0,
    recovery_hp: 0,
    recovery_mana: 0,
    att_base: 2, //Varianza del Range DMG per il calcolo danno (min -2 / MAX +2)
    att_special: [{name:"Affondo"},{cost:3},{status:"bleeding"}],
    },
    {
    id: "a1",    
    nome: "Cotta in Pelle",
    type: "armor",
    price: 15,
    att_value: 0,
    dif_value: 6,
    recovery_hp: 0,
    recovery_mana: 0,
    att_base: 0,
    att_special:{},
    },
    {
    id:"c1",    
    nome: "Pozione HP (Media)",
    type: "consumable",
    price: 5,
    att_value: 0,
    dif_value: 0,
    recovery_hp: 10,
    recovery_mana: 0,
    att_base: 0,
    att_special:{},
    }
    
    ];
    
    
    
    
    
});