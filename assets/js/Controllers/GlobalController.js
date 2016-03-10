app.controller('mainCtrl', ["$scope", function ($scope) {

   $scope.backHome = function () {
       window.location.href = 'index.html';
   };

    $scope.aboutView = function () {
        window.location.href = 'about.html';
    };

    $scope.contactView = function () {
        window.location.href = 'contact.html';
    }

}]);


