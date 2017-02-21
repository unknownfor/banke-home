 define([
 	 'angular',
 	 'ui-router',
	 'fileUploader',
	 'cookies'
 	],function (ng) {
 		'use strict';
		 //定义全局变量
		 window.globalObj={
			 restUrl:'http://www.91banke.com/bankehome/'
		 };
	 	 var app = ng.module('app',['ui.router','angularFileUpload','ngCookies']);

	 	return app;
 	});