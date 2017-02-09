angular.module("YodaApp")

.service("YodaService", ["$http", function($http) {
     this.yodify = function (phrase) {

            var config = {
                headers: {
                    'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
                }
            };           
          return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + phrase, config)
          
        }   
}])