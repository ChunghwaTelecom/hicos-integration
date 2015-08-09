(function (angular) {
    'use strict';

    var hiCosIntegratoinModule = angular.module('HiCosIntegratoinModule', ['HiCosNativeMessagingModule', 'HiCosAppletModule', 'ng.deviceDetector']);
		
	angular.module('HiCosIntegratoinModule')
        .factory('hiCosService', ['$injector', 'deviceDetector', hiCosService]);

	function hiCosService($injector, deviceDetector) {	
		
		var status;
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
			getSlotIdListWithToken: hiCosInstance.getSlotIdListWithToken,
            getSlotInfoWithToken: hiCosInstance.getSlotInfoWithToken,
            getTokenInfo: hiCosInstance.getTokenInfo,
            getPemX509Certificate: hiCosInstance.getPemX509Certificate,
            getJsonX509Certificate: hiCosInstance.getJsonX509Certificate,
            checkLoginValid: hiCosInstance.checkLoginValid,
            makePemLoginSignedMessage: hiCosInstance.makePemLoginSignedMessage,
            verifySignature: hiCosInstance.verifySignature,
            getLoginInfoFromPemSignedData: hiCosInstance.getLoginInfoFromPemSignedData
		};
	};

}(angular));