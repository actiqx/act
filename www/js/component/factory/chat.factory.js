(function(){
    'use strict';

    angular
        .module('app.factory')
        .factory('chatFactory', chatFactory)

    chatFactory.$inject = ['socketFactory'];

    function chatFactory(socketFactory) {
        var myIoSocket = io.connect('http://localhost:5080/');
      var  mySocket = socketFactory({
    	ioSocket: myIoSocket
  	});
  	
	return mySocket;
    }
})();