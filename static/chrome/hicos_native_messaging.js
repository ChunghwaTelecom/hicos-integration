(function (angular) {
    angular.module("HiCosNativeMessagingModule", ['ab-base64', 'HiCosMessagesModule']);

    var correls = {};

    function generateId() {
        return Math.random().toString(36).slice(2);
    }

    var hiCosNativeMessaging = function ($q, $timeout, $log, $rootScope, base64, hiCosMessagesService) {
        function getVersionInfo() {
            var message = {
                "f": "getVersionInfo"
            };
            return dispatchMessage(message);
        }

        function getSlotIdListWithToken() {
            var message = {
                "f": "getSlotIdListWithToken"
            };
            return dispatchMessage(message);
        }

        function getSlotInfoWithToken(slotId) {
            var message = {
                "f": "getSlotInfoWithToken",
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function getTokenInfo(slotId) {
            var message = {
                "f": "getTokenInfo",
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function getTokenId(slotId) {
            var message = {
                "f": "getTokenId",
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function getPemX509Certificate(pin, slotId, certType) {
            var message = {
                "f": "getPemX509Certificate",
                "pin": pin,
                "slotId": slotId,
                "certType": certType
            };
            return dispatchMessage(message);
        }

        function getPemSignatureCertficate(pin, slotId) {
            var message = {
                "f": "getPemSignatureCertficate",
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function getPemEncryptedCertficate(pin, slotId) {
            var message = {
                "f": "getPemEncryptedCertficate",
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function getJsonX509Certificate(pin, certType) {
            var message = {
                "f": "getJsonX509Certificate",
                "pin": pin,
                "certType": certType
            };
            return dispatchMessage(message);
        }

        function getJsonSignatureCertficate(pin) {
            var message = {
                "f": "getJsonSignatureCertficate",
                "pin": pin
            };
            return dispatchMessage(message);
        }

        function getJsonEncryptedCertficate(pin) {
            var message = {
                "f": "getJsonEncryptedCertficate",
                "pin": pin
            };
            return dispatchMessage(message);
        }

        function checkLoginValid(pin, idn) {
            var message = {
                "f": "checkLoginValid",
                "pin": pin,
                "idn": idn
            };
            return dispatchMessage(message);
        }

        function makePemLoginSignedMessage(pin, slotId) {
            var message = {
                "f": "makePemLoginSignedMessage",
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function verifySignature(pemSignedData) {
            var message = {
                "f": "verifySignature",
                "pemSignedData": pemSignedData
            };
            return dispatchMessage(message);
        }

        function getLoginInfoFromPemSignedData(pemSignedData) {
            var message = {
                "f": "getLoginInfoFromPemSignedData",
                "pemSignedData": pemSignedData
            };
            return dispatchMessage(message);
        }

        function makeBase64PKCS1Signature(tbs, pin, slotId) {
            var message = {
                "f": "makeBase64PKCS1Signature",
                "tbs": tbs,
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function verifyBase64PKCS1Signature(data, base64SignBytes, pin, slotId) {
            var message = {
                "f": "verifyBase64PKCS1Signature",
                "data": data,
                "base64SignBytes": base64SignBytes,
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function makeBase64PKCS1RawData(tbs, pin, slotId) {
            var message = {
                "f": "makeBase64PKCS1RawData",
                "tbs": tbs,
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function decryptBase64PKCS1RawData(base64EncryptedData, pin, slotId) {
            var message = {
                "f": "decryptBase64PKCS1RawData",
                "base64EncryptedData": base64EncryptedData,
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function makePemPKCS7Signature(tbs, pin, slotId) {
            var message = {
                "f": "makePemPKCS7Signature",
                "tbs": tbs,
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function verifyPemPKCS7Signature(pemSignedData) {
            var message = {
                "f": "verifyPemPKCS7Signature",
                "pemSignedData": pemSignedData
            };
            return dispatchMessage(message);
        }

        function makePKCS7EnvelopedData(tbs, pin, slotId) {
            var message = {
                "f": "makePKCS7EnvelopedData",
                "tbs": tbs,
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }

        function decryptPemPKCS7EnvelopedData(pemEnvelopedData, pin, slotId) {
            var message = {
                "f": "decryptPemPKCS7EnvelopedData",
                "pemEnvelopedData": pemEnvelopedData,
                "pin": pin,
                "slotId": slotId
            };
            return dispatchMessage(message);
        }
		
        function dispatchMessage(message) {
			
			var maxretry = 15;
            var deferred = $q.defer();

            function attemptDispatchMessage(counter, message) {
				
				console.log(counter);
				
                var messageId = generateId();
                message.correlId = messageId;               

                correls[messageId] = {
                    functionId: message.f,
                    deferred: deferred,
                };
				
				var timeout;
				var retry = false;
				
				if (message.f === "getVersionInfo") {
					timeout = 200;
					retry = true
				} else {
					timeout = 10000;
				}
				
                var timeoutPromise = $timeout(function () {
                    
                    if (correls[messageId]) {
						if (retry) {
							if (counter >= maxretry) {
								deferred.reject("作業逾時");
								delete correls[messageId];
							} else {
								counter = counter + 1;
								attemptDispatchMessage(counter, message);
							}
						} else {
							deferred.reject("作業逾時");
							delete correls[messageId];							
						}
                    }
                }, timeout);
                correls[messageId].timeoutPromise = timeoutPromise;

                try {
                    var event = new CustomEvent(
                        "hicosreq", {
                            detail: {
                                message: message
                            },
                            bubbles: true,
                            cancelable: true
                        }
                    );
                    document.dispatchEvent(event);

                } catch (exception) {
                    // new CustomeEvent may raise TypeError: Object doesn't support this action in IE.
                    if (timeoutPromise) {
                        $timeout.cancel(timeoutPromise);
                    }

                    delete correls[message.correlId];

                    deferred.reject(exception);
                }

            }
			
			attemptDispatchMessage(1, message);

            return deferred.promise;
        }

        document.addEventListener("hicosresp", function (response) {
            var message = response.detail;
            $log.log("Received message (" + message.correlId + "): " + message.code + "-" + message.desc);

            if (correls[message.correlId]) {
                var functionId = correls[message.correlId].functionId;
                var deferred = correls[message.correlId].deferred;

                var timeoutPromise = correls[message.correlId].timeoutPromise;
                if (timeoutPromise) {
                    $timeout.cancel(timeoutPromise);
                }

                delete correls[message.correlId];

                var value;
                switch (functionId) {
                    case "getSlotIdListWithToken":
                        var slots = JSON.parse(message.rtn);
                        /* 這裡沒有做勝淵範例裡的 slots 數目檢查，一來是為了要符名 function 名稱，二來為了跟 applet 版本相容。 */
                        value = slots;
						
                        break;

                    case "getVersionInfo":
                        // 可以直接使用的回傳值
                        value = message.rtn;
                        this.versionInfo = value;
                        break;
                    case "getSlotInfoWithToken":
                    case "getTokenInfo":
                    case "makeBase64PKCS1Signature":
                    case "verifyBase64PKCS1Signature":
                    case "makeBase64PKCS1RawData":
                    case "makePemPKCS7Signature":
                    case "verifyPemPKCS7Signature":
                    case "makePKCS7EnvelopedData":
                    case "decryptPemPKCS7EnvelopedData":
                    case "getPemX509Certificate":
                    case "getPemSignatureCertficate":
                    case "getPemEncryptedCertficate":
                    case "checkLoginValid":
                    case "makePemLoginSignedMessage":
                    case "verifySignature":
                    case "getTokenId":
                        // 可以直接使用的回傳值
                        value = message.rtn;
                        break;

                    case "decryptBase64PKCS1RawData":
                    case "getJsonX509Certificate":
                    case "getJsonSignatureCertficate":
                    case "getJsonEncryptedCertficate":
                    case "getLoginInfoFromPemSignedData":
                        // 需 base64 解碼的回傳值
                        value = base64.decode(message.rtn);
                        break;

                    default:
                        $rootScope.$apply(function () {
                            deferred.reject("不明的功能識別碼: " + functionId);
                        });
                }

                $rootScope.$apply(function () {
                    var code = message.code;
                    var description = message.desc;
                    if (hiCosMessagesService.hasCode(code)) {
                        description = hiCosMessagesService.getMessage(code);
                    }
                    var result = {
                        code: message.code,
                        message: description,
                        value: value
                    };

                    if (message.code === "0x00000000") {
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                });
            }
        });

        return {
            getInstance: function () {
                return getVersionInfo().then(
                    function () {
                        $log.debug("HiCOS Chrome Extension loaded successfully.");
                        return {
                            getVersionInfo: getVersionInfo,
                            getSlotIdListWithToken: getSlotIdListWithToken,
                            getSlotInfoWithToken: getSlotInfoWithToken,
                            getTokenInfo: getTokenInfo,
                            getTokenId: getTokenId,
                            getPemX509Certificate: getPemX509Certificate,
                            getPemSignatureCertificate: getPemSignatureCertficate,
                            getPemEncryptedCertificate: getPemEncryptedCertficate,
                            getJsonX509Certificate: getJsonX509Certificate,
                            getJsonSignatureCertificate: getJsonSignatureCertficate,
                            getJsonEncryptedCertificate: getJsonEncryptedCertficate,
                            checkLoginValid: checkLoginValid,
                            makePemLoginSignedMessage: makePemLoginSignedMessage,
                            verifySignature: verifySignature,
                            getLoginInfoFromPemSignedData: getLoginInfoFromPemSignedData,
                            makeBase64PKCS1Signature: makeBase64PKCS1Signature,
                            verifyBase64PKCS1Signature: verifyBase64PKCS1Signature,
                            makeBase64PKCS1RawData: makeBase64PKCS1RawData,
                            decryptBase64PKCS1RawData: decryptBase64PKCS1RawData,
                            makePKCS7EnvelopedData: makePKCS7EnvelopedData,
                            decryptPemPKCS7EnvelopedData: decryptPemPKCS7EnvelopedData
                        };
                    }
                );
            }
        };
    };

    angular.module("HiCosNativeMessagingModule")
        .factory('hiCosNativeMessaging', ['$q', '$timeout', '$log', '$rootScope', 'base64', 'hiCosMessagesService', hiCosNativeMessaging]);

})(angular);