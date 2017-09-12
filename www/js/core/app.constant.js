(function() {
  'use strict';

  angular
    .module('app')
    .constant('server', {
      //host: 'http://test1234.us-east-1.elasticbeanstalk.com',
      host:'http://localhost:5080',  
      dashboard:"/api/categories",
      posttask:"/api/posttask",
      LoginUserInfoURL: '/api/users/me',
      LoginURL:'/auth/local',
      SignInURL:'/api/users'

    })
  .constant('ACTIQXAPP', {
      //ServiceUrl: 'http://test1234.us-east-1.elasticbeanstalk.com' 
      ServiceUrl:'http://localhost:5080'   
  })
    .constant('langMessage',{
      EnterFirstName:"Enter First Name",
      EnterLastName:"Enter Last Name",
      EnterMobileNo:"Enter Mobile No",
      EnterEmailId:"Enter Email Id",
      EnterAddress:"Enter Address",
      EnterPassword:"Enter Password",
      EnterConfirmPassword:"Enter Confirm Password",
      PasswordMismatch:"Password Mismatch",
      UserAlreadyExist:"User Already Exist",
      EnterStartTime:"Enter Start Time",
      EnterEndTime:"Enter End Time",
      SignInSuccessfully:"SignIn Successfully",
      EnterOldPassword:"Enter Old Password",
      EnterNewPassword:"Enter New Password",
      ReEnterNewPassword:"Re-enter New Password",
      PasswordChangedSuccessfully:"Password Changed Successfully"
    })

    .constant('ACTIQX_SERVICE_URI', {
        LoginUserInfoURL: '/api/users/me',
        LoginURL:'/auth/local',
        SignInURL:'/api/users'

    });
})();
