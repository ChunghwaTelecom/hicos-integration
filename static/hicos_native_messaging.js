(function (angular) {
    angular.module("HiCosNativeMessagingModule", ['ab-base64']);

    var counter = 0;
    var correls = {};

    function generateId() {
        return counter++ + "";
    }

    var hiCosNativeMessaging = function ($q, $timeout, $log, $rootScope, base64) {
        function getVersionInfo() {
            var message = {"f": "getVersionInfo"};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getSlotIdListWithToken() {
            var message = {"f": "getSlotIdListWithToken"};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getSlotInfoWithToken(slotId) {
			var message = {"f": "getSlotInfoWithToken", "slotId": slotId};
			var promise = dispatchMessage(message);
			return promise
        }

        function getTokenInfo(slotId) {
            var message = {"f": "getTokenInfo", "slotId": slotId};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getTokenId(slotId) {
            var message = {"f": "getTokenId", "slotId": slotId};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getPemX509Certificate(pin, slotId, certType) {
            var message = {"f": "getPemX509Certificate", "pin": pin, "slotId": slotId, "certType": certType};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getPemSignatureCertficate(pin, slotId) {
            var message = {"f": "getPemSignatureCertficate", "pin": pin, "slotId": slotId};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getPemEncryptedCertficate(pin, slotId) {
            var message = {"f": "getPemEncryptedCertficate", "pin": pin, "slotId": slotId};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getJsonX509Certificate(pin, certType) {
            var message = {"f": "getJsonX509Certificate", "pin": pin, "certType": certType};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getJsonSignatureCertficate(pin) {
            var message = {"f": "getJsonSignatureCertficate", "pin": pin};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getJsonEncryptedCertficate(pin) {
            var message = {"f": "getJsonEncryptedCertficate", "pin": pin};
            var promise = dispatchMessage(message);
            return promise;
        }

        function checkLoginValid(pin, idn) {
            var message = {"f": "checkLoginValid", "pin": pin, "idn": idn};
            var promise = dispatchMessage(message);
            return promise;
        }

        function makePemLoginSignedMessage(pin, slotId) {
            var message = {"f": "makePemLoginSignedMessage", "pin": pin, "slotId": slotId};
            var promise = dispatchMessage(message);
            return promise;
        }

        function verifySignature(pemSignedData) {
            var message = {"f": "verifySignature", "pemSignedData": pemSignedData};
            var promise = dispatchMessage(message);
            return promise;
        }

        function getLoginInfoFromPemSignedData(pemSignedData) {
            var message = {"f": "getLoginInfoFromPemSignedData", "pemSignedData": pemSignedData};
            var promise = dispatchMessage(message);
            return promise;
        }

        function makeBase64PKCS1Signature(tbs, pin, slotId) {
            var message = {"f": "makeBase64PKCS1Signature", "tbs": tbs, "pin": pin, "slotId": slotId};
            var promise = dispatchMessage(message);
            return promise;
        }

        function verifyBase64PKCS1Signature(data, base64SignBytes, pin, slotId) {
            var message = {
                "f": "verifyBase64PKCS1Signature",
                "data": data,
                "base64SignBytes": base64SignBytes,
                "pin": pin,
                "slotId": slotId
            };
            var promise = dispatchMessage(message);
            return promise;
        }

        function makeBase64PKCS1RawData(tbs, pin, slotId) {
            var message = {"f": "makeBase64PKCS1RawData", "tbs": tbs, "pin": pin, "slotId": slotId};
            var promise = dispatchMessage(message);
            return promise;
        }

        function decryptBase64PKCS1RawData(base64EncryptedData, pin, slotId) {
            var message = {
                "f": "decryptBase64PKCS1RawData",
                "base64EncryptedData": base64EncryptedData,
                "pin": pin,
                "slotId": slotId
            };
            var promise = dispatchMessage(message);
            return promise;
        }

        function makePemPKCS7Signature(tbs, pin, slotId) {
            var message = {"f": "makePemPKCS7Signature", "tbs": tbs, "pin": pin, "slotId": slotId};
            var promise = dispatchMessage(message);
            return promise;
        }

        function verifyPemPKCS7Signature(pemSignedData) {
            var message = {"f": "verifyPemPKCS7Signature", "pemSignedData": pemSignedData};
            var promise = dispatchMessage(message);
            return promise;
        }

        function makePKCS7EnvelopedData(tbs, pin, slotId) {
            var message = {"f": "makePKCS7EnvelopedData", "tbs": tbs, "pin": pin, "slotId": slotId};
            var promise = dispatchMessage(message);
            return promise;
        }

        function decryptPemPKCS7EnvelopedData(pemEnvelopedData, pin, slotId) {
            var message = {
                "f": "decryptPemPKCS7EnvelopedData",
                "pemEnvelopedData": pemEnvelopedData,
                "pin": pin,
                "slotId": slotId
            };
            var promise = dispatchMessage(message);
            return promise;
        }

        function dispatchMessage(message) {
            var messageId = generateId();
            message.correlId = messageId;

            var deferred = $q.defer();

            correls[messageId] = {
                functionId: message.f,
                deferred: deferred
            };
			
			var timeoutPromise = $timeout(function () {
				if (correls[messageId]) {
				    deferred.reject("作業逾時");
				    delete correls[messageId];
				}
			}, 10000);
			correls[messageId].timeoutPromise = timeoutPromise;

			var event = new CustomEvent(
				"hicosreq",
				{
					detail: {
						message: message
					},
					bubbles: true,
					cancelable: true
				}
			);
			document.dispatchEvent(event);
			
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
					case "getSlotInfoWithToken":
					case "getTokenInfo":
					case "makeBase64PKCS1Signature":
					case "verifyBase64PKCS1Signature":
					case "makeBase64PKCS1RawData":
					case "makePemPKCS7Signature":
					case "verifyPemPKCS7Signature":
					case "makePKCS7EnvelopedData":
					case "decryptPemPKCS7EnvelopedData":
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
					var result = {
							code: message.code,
							message: message.desc,
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
    };

    angular.module("HiCosNativeMessagingModule")
        .factory('hiCosNativeMessaging', ['$q', '$timeout', '$log', '$rootScope', 'base64', hiCosNativeMessaging]);

})(angular);
