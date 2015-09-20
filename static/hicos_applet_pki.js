(function (angular) {
    'use strict';

    angular.module("HiCosAppletModule")
        .factory('hiCosPkiApplet', ['$log', 'appletLoader', 'hiCosAppletWrapper', hiCosPkiApplet]);

    function hiCosPkiApplet($log, appletLoader, hiCosAppletWrapper) {

        function wrapApplet(applet) {

            var wrappedApplet = hiCosAppletWrapper.wrap(applet);

            return {
                getVersionInfo: wrappedApplet.wrapFunction("getVersionInfo", 0),
                decryptBase64PKCS1RawData: wrappedApplet.wrapFunction("decryptBase64PKCS1RawData", 3),
                decryptPemPKCS7EnvelopedData: wrappedApplet.wrapFunction("decryptPemPKCS7EnvelopedData", 3),
                // getAllSlots: wrappedApplet.wrapFunction("getAllSlots", 0),
                getJsonX509Certificate: wrappedApplet.wrapFunction("getJsonX509Certificate", 2),
                getPemX509Certificate: wrappedApplet.wrapFunction("getPemX509Certificate", [2, 3]),
                getSlotIdListWithToken: wrappedApplet.wrapFunction("getSlotIdListWithToken", 0),
                getSlotInfoWithToken: wrappedApplet.wrapFunction("getSlotInfoWithToken", 1),
                getTokenId: wrappedApplet.wrapFunction("getTokenId", 1),
                getTokenInfo: wrappedApplet.wrapFunction("getTokenInfo", 1),
                // getX509Certificate: wrappedApplet.wrapFunction("getX509Certificate", [2, 3]),
                makeBase64PKCS1RawData: wrappedApplet.wrapFunction("makeBase64PKCS1RawData", 3),
                makeBase64PKCS1Signature: wrappedApplet.wrapFunction("makeBase64PKCS1Signature", 3),
                makePKCS7EnvelopedData: wrappedApplet.wrapFunction("makePKCS7EnvelopedData", 3),
                makePemPKCS7Signature: wrappedApplet.wrapFunction("makePemPKCS7Signature", 3),
                verifyBase64PKCS1Signature: wrappedApplet.wrapFunction("verifyBase64PKCS1Signature", 4),
                verifyPemPKCS7Signature: wrappedApplet.wrapFunction("verifyPemPKCS7Signature", 1)
            };
        }

        var getInstance = function () {
            var attributes = {
                id: 'pkiApplet',
                code: 'com.chttl.sac.pki.applet.HiCOSPKIApplet',
                width: 0,
                height: 0
            };

            var parameters = {
                jnlp_href: './applet/HiCOSPKIApplet.jnlp',
                separate_jvm: 'true',
                java_status_events: 'true',
                permissions: 'all-permissions'
            };

            return appletLoader.load(attributes, parameters).then(
                function (applet) {
                    $log.debug("HiCOS PKI Java Applet loaded successfully.");
                    return wrapApplet(applet);
                }
            );
        };

        return {
            getInstance: getInstance
        };
    }

}(angular));
