/*
 *入驻功能
 */
define([
    'app'
], function(app) {
    app.controller('joinCtrl', ['$scope','commonService',function($scope,cService) {
        // var token;
        // var getTokenParam = {
        //     url:window.globalObj.restUrl+'token',
        //     type:'get',
        //     callback: function(result){
        //         token=result;
        //     }
        // }
        // cService.getData(getTokenParam);


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

        $scope.submitForm=function(){
            //提交表单数据
            var allParas = {
                url: window.globalObj.restUrl + 'addorgapplyfor',
                type: 'post',
                // _token:token.data,
                param:$scope.formData,
                callback: function (result) {
                    result;
                    alert('申请提交成功，请耐心等待客服审核');
                    $scope.visible=false;
                }
            };
            cService.getData(allParas);
        }


    }]);
});
