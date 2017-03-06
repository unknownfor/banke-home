/**
 * Created by jimmy on 16/9/11.
 */
define(['app'],function(app){
    app.directive('footer',['commonService',function(commonService){
        return {
            templateUrl: 'views/include/footer.html',
            restrict: 'A',
            replace:true,
            link:function($scope,$element,$attrs){
                $scope.year=new Date();
                var allParas = {
                    url: window.globalObj.restUrl + 'reports',
                    type: 'get',
                    callback: function (result) {
                        $scope.footerNavs = result.data.message.data;
                    }
                };
                commonService.getData(allParas);
            }
        }


    }]);
});