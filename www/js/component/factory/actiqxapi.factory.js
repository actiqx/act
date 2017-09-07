/* Defines the "ActiqxApiFactory"  
 */

 (function(){
    'use strict';

    angular
        .module('app.factory')
        .factory('ActiqxApiFactory', ActiqxApiFactory);

    ActiqxApiFactory.$inject = ['$http','$q', 'sessionService', 'ACTIQXAPP', 'server'];
        
    function ActiqxApiFactory ($http, $q, sessionService, ACTIQXAPP, server) {

        ////////////////////////////////////////////////////
        //////////Post Service Call////////////////////
        ///////////////////////////////////////////////////
        var PostApiCall = function (apiUrl,requestData) {

            var deferred = $q.defer();

            var apiCallbackFn = function (encryptData) {

                var authenticationToken = encryptData[0].CipherText;
                var url = ACTIQXAPP.ServiceUrl + apiUrl; 
                var requestHeader = GetRequestAuthenticationHeader(authenticationToken);
                $http.post(url, requestData).success(function (data, status) {                
                    if (IsStatusOK(data)) {
                        deferred.resolve(GetResponseData(data));
                    }
                    else {
                        deferred.reject(data);
                    }
                }).error(function (data, status) {
                    deferred.reject(data);
                });
            };

            CallWebServiceWithAuthHeader(apiCallbackFn, sessionService.UserID);

            return deferred.promise;
        };   

        ////////////////////////////////////////////////////
        //////////Get Service Call////////////////////
        ///////////////////////////////////////////////////
        var GetApiCall = function (apiUrl) {

            var deferred = $q.defer();

            var apiCallbackFn = function (encryptData) {

                var authenticationToken = encryptData[0].CipherText;
                var url = ACTIQXAPP.ServiceUrl + apiUrl; 
                var requestHeader = GetRequestAuthenticationHeader(authenticationToken);
                $http.post(url, requestData).success(function (data, status) {                
                    if (IsStatusOK(data)) {
                        deferred.resolve(GetResponseData(data));
                    }
                    else {
                        deferred.reject(data);
                    }
                }).error(function (data, status) {
                    deferred.reject(data);
                });
            };

            CallWebServiceWithAuthHeader(apiCallbackFn, SessionService.UserID);

            return deferred.promise;
        };   

        var doLoginCall = function(_url, _requestData){
            return PostApiCall(_url, _requestData);
        }
         var doSignInCall = function(_url, _requestData){
            return PostApiCall(_url, _requestData);
        }
        var getUserInfoCall = function(_url){
            return GetApiCall(_url);
        }
        //Exposed Service Calls
        return {        
            doLogin: doLoginCall,
            doSignIn: doSignInCall,
            getUserInfo: getUserInfoCall

        };
    }

function GetRequestAuthenticationHeader(authenticationToken) {
    //var requestHeader = { headers: { 'AuthenticationToken': authenticationToken, } };
    var requestHeader = { headers: { 'Content-Type': 'application/json' } };
    return requestHeader;
}

function CallWebServiceWithAuthHeader(callbackFn, UserID) {

    if (UserID == undefined) UserID = '';

     callbackFn([{ CipherText:  UserID + '|' + Date.now() }]);
};

/*function GetRequestData(callbackModule, callbackAction, arguments, SessionService) {

    var UserID = 0;
    var CMSUserID = 0;
    var CMSSiteCode = '';
    var LoggedInSiteID = '';
    var LoggedInRoleID = 0;

    if (SessionService) {
        UserID = SessionService.UserID || 0;
        CMSUserID = SessionService.CMSUserID || 0;
        if (SessionService.Site) {
            CMSSiteCode = SessionService.Site.CMSSiteCode || '';
            LoggedInSiteID = SessionService.Site.SiteID;
        }
        if (SessionService.Role) {
            LoggedInRoleID = SessionService.Role.RoleID;
        }
    }

    if (requestData) {
        //requestData.SiteCode = 
        //requestData.SiteID { get; set; }
        //requestData.DeviceName { get; set; }
        requestData.DeviceIdentifier = __DEV_DEVICE_ID;
        //requestData.LocationCode { get; set; }
        requestData.UserID = UserID;
        requestData.RoleID = LoggedInRoleID;
        requestData.SiteID = LoggedInSiteID;
        requestData.CMSUserID = CMSUserID;
        requestData.CMSSiteCode = CMSSiteCode;
    }


    var requestData = {};
    requestData.CallbackModule = callbackModule;
    requestData.CallbackAction = callbackAction;
    requestData.CallbackArguments = arguments;

    return JSON.stringify(requestData);
}*/

function IsStatusOK(data) {
    if (data) {
        return true;
    }

    return false;
}

function GetResponseData(data) {    
    return data;
   
    
}

 }());