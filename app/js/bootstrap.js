define([
	'require',
	'angular',
	'app',
	'ui-router',
	'router',
	'filterService'
],function(require,ng) {
	'use strict';
	require(['domReady!'],function(document){
		ng.bootstrap(document,['app']);
	});
});	