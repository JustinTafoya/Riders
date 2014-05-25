
//CONTACT FORM

var app = angular.module('myApp', []);
app.controller('FormCtrl', function ($scope, $http) {
    
    $scope.data = {
        Name: "default",
        emailaddress: "default",
    };
    $scope.submitForm = function() {
        console.log("posting data....");
        $http.post('http://posttestserver.com/post.php?dir=jsfiddle', JSON.stringify(data)).success(function(){/*success callback*/});
    };
});