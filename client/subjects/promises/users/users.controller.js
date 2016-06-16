angular.module('artoo').controller('UsersCtrl', function($scope,UsersSrv){
    this.UsersSrv=UsersSrv;
    
    $scope.loading=true;
    
    
    UsersSrv.query()
    .then((data)=>{ //Promessa Mantenuta
        $scope.loading=false;
        $scope.users=data;
    })
    
    .catch((err)=>{
      // console.log(err);
    })
    
    
    $scope.getDetails = (id) =>{
        $scope.loading=true;
        UsersSrv.get({id: id}).then((data)=>{
            
            $scope.loading=false;
            $scope.userDetails=data;
            $scope.user=data;
        })
    }
    
    
    $scope.user = UsersSrv.create();
    
    $scope.remove = (user) => {
        user.$remove({id : user.id}).then ((data) =>{
           
            console.info(data);
            $scope.loading=false;
        }).catch();
    }
    
    $scope.save = (user ,form)=>{
        $scope.loading=true;
        user.createdAt= new Date();// setto parametri
        user.$save().then((data)=>{
            $scope.user = UsersSrv.create();
            form.$setPristine();
           $scope.loading=false;
        }).catch();
    };
  

});