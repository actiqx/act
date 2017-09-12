(function () {
    'use strict';

    angular
        .module('app.service')
        .service('sharedService', sharedService)

    sharedService.$inject = ['$resource', '$q', 'commonUtil', 'server', 'logger'];

    function sharedService($resource, $q, commonUtil, server, logger) {
        var base = `${server.host}`;

        var res = $resource(base + ':url', null,
            {
                'query': { method: 'GET', isArray: true },
                'get': { method: 'GET' },
                'update': { method: 'PUT' },
                'save': { method: 'Post' },
                'delete': { method: 'DELETE' },
                'patch': { method: 'PATCH' }
            }
        );

        return {
            getListData: function (methodUrl, args) {
                var formattedUrl = commonUtil.stringFormat(methodUrl, args);
                var deferred = $q.defer();
                return res.query({
                    url: decodeURIComponent(formattedUrl)
                }).$promise
                    .then(function (data) {
                        return deferred.resolve(data);
                    })
                    .catch(function (reason) {
                        logger.error(reason);
                    });
            },
            getData: function (methodUrl, args, header) {

                var formattedUrl = commonUtil.stringFormat(methodUrl, args);
                var deferred = $q.defer();
                return res.get({ url: decodeURIComponent(formattedUrl) }).$promise
                    .then(function (data) {
                        console.log(data);
                        return deferred.resolve(data);
                    })
                    .catch(function (reason) {
                        logger.error(reason);
                    });
            },
            updateData: function (methodUrl, args, dto, msg) {

                var formattedUrl = commonUtil.stringFormat(methodUrl, args);
                var deferred = $q.defer();
                return res.update({ url: formattedUrl }, dto).$promise
                    .then(function (data) {
                        return deferred.resolve(data);
                    })
                    .catch(function (reason) {
                        logger.error(reason);
                    });
            },
            deleteData: function (methodUrl, args, header, dto, msg) {

                var formattedUrl = commonUtil.stringFormat(methodUrl, args);
                var deferred = $q.defer();
                return res.delete({ url: formattedUrl, headers: header }, dto)
                    .$promise
                    .then(function (data) {
                        logger.success(msg, 'success');
                        return deferred.resolve(data[0]);
                    })
                    .catch(function (reason) {
                        logger.error(reason);
                    });
            },
            addData: function (methodUrl, args, header, dto, msg) {

                var formattedUrl = commonUtil.stringFormat(methodUrl, args);
                var deferred = $q.defer();

                return res.save({ url: formattedUrl, headers: header }, dto).$promise
                    .then(function (data) {
                        if (msg.length > 5) {
                            logger.success(msg, 'success');
                        };
                        return deferred.resolve(data);
                    })
                    .catch(function (reason) {
                        logger.error(reason);
                    });
            },
            patchData: function (methodUrl, args, header, dto, msg) {

                var formattedUrl = commonUtil.stringFormat(methodUrl, args);
                var deferred = $q.defer();

                return res.patch({ url: formattedUrl, headers: header }, dto).$promise
                    .then(function (data) {
                        if (msg.length > 5) {
                            logger.success(msg, 'success');
                        };
                        return deferred.resolve(data);
                    })
                    .catch(function (reason) {
                        logger.error(reason);
                    });
            }

        }


    }
})();