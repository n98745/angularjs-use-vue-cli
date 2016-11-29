module.exports =  ['$scope', 'mainService', 'Const',
    ($scope, mainService, Const) => {
        let _self = $scope;
        _self.laText = "测试哈!";
        Const.constTest();
        mainService.getWeatherInfo().then((response)=> {
            if (response) {
                _self.weatherinfo = response;
            }
        });
    }
]
