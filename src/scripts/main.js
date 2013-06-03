require.config({
  baseUrl: '/scripts',
  paths: {
    jquery: 'lib/jquery/jquery.min',
    text: 'lib/require/text',
    angular: 'lib/angular/angular.min',
    'angular-resource': 'lib/angular/angular-resource.min',
    'angular-mocks': '../../test/scripts/libs/angular-mocks'
  },
  priority: [
    'angular'
  ],
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angular-mocks': {
      deps: ['angular'],
      'exports': 'angular.mock'
    },
    'angular-resource': ['angular']
  }
});

require([
  'jquery',
  'angular',
  'app'
  ], function ($, angular, app) {
    'use strict';
    $(document).ready(function(){
      var $html = $('html');
      angular.bootstrap($html, [app['name']]);
      // Because of RequireJS we need to bootstrap the app app manually
      // and Angular Scenario runner won't be able to communicate with our app
      // unless we explicitely mark the container as app holder
      // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
      $html.addClass('ng-app');
    });
  });
