 define([
 	 'angular',
 	 'ui-router',
	 'fileUploader',
	 'cookies',
	 'ngTouch',
 	],function (ng) {
 		'use strict';
		 //定义全局变量
		 window.globalObj={
			 restUrl:'http://test.cms.91banke.com/bankehome/'
		 };
	 	 var app = ng.module('app',['ui.router','angularFileUpload','ngCookies','ngTouch']);


	 	return app;
 	});