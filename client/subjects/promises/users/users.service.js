angular.module('artoo').service('UsersSrv' ,function ($resource){
    
    var User= $resource('http://jsonplaceholder.typicode.com/users/:id',{ //Aggiungo ":id"
    //   typology: 'users', //sopra :typology
    },{
        myMethod:{
            isArray:true,
            method: 'GET'
        }
    }); 
    
        
        this.create = () => {
            return new User ();
        }
        
        
        
    this.get = (params) => {
        return User.get(params).$promise;
    }
    
    
    
    this.query=()=>{
        //Mi aspetto promessa
        return User.query().$promise;
    };

})