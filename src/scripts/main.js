require({
  shim: {
    'controllers/coreController': {
      deps: ['app']
    },
    'directives/wfDatePicker': {
      deps: ['app']
    },
    'directives/wfDynamicField': {
      deps: ['app']
    },
    'directives/wfDynamicForm': {
      deps: ['app']
    },
    'libs/angular-resource': {
      deps: ['libs/angular']
    },
    'services/getData': {
      deps: ['app']
    },
    'services/getTemplate': {
      deps: ['app']
    },
    'app': {
      deps: ['libs/angular', 'libs/angular-resource']
    },
    'bootstrap': {
      deps: ['app']
    }
  }
}, ['require', 'controllers/coreController', 'directives/wfDatePicker', 'directives/wfDynamicField', 'directives/wfDynamicForm', 'services/getData', 'services/getTemplate'], function(require) {
  return angular.element(document).ready(function() {
    return require(['bootstrap']);
  });
});
