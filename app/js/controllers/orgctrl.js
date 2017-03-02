/*
 *机构列表功能
 */
define([
    'app'
], function(app) {
    app.controller('orgCtrl', ['$scope','commonService',function($scope,commonService) {
        var allParas = {
            url: window.globalObj.restUrl + 'orgs',
            type: 'get',
            callback: function (result) {
                $scope.orgUl = result.data.message.data;
            }
        };
        commonService.getData(allParas);
    }]);
});
