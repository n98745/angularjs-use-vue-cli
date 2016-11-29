export default ['$urlRouterProvider',  '$locationProvider', '$stateProvider', '$logProvider',
    ($urlRouterProvider, $locationProvider, $stateProvider, $logProvider) => {
        // 日志打印
        $logProvider.debugEnabled(!(process.env.NODE_ENV === 'production'));
        // 不使用HTML5Mode模式
        $locationProvider.html5Mode(false);
        // 默认路径
        $urlRouterProvider.otherwise('/login');//默认页面

        // 路由配置:
        $stateProvider
        //agency待办模块
            .state('login', {//待办列表
                url: '/login',
                template:   require('./pages/login/login.html'),
                controller :require('./pages/login/login')
            })
            .state('main', {//待办列表
               url: '/main',
               template:   require('./pages/main/main.html'),
               controller :require('./pages/main/main')
            })
}]
