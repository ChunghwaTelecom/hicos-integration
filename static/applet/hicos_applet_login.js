(function (angular) {
    'use strict';

    angular.module("HiCosAppletModule")
        .constant('hiCosLoginAppletAttributesDefault', {
            id: 'loginApplet',
            code: 'com.chttl.sac.pki.applet.HiCOSLoginApplet',
            width: 0,
            height: 0
        })
        .value('hiCosLoginAppletAttributes', {})
        .constant('hiCosLoginAppletParametersDefault', {
            jnlp_href: './certification/HiCOSLoginApplet.jnlp', // FIXME 不要用相對路徑，但是登入頁 cEnvironment 還沒好...
            separate_jvm: 'true',
            java_status_events: 'true',
            permissions: 'all-permissions'
        })
        .value('hiCosLoginAppletParameters', {})
        .factory('hiCosLoginApplet', ['$log', 'appletLoader', 'hiCosAppletWrapper',
            'hiCosLoginAppletAttributesDefault', 'hiCosLoginAppletAttributes', 'hiCosLoginAppletParametersDefault', 'hiCosLoginAppletParameters',
            hiCosLoginApplet]);

    function hiCosLoginApplet($log, appletLoader, hiCosAppletWrapper,
                              hiCosLoginAppletAttributesDefault, hiCosLoginAppletAttributes, hiCosLoginAppletParametersDefault, hiCosLoginAppletParameters) {

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
                makePemLoginSignedMessage: wrappedApplet.wrapFunction("makePemLoginSignedMessage", [1, 2]),
                verifySignature: wrappedApplet.wrapFunction("verifySignature", 1),
                getLoginInfoFromPemSignedData: wrappedApplet.wrapFunction("getLoginInfoFromPemSignedData", 1),
            };
        }

        var getInstance = function () {
            var attributes = angular.extend({}, hiCosLoginAppletAttributesDefault, hiCosLoginAppletAttributes);
            var parameters = angular.extend({}, hiCosLoginAppletParametersDefault, hiCosLoginAppletParameters);

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
