(function () {
  'user strict';

  angular.module("public")
  .controller("MyInfoController",MyInfoController);

  MyInfoController.$inject=['User'];
  function MyInfoController(User) {
    var myinfoCtrl = this;
    myinfoCtrl.User=User;
  };
})();
