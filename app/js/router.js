define('router',[
    'app',
    'ui-router',
    'httpinterceptor',
    'commonService',
    'cookies',

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
            if(getDeviceType().mobile){
                if(name.indexOf('m')!=0) {
                    $location.path('/mhome').replace();  //
                }
                return;
            }
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
                    'headerView@partner':{
                        templateUrl:'views/include/header.html'
                    },
                    'mainView@partner':{
                        templateUrl:'views/partner.html'
                    },
                }
            })

            //移动端
            .state('mhome',{
                url:'/mhome',
                views:{
                    '':{
                        templateUrl:'mobile/views/index.html'
                    },
                    'headerView@mhome':{
                        templateUrl:'mobile/views/include/header.html'
                    },
                    'mainView@mhome':{
                        templateUrl:'mobile/views/home.html'
                    },
                }
            })
            .state('mjoin',{
                url:'/mjoin',
                views:{
                    '':{
                        templateUrl:'mobile/views/index.html'
                    },
                    'headerView@mjoin':{
                        templateUrl:'mobile/views/include/header.html'
                    },
                    'mainView@mjoin':{
                        templateUrl:'mobile/views/join.html'
                    },
                }
            });
    });

    function getDeviceType(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return { //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }

});
 

 