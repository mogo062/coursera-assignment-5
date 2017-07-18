(function () {
  'use strict';
  angular.module('public')
  .component('userForm',{
    templateUrl: 'src/public/user-form/user-form.html',
    bindings:{
      user : '<',
      error:'<',
      onClick :'&'
    },
    controller : UserFormController
  });
  function UserFormController() {
    var $ctrl = this;

    $ctrl.save=function(User){
      $ctrl.onClick({user : User});
    };
  }
})();
