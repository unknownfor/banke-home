/**
 * Created by hisihi on 2017/3/20.
 */
define([
    'app'
], function(app) {
    app.controller('partnerCtrl', ['$scope','commonService',function($scope,cService) {
        var allParas = {
            url: window.globalObj.restUrl + 'orgs',
            type: 'get',
            callback: function (result) {
                var data=result.data.message.data,
                    len=data.length;
                for(var i=0;i<len;i++){
                    var url=data[i].cover.replace(/,.*/,'');
                    data[i].topCover=url;
                    data[i].details=data[i].details.replace(/<(\S*?)[^>]*>.*?|<.*? \/>$/g,'').replace(/&nbsp;/g,'');

                }
                $scope.orgArr = data;
            }
        };
        cService.getData(allParas);



        //注册框
        $scope.visible=false;
        $scope.controlJoinBox=function(flag){
            $scope.visible=flag;
        }

    }]);
});