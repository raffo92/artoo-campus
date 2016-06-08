// create items service
angular.module('artoo').service('ItemsSrv', function () {
    // LOCAL BUSINESS LOGICS
    var items = [
        {
          name: 'Ascia bipenne',
          code: 'it01',
          description: 'L\'ascia bipenne è una scure a due lame, simbolo del potere minoico.',
          image: 'http://khazalidgrungron.altervista.org/axes/05.png',
          price: 3.5,
          availability: 3,
          races: ['human', 'dwarf']
        }, {
          name: 'Katana',
          code: 'it02',
          description: 'Arma inizialmente usata dai Samurai e successivamente evolutasi con le arti Ninja.',
          image: 'http://www.clker.com/cliparts/5/s/J/S/8/i/wakisashi-sword.svg',
          price: 4,
          availability: 0,
          races: ['human', 'elf']
        }, {
          name: 'Pugnale',
          code: 'it03',
          description: 'Arma da taglio usata unicamente per gli scontri ravvicinati. Può essere nascosta, in modo da cogliere di sorpresa il nemico.',
          image: 'http://www.dailyclipart.net/wp-content/uploads/medium/Pirates3.jpg',
          price: 2.99,
          availability: 4,
          races: ['human', 'elf', 'dwarf']
        }, {
          name: 'Shuriken',
          code: 'it04',
          description: 'Arma esclusivamente da lancio. Grazie alla forma e alla struttura, raggiunge può raggiungere una velocità  impressionante.',
          image: 'http://www.karatemart.com/images/products/large/tiny-typhoon-shuriken.jpg',
          price: 1,
          availability: 2,
          races: ['human', 'elf']
        }
    ];
    
    //PUBLIC API
    
    //get
    this.get = function () {
        return items;
    };
    
    // this.remove = function(item) {
    //     //FILTER CREA UNA LISTA CON TUTTI GLI ITEM SENZA QUELLO PASSATO
    //     //SINGLEITEM CORRISPONDE ALLA i DEI CICLI
    //     items = items.filter(singleItem => singleItem.code !== item.code);
    // };
    
    this.remove = function remove(item){
        items = items.filter(function(singleItem){
            return singleItem.code !== item.code;
        });
    }
    
    //update availability
    this.updateAvailability = function (item, amount){
        items.forEach(function (singleItem){
            // if(singleItem.code === item.code && ((amount < 1 && singleItem.availability > 0) || (amount > 0))) {
            //   singleItem.availability += amount;
            // }
            //MODO ALTERNATIVO PER SCRIVERE QUELLO SOPRA
            if(singleItem.code === item.code){
                var newAmount = singleItem.availability += amount;
                singleItem.availability = (newAmount >= 0) ? newAmount : 0;
            }
        })
        //item.availability += 1
    }
    
});