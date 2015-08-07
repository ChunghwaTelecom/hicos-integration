(function (angular) {
    'use strict';

    var hiCosIntegratoinModule = angular.module('HiCosIntegratoinModule', ['HiCosNativeMessagingModule', 'HiCosAppletModule', 'ng.deviceDetector']);
		
	angular.module('HiCosIntegratoinModule')
        .factory('hiCosService', ['$injector', 'deviceDetector', hiCosService]);

	function hiCosService($injector, deviceDetector) {	
		
		var status = "abc";
		var version;
		var hiCosInstance;
		
		// FIXME : 需增加環境的判斷
		if (deviceDetector.browser == "chrome") {
			
			hiCosInstance = $injector.get("hiCosNativeMessaging");
		} else {
			
			hiCosInstance = $injector.get("hiCosApplet");
		}
		
		return {
			getStatus: function () { 
							console.log(status);
							return status; 
						},
			getBrowser: deviceDetector.browser,
			getVersionInfo:  hiCosInstance.getVersionInfo,
			getSlotIdListWithToken: hiCosInstance.getSlotIdListWithToken
		};
	};

}(angular));