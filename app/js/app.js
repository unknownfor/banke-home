 define([
 	 'angular',
 	 'ui-router',
	 'fileUploader',
	 'cookies'
 	],function (ng) {
 		'use strict';
		 //定义全局变量
		 window.globalObj={
			 restUrl:'http://101.200.236.82:8080/KunMing/rest/'
		 };
	 	 var app = ng.module('app',['ui.router','angularFileUpload','ngCookies']);

	 	return app;
 	});