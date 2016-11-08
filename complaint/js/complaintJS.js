var app = angular.module('myApp', []);

app.controller('comCtrl', function($scope, $http) {
    $scope.clist = [];
    $http({
        method: 'POST',
        url: 'http://localhost/cityaid/complaint/php/get.php',
        data: {},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function(response){
            angular.forEach(response.data.children, function(i){
                $scope.clist.push(i.data);
            });
        })
        .error(function(){
            alert("Error");
        });
    $scope.getStatus = function (ch, index) {
        if(ch == 0 && $scope.clist[index].status == 'solved') return true;
        else if(ch == 1 && $scope.clist[index].status == 'pending') return true;
        else return (ch == 2 && $scope.clist[index].status == 'rejected');
    };
});

function formatDate(val){
    var mon = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var arr = val.split("-");
    return arr[2] + "-" + mon[parseInt(arr[1])] + "-" + arr[0];
}

