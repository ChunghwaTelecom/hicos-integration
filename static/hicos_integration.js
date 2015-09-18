(function (angular) {
    'use strict';

    angular.module('HiCosIntegrationModule', ['HiCosNativeMessagingModule', 'HiCosAppletModule']);

    angular.module('HiCosIntegrationModule')
        .factory('hiCosService', ['$injector', '$log', hiCosService]);

    function hiCosService($injector, $log) {

        function getLoginService() {
            return $injector.get("hiCosNativeMessaging").getInstance().catch(
                function (message) {
                    $log.warn("Failed to load HiCOS Chrome extension. Caused by: " + message);
                    $log.info("Try to load HiCOS Login Applet.")

                    // 載不到 native messaging 模組就馬上再試 applet 版
                    return $injector.get("hiCosLoginApplet").getInstance();
                });
        }

        function getPkiService() {
            return $injector.get("hiCosNativeMessaging").getInstance().catch(
                function (message) {
                    $log.warn("Failed to load HiCOS Chrome extension. Caused by: " + message);
                    $log.info("Try to load HiCOS PKI Applet.")

                    // 載不到 native messaging 模組就馬上再試 applet 版
                    return $injector.get("hiCosPkiApplet").getInstance();
                });
        }

        return {
            getLoginService: getLoginService,
            getPkiService: getPkiService
        };
    }

}(angular));
