import angular from 'angular';
import homeController from './home'
import 'angular-ui-router';

angular.module('app.home', ['ui.router'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/home");      
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home/home.html",
                controller: "home as vm"
        });
    }])
    .controller ('home', homeController);
    
    
    
    