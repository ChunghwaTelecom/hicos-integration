(function (angular) {
    'use strict';

    angular.module("HiCosAppletModule")
        .factory('hiCosLoginApplet', ['$log', 'appletLoader', 'hiCosAppletWrapper', hiCosLoginApplet]);

    function hiCosLoginApplet($log, appletLoader, hiCosAppletWrapper) {

        function wrapApplet(applet) {

            var wrappedApplet = hiCosAppletWrapper.wrap(applet);

            return {
                getVersionInfo: wrappedApplet.wrapFunction("getVersionInfo", 0),
                getSlotIdListWithToken: wrappedApplet.wrapFunction("getSlotIdListWithToken", 0),
                getSlotInfoWithToken: wrappedApplet.wrapFunction("getSlotInfoWithToken", 1),
                getTokenInfo: wrappedApplet.wrapFunction("getTokenInfo", 1),
                getPemX509Certificate: wrappedApplet.wrapFunction("getPemX509Certificate", [2, 3]),
                getJsonX509Certificate: wrappedApplet.wrapFunction("getJsonX509Certificate", [1, 2]),
                checkLoginValid: wrappedApplet.wrapFunction("checkLoginValid", 2),
                makePemLoginSignedMessage: wrappedApplet.wrapFunction("makePemLoginSignedMessage", 2),
                verifySignature: wrappedApplet.wrapFunction("verifySignature", 1),
                getLoginInfoFromPemSignedData: wrappedApplet.wrapFunction("getLoginInfoFromPemSignedData", 1),
            };
        }

        var getInstance = function () {
            var attributes = {
                id: 'loginApplet',
                code: 'com.chttl.sac.pki.applet.HiCOSLoginApplet',
                width: 0,
                height: 0
            };

            var parameters = {
                jnlp_href: './certification/HiCOSLoginApplet.jnlp', // FIXME 不要用相對路徑
                separate_jvm: 'true',
                java_status_events: 'true',
                permissions: 'all-permissions'
            };

            return appletLoader.load(attributes, parameters).then(
                function (applet) {
                    $log.debug("HiCOS Login Java Applet loaded successfully.");
                    return wrapApplet(applet);
                }
            );
        };

        return {
            getInstance: getInstance
        };
    }

}(angular));
