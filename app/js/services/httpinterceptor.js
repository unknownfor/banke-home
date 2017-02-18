/**
 * Created by jimmy-jiang on 2016/11/30.
 * http拦截器
 */
define(['app'],function(app) {

    app.factory('httpInterceptor', ['$q',function ($q) {
        return {
            request:function(config){
                return config;
            },
            requestError:function(err){
                return $q.reject(err);
            },
            responseError: function (err) {
                switch (err.status){
                    case 401:
                        return $q.reject(err);
                        break;
                    case 415:
                        console.log('录入时，请设置isSetUp 为false');
                        break;
                }
                return $q.reject(err);
            },
            response: function (response) {
                return response;
            }
        }
    }]);

    app.config(['$httpProvider',function($httpProvider){
        $httpProvider.interceptors.push('httpInterceptor');
    }]);
});
