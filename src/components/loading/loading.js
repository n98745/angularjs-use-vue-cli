require('./loading.scss');
var html = require('./loading.html');

export default () => {
    return {
        restrict: 'E',
        template : html,
        replace : true,
        scope: {
            text : '='
        },
        link: (scope) => {
            scope.loadingText = scope.text || "正在加载中...";
        }
    }
}
