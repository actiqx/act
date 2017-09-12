(function() {
  'use strict';

  angular
    .module('app')
    .constant('server', {
      host: 'http://task-management-dev.us-east-1.elasticbeanstalk.com/',
      dashboard:"api/categories",
      posttask:"api/posttask",
      LoginUserInfoURL: 'api/users/me',
      LoginURL:'auth/local',
      SignInURL:'api/users'

    })
  .constant('GCM',{
    senderID:'240046301411'
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

    
})();
