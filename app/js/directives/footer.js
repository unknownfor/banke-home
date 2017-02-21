/**
 * Created by jimmy on 16/9/11.
 */
define(['app'],function(app){
    app.directive('footer',['$http','$scope',function($http,$scope){
        return {
            templateUrl: '../app/views/include/footer.html',
            restrict: 'A',
            replace:true,
            link:function($scope,$element,$attrs){
                //var url={
                //    baseUrlApi:'http://www.91banke.com/bankehome/',
                //};
                //$http.get(url + 'reports')
                //    .success(function (res, status, headers, config) {
                //        if (res.status = 'success') {
                //            var footerNavs = res.data.length;
                //            $scope.footerNavs = footerNavs;
                //        }
                //    });
            }
        }
    }]);




});