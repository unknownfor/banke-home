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


        //隐藏注册框
        $scope.visible=true;
        $scope.closeBox=function(){
            $scope.visible=false;
        }

        //提交表单数据
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
