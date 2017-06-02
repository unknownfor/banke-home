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

        $scope.cities = [
            {name:'武汉',id:'1'},
            {name:'深圳',id:'2'},
            {name:'北京',id:'3'},
            {name:'上海',id:'4'},
            {name:'广州',id:'5'},
            {name:'杭州',id:'6'}
        ];


        $scope.submitForm=function(){
            //提交表单数据
            var allParas = {
                url: window.globalObj.restUrl + 'addorgapplyfor',
                type: 'post',
                param:$scope.formData,
                callback: function (result) {
                    result;
                    var $tips=result.data.msg;
                    alert($tips);
                    $scope.visible=false;
                }
            };
            cService.getData(allParas);
        }


    }]);
});
