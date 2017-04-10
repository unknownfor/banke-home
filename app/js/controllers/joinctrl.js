/*
 *入驻功能
 */
define([
    'app'
], function(app) {
    app.controller('joinCtrl', ['$scope','commonService',function($scope,cService) {
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


        //提交表单数据
        $scope.formData={
            // name:'23333',
            // city:'455555',
            // contact:'67777',
            // address:'890',
            // tel_phone:'18140662282',
            // introduce:'12345'
        }
        $scope.submitForm=function(){
            var allParas = {
                url: window.globalObj.restUrl + 'addorgapplyfor',
                // url: 'http://b.cn/bankehome/addorgapplyfor',
                type: 'post',
                data:$scope.formData,
                callback: function (result) {
                    result;
                }
            };
            cService.getData(allParas);
        }


    }]);
});
