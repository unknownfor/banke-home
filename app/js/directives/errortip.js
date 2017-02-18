/*
* 错误提示指令 
*	
*/

define(['app'],function (app) {
	
	app.directive('errortip',function(){
		return {
			scope:{
				tipwords:'=mytips',
				status:'=mystatus'
			},
			restrict:'A',
			template:'<div class="common-error-tips" ng-hide="status"><div>{{tipwords}}<div></div>',
			replace:true
		}
	});

});