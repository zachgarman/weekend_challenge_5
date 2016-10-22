angular.module('favApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/home', {
           templateUrl: 'views/home.html',
           controller: 'HomeController as home'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html',
           controller: 'FavoritesController as fav'
         });
         $locationProvider.html5Mode(true);
});
