(function (angular) {
    'use strict';

    angular.module('HiCosIntegrationModule', ['HiCosNativeMessagingModule', 'HiCosAppletModule', 'ng.deviceDetector']);

    angular.module('HiCosIntegrationModule')
        .factory('hiCosService', ['$injector', 'deviceDetector', hiCosService]);

    function hiCosService($injector, deviceDetector) {

        var status;
        var version;
        var hiCosInstance;
        var isRunApplet = true;

        //抄 eps 的
        function isJavaAvailable() {
            var javaRegex = /(Java)(\(TM\)| Deployment)/,
                plugins = navigator.plugins;
            if (navigator && plugins) {
                for (var plugin in plugins) {
                    if (plugins.hasOwnProperty(plugin) &&
                        javaRegex.exec(plugins[plugin].name)) {
                        return true;
                    }
                }
            }
            return false;
        }

        if (deviceDetector.browser == "chrome") {
            var chromeVersion = window.navigator.userAgent.match(/Chrome\/(\d+)\./);
            if (chromeVersion && chromeVersion[1]) {
                if (parseInt(chromeVersion[1], 10) >= 42 && !isJavaAvailable()) {
                    isRunApplet = false;
                }
            }
        }

        if (isRunApplet) {
            hiCosInstance = $injector.get("hiCosApplet");
        } else {
            hiCosInstance = $injector.get("hiCosNativeMessaging");
        }

        return {
            getStatus: function () {
                console.log(status);
                return status;
            },
            getBrowser: deviceDetector.browser,
            getVersionInfo: hiCosInstance.getVersionInfo,
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
