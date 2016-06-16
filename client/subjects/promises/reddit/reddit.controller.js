angular.module('artoo').controller('RedditCtrl', function($scope, RedditSrv){
    
    $scope.$watch('search', function (newValue){
        $scope.loading = true;
        RedditSrv.query(newValue).then((data) => {
            console.log(data);
            $scope.reddits = data.data && data.data.children;
            $scope.loading = false;
            // console.info(data.data.children);
        }).catch();
        //HO MESSO TRUE PER CONTROLLARE TUTTE LE PROPRIETA'
    },true);
    
    $scope.query = (search) => {
        $scope.loading = true;
        RedditSrv.query(search).then((data) => {
            $scope.reddits = data.data.children;
            $scope.loading = false;
            // console.info(data.data.children);
        }).catch();
    };
 
});