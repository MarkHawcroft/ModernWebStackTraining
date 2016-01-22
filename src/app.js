import angular from 'angular';
import 'angular-ui-router';
import 'home/home.module';

export let app = angular.module('app', ['ui.router', 'app.home']);

export default app;