(function (angular) {
    'use strict';

    angular.module("HiCosAppletModule")
        .constant('hiCosPkiAppletAttributesDefault', {
            id: 'pkiApplet',
            code: 'com.chttl.sac.pki.applet.HiCOSPKIApplet',
            width: 0,
            height: 0
        })
        .value('hiCosPkiAppletAttributes', {})
        .constant('hiCosPkiAppletParametersDefault', {
            jnlp_href: '@{/certification/HiCOSPKIApplet.jnlp}',
            separate_jvm: 'true',
            java_status_events: 'true',
            permissions: 'all-permissions'
        })
        .value('hiCosPkiAppletParameters', {})
        .factory('hiCosPkiApplet', ['$log', 'appletLoader', 'hiCosAppletWrapper',
            'hiCosPkiAppletAttributesDefault', 'hiCosPkiAppletAttributes', 'hiCosPkiAppletParametersDefault', 'hiCosPkiAppletParameters',
            hiCosPkiApplet]);

    function hiCosPkiApplet($log, appletLoader, hiCosAppletWrapper,
                            hiCosPkiAppletAttributesDefault, hiCosPkiAppletAttributes, hiCosPkiAppletParametersDefault, hiCosPkiAppletParameters) {

        function wrapApplet(applet) {

            var wrappedApplet = hiCosAppletWrapper.wrap(applet);

            var getJsonX509Certificate = wrappedApplet.wrapFunction("getJsonX509Certificate", 2);

            var getJsonSignatureCertificate = function (pin) {
                return getJsonX509Certificate(pin, 1);
            };

            var getJsonEncryptedCertificate = function (pin) {
                return getJsonX509Certificate(pin, 2);
            };

            var getSlotIdListWithTokenNative = wrappedApplet.wrapFunction("getSlotIdListWithToken", 0);
            var getSlotIdListWithToken = function () {
                return getSlotIdListWithTokenNative().then(function (result) {
                    result.value = JSON.parse(result.value);
                    return result;
                });
            };
            
            return {
                getVersionInfo: wrappedApplet.wrapFunction("getVersionInfo", 0),
                decryptBase64PKCS1RawData: wrappedApplet.wrapFunction("decryptBase64PKCS1RawData", 3),
                decryptPemPKCS7EnvelopedData: wrappedApplet.wrapFunction("decryptPemPKCS7EnvelopedData", 3),
                // getAllSlots: wrappedApplet.wrapFunction("getAllSlots", 0),
                getJsonX509Certificate: getJsonX509Certificate,
                getJsonSignatureCertificate: getJsonSignatureCertificate,
                getJsonEncryptedCertificate: getJsonEncryptedCertificate,
                getPemX509Certificate: wrappedApplet.wrapFunction("getPemX509Certificate", [2, 3]),
                getSlotIdListWithToken: getSlotIdListWithToken,
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
            var attributes = angular.extend({}, hiCosPkiAppletAttributesDefault, hiCosPkiAppletAttributes);
            var parameters = angular.extend({}, hiCosPkiAppletParametersDefault, hiCosPkiAppletParameters);

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
