(function () {
  'use strict';

  angular.module("common")
  .service("UserService", UserService);


  function UserService() {
    var service = this;
    var User = {};
    service.setUser = function(User){
      if(User){
        service.User = User;
      }
      return service.User;
    };
    service.getUser = function(){
        return service.User;
    };

  };
})();
