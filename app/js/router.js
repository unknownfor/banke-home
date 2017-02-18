define('router',[
    'app',
    'ui-router',
    'httpinterceptor',
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
            $rootScope.showRegisterBtn = true; //显示注册按钮
            $rootScope.isHasBg=false;  //不使用灰色背景
            $rootScope.footerFlag=true;  //不使用灰色背景
            var name=toState.name;
            //if (name == 'login' || name == 'register') {
            //    return;
            //}
            //var cookie=$cookieStore.get("kunmingPower");
            //if(!cookie){
            //    event.preventDefault(); //取消默认跳转行为
            //    $state.go('login',{from:fromState.name,w:'notLogin'}); //跳转到登录界面
            //    return;
            //}
            //switch (name){
            //    case 'desktop':
            //    case 'desktop.my':
            //        $rootScope.desktopMenuSelectedIndex=0;
            //        break;
            //    case 'desktop.achieves':
            //        $rootScope.desktopMenuSelectedIndex=1;
            //        break;
            //    case 'desktop.template':
            //        $rootScope.desktopMenuSelectedIndex=2;
            //        break;
            //    case 'newuser':
            //        $rootScope.subTopBannerTitle='新用户';
            //        if(JSON.parse(cookie).type!=0){
            //            $location.path('/forbidden').replace();  //上一条浏览记录被替换而不是创建一个新的历史记录,
            //            return;
            //        }
            //        break;
            //    case 'account':
            //        $rootScope.subTopBannerTitle='账户设置';
            //        break;
            //    case 'docdetail':
            //        $rootScope.footerFlag=false;
            //        break;
            //    default :
            //        break;
            //}
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
            });
    });

});
 

 