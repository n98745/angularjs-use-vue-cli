import app from './app.js'
import config from './config'

import common from './components/app.component' //加载公共组件
import filters from './service/filters'
import HttpService from './service/HttpService'

import Const from './service/Const'
// 样式
require("./assets/css/base.scss");
require("./assets/css/reset.scss");

// 业务层service注册
import services from './pages/app.service'

// config
app.config (config)
// component
Object.keys(common).forEach((key) => {
    app.directive(key, common[key])
})

// env
app.constant('Env', process.env.NODE_ENV === 'production'?
    require('./env/prod.json') : require('./env/dev.json'));

// filter
Object.keys(filters).forEach(function(k) {
    app.filter(k, filters[k]);
})

// 业务层的service
Object.keys(services).forEach(function (k) {
    app.service(k, services[k]);
})

// http const
app.service("HttpService", HttpService);
app.service("Const", Const);
