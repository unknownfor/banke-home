/**
 * Created by jimmy on 2016/04/26.
 */

requirejs.config({
    baseUrl: 'js/',
    paths: {
        angular:'libs/angular.min',
        'ui-router':'libs/angular-ui-router.min',
        ngTouch:'libs/ngTouch.min',
        domReady: 'libs/domReady',
        fileUploader: 'libs/angular-file-upload.min',
        cookies: 'libs/angular-cookies.min',
        app:'app',
        router:'router',

        errortip:'directives/errortip',
        footer:'directives/footer',
        header:'directives/header',
        myUploadFile:'directives/myuploadfile',

        homeCtrl:'controllers/homectrl',
        joinCtrl:'controllers/joinctrl',
        partnerCtrl:'controllers/partnerctrl',

        courseCtrl:'controllers/coursectrl',
        orgCtrl:'controllers/orgctrl',
        orgDetailCtrl:'controllers/orgdetailctrl',
        newsCtrl:'controllers/newsctrl',

        commonService:'services/commonservice',
        httpinterceptor:'services/httpinterceptor',
        filterService:'services/filterservice',
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'ui-router':{
            deps:['angular'],
            output:'ui-router'
        },
        fileUploader:{
            deps:['angular'],
            output:'fileUploader'
        },
        cookies:{
            deps:['angular'],
            output:'cookies'
        },

        ngTouch:{
            deps:['angular'],
            output:'ngTouch'
        }
    },
    deps: ['js/bootstrap.js']
});
