var app = angular.module('myApp', []);

app.controller('newsCtrl', function($scope, $http) {
    $scope.nlist = [];
    $http({
        method: 'POST',
        url: 'http://localhost/cityaid/news/php/news.php',
        data: {},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function(response){
            angular.forEach(response.data.children, function(i){
                $scope.nlist.push(i.data);
            });
        })
        .error(function(){
            alert("Error");
        });

    $scope.curr_tab = "";
    $scope.sel_tab = 1;
    $scope.set_tab = function (ch) {
        switch(ch){
            case '1': $scope.curr_tab = "";$scope.sel_tab = 1;break;
            case '2': $scope.curr_tab = "Politics";$scope.sel_tab = 2;break;
            case '3': $scope.curr_tab = "Sports";$scope.sel_tab = 3;break;
            case '4': $scope.curr_tab = "Events";$scope.sel_tab = 4;break;
        }
    };
    $scope.active_tab = function (ch) {
        switch(ch){
            case '1': return true;break;
            case '2': return true;break;
            case '3': return true;break;
            case '4': return true;break;
        }
    };
});

function formatDate(val){
    var mon = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var arr = val.split("-");
    return arr[2] + "-" + mon[parseInt(arr[1])] + "-" + arr[0];
}

