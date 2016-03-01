app.controller('mainCtrl', ["$scope", function ($scope) {

   $scope.backHome = function () {
       console.log('home view');
       window.location.href = 'index.html';
   };

    $scope.aboutView = function () {
        console.log('about view');
        window.location.href = 'about.html';
    };

    $scope.contactView = function () {
        console.log('contact view');
        window.location.href = 'contact.html';
    }

}]);


