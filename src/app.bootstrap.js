import angular from 'angular';
import 'app';

angular.element(document).ready(function(){
   angular.bootstrap(document, ["app"], {strictDi: true});    
});