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

        //点击弹出注册框
        $scope.visible=false;
        $scope.contrlJoinInBox=function(flag){
            $scope.visible=flag;
        }

        //提交表单数据
        $scope.formData={
            name:'测试机构',
            city:'武汉',
            contact:'李先生',
            address:'武汉某个街道',
            introduce:'吧啦吧啦吧啦吧啦',
            tel_phone:'18140662282'
        }
        $scope.submitForm=function(){
            var allParas = {
                //url: window.globalObj.restUrl + 'addorgapplyfor',
                url: 'http://b.cn/bankehome/addorgapplyfor',
                type: 'post',
                data:$scope.formData,
                callback: function (result) {
                    result;
                }
            };
            cService.getData(allParas);
        }
        // $scope.user={city:'',name:'',contact:'',phone:'',address:'',instruction:''};
        // $scope.submit=function () {
        //    app.submit($scope.user).then(function (data) {
        //            $http({
        //                method  : 'POST',
        //                url     : 'XX',
        //                // data    ://
        //            })
        //                .success(function(data) {
        //                    console.log(data);
        //                    if (!data.success) {
        //
        //                    } else {
        //
        //                    }
        //                });
        //    });
        // };
    }]);
});
