/**
 * Created by jimmy on 16/11/24.
 */
define(['app'],function (app) {
    app.service('commonService',['$http','$rootScope','$timeout',function ($http,$rootScope,$timeout){
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
        this.ctrlGlobalLoadingStatus = function (flag){
            $rootScope.globalLoadingFlag=flag;
        };
        this.ctrlGlobalTipsStatus = function (flag,tips,ducration){
            $rootScope.globalTipsFlag=flag;
            if(!tips){
                tips='数据请求失败';
            }
            $rootScope.globalTipsWord=tips;
            if(!ducration){
                ducration=3000;
            }
            $timeout(function(){
                $rootScope.globalTipsFlag = false;
            },ducration);
        };


        /*
         *拓展Date方法。得到格式化的日期形式
         *date.format('yyyy-MM-dd')，date.format('yyyy/MM/dd'),date.format('yyyy.MM.dd')
         *date.format('dd.MM.yy'), date.format('yyyy.dd.MM'), date.format('yyyy-MM-dd HH:mm')   等等都可以
         *使用方法 如下：
         *                       var date = new Date();
         *                       var todayFormat = date.format('yyyy-MM-dd'); //结果为2015-2-3
         *Parameters:
         *format - {string} 目标格式 类似('yyyy-MM-dd')
         *Returns - {string} 格式化后的日期 2015-2-3
         *
         */
        (function(){
            Date.prototype.format = function (format) {
                var o = {
                    "M+": this.getMonth() + 1, //month
                    "d+": this.getDate(), //day
                    "h+": this.getHours(), //hour
                    "m+": this.getMinutes(), //minute
                    "s+": this.getSeconds(), //second
                    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
                    "S": this.getMilliseconds() //millisecond
                }
                if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
                    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o) if (new RegExp("(" + k + ")").test(format))
                    format = format.replace(RegExp.$1,
                        RegExp.$1.length == 1 ? o[k] :
                            ("00" + o[k]).substr(("" + o[k]).length));
                return format;
            };
        })()

        //从时间戳得到时间
        this.getDateFromTimestamp=function(val,formatStr){
            if(!formatStr){
                formatStr='yyyy-MM-dd';
            }
            return new Date(val*1000).format(formatStr);
        };


        return {
            getData: this.getData,
            ctrlGlobalLoadingStatus: this.ctrlGlobalLoadingStatus,
            ctrlGlobalTipsStatus:this.ctrlGlobalTipsStatus,
            getDateFromTimestamp:this.getDateFromTimestamp,
        };
    }]);
});