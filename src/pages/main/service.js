/*@ngInject*/
export default ['HttpService', function (HttpService) {
    this.getWeatherInfo = () => {
        return HttpService.request ({
            data    : "",
            api     : "/data/cityinfo/101010100.html",
            type    : "get"
        }).then ((result) => {
            if (result && result.data) {
                return result.data.weatherinfo;
            }
        }) ;
    };
}];
