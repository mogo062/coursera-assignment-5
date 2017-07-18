(function () {
  'use strict';

  angular.module('public')
  .controller("SignUpController", SignUpController);

  SignUpController.$inject=['User','MenuService','UserService'];
  function SignUpController(User, MenuService, UserService) {
    var signupCtrl = this;
    signupCtrl.User = User;

    signupCtrl.saveUser = function(user){
        signupCtrl.User = user;
        if(user.menuNumber){
          MenuService.getMenuItem(user.menuNumber.toUpperCase()).then(function (response){
            signupCtrl.error="";
            signupCtrl.success="Your information has been saved";
            signupCtrl.User.menuItem=response;
            UserService.setUser(user);
          }, function (error){
             signupCtrl.error = 'item name specified "'+user.menuNumber+'" is not valid. No such menu number exists';
          });
        }else{
          signupCtrl.error = 'item name specified "'+user.menuNumber+'" is not valid. No such menu number exists';
        }
    };



  };

})();
