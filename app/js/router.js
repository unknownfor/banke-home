define('router',[
    'app',
    'ui-router',
    'httpinterceptor',
    'commonService',
    'cookies',
    'filterService',
    'footer',

    'homeCtrl',
    'joinCtrl',
    'courseCtrl',
    'orgCtrl',
    'orgDetailCtrl',
    'newsCtrl',
    ],function (app) {

    app.run(function($rootScope, $state, $stateParams,$cookieStore,$location) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState,fromParams) {
            $rootScope.footerFlag=true;  //
            var name=toState.name,menuIndex=0;
            switch (name){
                case 'home':
                case '':
                    break;

                case 'org':
                case 'orgdetail':
                    menuIndex=1;
                    break;
                case 'join':
                    menuIndex=2;
                    break;
                default :
                    menuIndex=3;
                    break;
            }
            $rootScope.headerMenuSelectedIndex=menuIndex;
            //$rootScope.isHasBg=true;
            //$rootScope.showRegisterBtn=false; //隐藏注册按钮
            //$rootScope.globalUserInfo=JSON.parse(cookie);  //存储全局用户信息
        });
    });

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider

            .state('home',{
                    url:'/home',
                    views:{
                        '':{
                            templateUrl:'views/index.html'
                        },
                        'headerView@home':{
                            templateUrl:'views/include/header.html'
                        },
                        'mainView@home':{
                            templateUrl:'views/home.html'
                        },              
                    }
            })
            .state('join',{
                url:'/join',
                views:{
                    '':{
                        templateUrl:'views/index.html'
                    },
                    'headerView@join':{
                        templateUrl:'views/include/header.html'
                    },
                    'mainView@join':{
                        templateUrl:'views/join.html'
                    },
                }
            })
            .state('course',{
                url:'/course/{id:.*}',
                views:{
                    '':{
                        templateUrl:'views/index.html'
                    },
                    'headerView@course':{
                        templateUrl:'views/include/header.html'
                    },
                    'mainView@course':{
                        templateUrl:'views/org/course.html'
                    },
                }
            })
            .state('org',{
                url:'/org',
                views:{
                    '':{
                        templateUrl:'views/index.html'
                    },
                    'headerView@org':{
                        templateUrl:'views/include/header.html'
                    },
                    'mainView@org':{
                        templateUrl:'views/org/org.html'
                    },
                }
            })
            .state('orgdetail',{
                url:'/orgdetail/{id:.*}',
                views:{
                    '':{
                        templateUrl:'views/index.html'
                    },
                    'headerView@orgdetail':{
                        templateUrl:'views/include/header.html'
                    },
                    'mainView@orgdetail':{
                        templateUrl:'views/org/orgdetail.html'
                    },
                }
            })
            .state('news',{
                url:'/news/{id:.*}',
                views:{
                    '':{
                        templateUrl:'views/index.html'
                    },
                    'headerView@news':{
                        templateUrl:'views/include/header.html'
                    },
                    'mainView@news':{
                        templateUrl:'views/news.html'
                    },
                }
            })
            .state('partner',{
                url:'/partner',
                views:{
                    '':{
                        templateUrl:'views/index.html'
                    },
                    'headerView@join':{
                        templateUrl:'views/include/header.html'
                    },
                    'mainView@join':{
                        templateUrl:'views/partner.html'
                    },
                }
            });
    });

});
 

 