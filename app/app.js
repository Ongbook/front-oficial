(function () {
	'use strict';
	angular.module('ongbook.controllers',[]);
	angular.module('ongbook.services',[]);
	angular.module('ongbook.directives',[]);
	angular.module('ongbook.interceptors',[]);
	angular.module('ongbook.component',[]);


	angular.module('ongbook',[
		'ui.router',
		'ngAnimate',
		'ngMessages',
		'toaster',
		'ngMap',
		'ui.bootstrap',
		'fullPage.js',
		'satellizer',
		'ongbook.controllers',
		'ongbook.services',
		'ongbook.directives',
		'ongbook.component',
		'ongbook.interceptors'
    ]);


})();
