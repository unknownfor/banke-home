define([
	'require',
	'angular',
	'app',
	'ui-router',
	'router'
],function(require,ng) {
	'use strict';
	require(['domReady!'],function(document){
		ng.bootstrap(document,['app']);
	});
});	