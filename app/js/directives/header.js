/**
 * Created by hisihi on 2017/3/27.
 */
define(['app'],function(app) {
    app.controller('header', ['$scope', function ($scope) {
        $scope.visible=false;
        $scope.menus=[
            {url:'mhome',title:'首页'},
            {url:'morg',title:'精选机构'},
            {url:'mjoin',title:'机构入驻'},
            {url:'mpartner',title:'城市合伙人'}
            ];
        $scope.controlUlBox=function(){
            $scope.visible=!$scope.visible;
        }

    }]);


});