(function (angular) {
    'use strict';

    angular.module("HiCosAppletModule", ["HiCosMessagesModule"]);

    angular.module("HiCosAppletModule")
        .factory('hiCosApplet', ['$q', '$log', 'hiCosMessagesService', hiCosApplet]);

    function hiCosApplet($q, $log, hiCosMessagesService) {

        var applet;

        if (typeof document.loginApplet == 'undefined') {

            var attributes = {
                id: 'loginApplet',
                code: 'com.chttl.sac.pki.applet.HiCOSLoginApplet',
                width: 0,
                height: 0
            };

            var parameters = {
                jnlp_href: './applet/HiCOSLoginApplet.jnlp', // FIXME 不要用相對路徑
                separate_jvm: 'true',
                java_status_events: 'true',
                permissions: 'all-permissions'
                // bgcolor: 'red'
            };

            $(document.body).append("<div id='loginAppletDiv'></div>");
            // - 0807 : 需用舊版的 delployJava.js，新版不提供 getApplet 方法
            var appletElement = deployJava.getApplet(attributes, parameters, '1.7');
            $("#loginAppletDiv").html(appletElement);
        }

        applet = document.loginApplet;

        function appletFunctionInvoker(functionName, numberOfArguments) {
            if (!numberOfArguments && numberOfArguments >= 3) {
                throw "No more than 3 arguments is allowed in function registration.";
            }

            if (applet[functionName]) {
                return function () {
                    var args = Array.prototype.slice.call(arguments, 0);

                    var deferred = $q.defer();

                    var result;
                    var exceptionMessage;
                    try {
                        if (functionName === "getPemX509Certificate") {
                            if (args.length <= 2) {
                                result = applet[functionName](args[0], args[1]);
                            } else {
                                result = applet[functionName](args[0], args[1], args[2]);
                            }

                        } else {
                            switch (numberOfArguments) {
                                case 0:
                                    result = applet[functionName]();
                                    break;
                                case 1:
                                    result = applet[functionName](args[0]);
                                    break;
                                case 2:
                                    result = applet[functionName](args[0], args[1]);
                                    break;
                                default:
                                    result = applet[functionName](args[0], args[1], args[2]);
                            }
                        }

                    } catch (exception) {
                        $log.error(exception);
                        exceptionMessage = exception.message;
                    }

                    if (!exceptionMessage) {
                        var code = applet.getHandleCode();
                        var message = applet.getHandleMessage();

                        if (hiCosMessagesService.getMessage(code) != "unknown") message = hiCosMessagesService.getMessage(code);

                        var returnValue = {
                            code: code,
                            message: message,
                            value: result
                        };

                        if (code === "0x00000000" || functionName === "getVersionInfo") {
                            deferred.resolve(returnValue);
                        } else {
                            deferred.reject(returnValue);
                        }

                    } else {
                        deferred.reject({
                            message: exceptionMessage
                        });
                    }

                    return deferred.promise;
                };

            } else {
                $log.error("\"" + functionName + "\" is undefined in loginApplet.");
                return function () {
                    return $q.reject("\"" + functionName + "\" is undefined in loginApplet.");
                }
            }
        }

        return {
            getVersionInfo: appletFunctionInvoker("getVersionInfo", 0),
            getSlotIdListWithToken: appletFunctionInvoker("getSlotIdListWithToken", 0),
            getSlotInfoWithToken: appletFunctionInvoker("getSlotInfoWithToken", 1),
            getTokenInfo: appletFunctionInvoker("getTokenInfo", 1),
            //getTokenId: appletFunctionInvoker("getTokenId", 1),
            getPemX509Certificate: appletFunctionInvoker("getPemX509Certificate", /*2, */ 3),
            //getPemSignatureCertificate: appletFunctionInvoker("getPemSignatureCertficate"),
            //getPemEncryptedCertificate: appletFunctionInvoker("getPemEncryptedCertficate"),
            getJsonX509Certificate: appletFunctionInvoker("getJsonX509Certificate", 2),
            //getJsonSignatureCertificate: appletFunctionInvoker("getJsonSignatureCertficate"),
            //getJsonEncryptedCertificate: appletFunctionInvoker("getJsonEncryptedCertficate"),
            checkLoginValid: appletFunctionInvoker("checkLoginValid", 2),
            makePemLoginSignedMessage: appletFunctionInvoker("makePemLoginSignedMessage", 2),
            verifySignature: appletFunctionInvoker("verifySignature", 1),
            getLoginInfoFromPemSignedData: appletFunctionInvoker("getLoginInfoFromPemSignedData", 1),
            //makeBase64PKCS1Signature: appletFunctionInvoker("makeBase64PKCS1Signature"),
            //verifyBase64PKCS1Signature: appletFunctionInvoker("verifyBase64PKCS1Signature"),
            //makeBase64PKCS1RawData: appletFunctionInvoker("makeBase64PKCS1RawData"),
            //decryptBase64PKCS1RawData: appletFunctionInvoker("decryptBase64PKCS1RawData"),
            //makePKCS7EnvelopedData: appletFunctionInvoker("makePKCS7EnvelopedData"),
            //decryptPemPKCS7EnvelopedData: appletFunctionInvoker("decryptPemPKCS7EnvelopedData")
        };
    };

}(angular));
