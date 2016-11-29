/**
 * Created by LinYaoyao on 16/11/29.
 */
export default ['$http', '$state', '$log', 'Env', function ($http, $state, $log, Env) {
    this.request = function(reqMap) {
        var _config = {
            data    : "",
            api     : "",
            type    : ""
        };
        angular.extend(_config, reqMap);
        //POST
        var reqData = {
            url     : Env.url + _config.api,
            method  : _config.type,
            timeout : 60000,
            headers : {
                'Content-Type': 'application/json;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            }
        };

        if (_config.type.toLowerCase() == "post") {
            reqData.data = _config.data;
        } else {
            reqData.params = _config.data;
        }

        $log.debug(".............接口请求..............");
        $log.debug("url :", reqData.url);
        $log.debug("data:", _config.data);
        $log.debug("type:", _config.type);

        return $http(reqData)
            .then (function (success) {
                $log.debug("*************SUCCESS START**********************");
                $log.debug( angular.toJson(success, true));
                $log.debug("*************SUCCESS END**********************");
                return success;
            }, function (error) {
                $log.debug("*************ERROR START**********************");
                $log.debug( angular.toJson(error, true));
                $log.debug("*************ERROR END**********************");
                return error;
            });
    };
}];
