/**
 * Created by jimmy on 16/11/24.
 */
define(['app'],function (app) {
    app.service('httpService',['$http',function ($http){

        this.getData = function (allParams){
            this.success = function (response) {
                allParams.callback({status:true, data:response.data});
            };
            this.error = function (response) {
                console.log('sorry，loading data failed');
                allParams.callback({status:false, data:response.data});
            };
            if(!allParams.type){
                allParams.type='get';
            }

            //录入数据的时候使用
            if(allParams.isSetUp===false) {
                $http({
                    method: allParams.type,
                    url: allParams.url,
                    data: allParams.param,
                    headers: { 'Content-Type': 'application/json;charset=UTF-8'}
                }).then(this.success, this.error);
            }

            //普通的数据请求
            else {
                $http({
                    method: allParams.type,
                    url: allParams.url,
                    data: allParams.param,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj) {
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        }
                        return str.join("&");
                    }
                }).then(this.success, this.error);
            }
        };
        return {
            getData: this.getData
        };
    }]);

    app.service('globalService',['$rootScope',function ($rootScope){

        this.setLoadingStatus = function (flag){
            $rootScope.globalLoadingFlag=flag;
        };
        return {
            setLoadingStatus: this.setLoadingStatus
        };
    }]);

});