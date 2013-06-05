var config = {
  paths: {
    jquery: 'lib/jquery/jquery.min',
    text: 'lib/require/text',
    angular: 'lib/angular/angular.min',
    'angular-resource': 'lib/angular/angular-resource.min',
    'angular-mocks': '../../test/scripts/libs/angular-mocks'
  },
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
};

module.exports.config = config;