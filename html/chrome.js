
console.log("loading .... ");

angular.module('HiCosAppletModule').value('hiCosLoginAppletParameters', { jnlp_href: './applet/HiCOSLoginApplet.jnlp' });
angular.module('certApp', ['HiCosIntegrationModule'])
            .controller('certController', function($scope, $log, hiCosService) {
			
				var cert = this;
				
				cert.version;
        hiCosService.getLoginService().then(function (hiCosService) {
                cert.getVersionInfo = function() {
                    
                    hiCosService.getVersionInfo().then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            cert.version = result.value;
                        },
                        function(fail) {
                            cert.version = "Fail: " + fail.code + "-" + fail.message;
							
                        }
                    );
                }
				
               cert.getSlotIdListWithToken = function() {
                    hiCosService.getSlotIdListWithToken().then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            var slots = result.value;
                            if (slots.length == 0) {
                                slotId = "無卡片存在";
                            } else {
                                if (slots.length > 1) {
                                    slotId = "有兩張以上的卡片存在";
                                }
                            }
                            cert.slotId = slots[0];
                        },
                        function(fail) {
                            cert.result = "Fail: " + fail.code + "-" + fail.message;
                        }
                    );
                }				
				
                cert.getSlotInfoWithToken = function(slotId) {
                    hiCosService.getSlotInfoWithToken(slotId).then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            cert.slotInfo = result.value;
                        },
                        function(fail) {
                            cert.result = "Fail: " + fail.code + "-" + fail.message;
                        }
                    );
                }
                
                cert.getTokenInfo = function(slotId) {
                    hiCosService.getTokenInfo(slotId).then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            cert.tokenInfo = result.value;
                        },
                        function(fail) {
                            cert.result = "Fail: " + fail.code + "-" + fail.message;
                        }
                    );
                }        
                
                cert.getPemX509Certificate = function(pin, slotId, type) {
                    hiCosService.getPemX509Certificate(pin, slotId, type).then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            $scope.signcertPem = result.value;
                        },
                        function(fail) {
                            cert.result = "Fail: " + fail.code + "-" + fail.message;
                        }
                    );
                }
                cert.getJsonX509Certificate = function(pin, slotId) {
                    hiCosService.getJsonX509Certificate(pin, slotId).then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            $scope.signcertJson = result.value;
                        },
                        function(fail) {
                            cert.result = "Fail: " + fail.code + "-" + fail.message;
                        }
                    );
                }
                cert.checkLoginValid = function(pin, idn) {
                    hiCosService.checkLoginValid(pin, idn).then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            cert.loginValidResult = result.value;
                        },
                        function(fail) {
                            cert.result = "Fail: " + fail.code + "-" + fail.message;
                        }
                    );
                }
                cert.makePemLoginSignedMessage = function(pin, slotId) {
                    hiCosService.makePemLoginSignedMessage(pin, slotId).then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            $scope.loginpkcs7sign = result.value;
                        },
                        function(fail) {
                            cert.result = "Fail: " + fail.code + "-" + fail.message;
                        }
                    );
                }
                cert.verifySignature = function(pemSignedData) {
                    hiCosService.verifySignature(pemSignedData).then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            cert.signdataValid = result.value;
                        },
                        function(fail) {
                            cert.result = "Fail: " + fail.code + "-" + fail.message;
                        }
                    );
                }
                cert.getLoginInfoFromPemSignedData = function(pemSignedData) {
                    hiCosService.getLoginInfoFromPemSignedData(pemSignedData).then(
                        function(result) {
                            cert.result = "Success (code:" + result.code + "-message:" + result.message + ")";
                            $scope.logininfo = result.value;
                        },
                        function(fail) {
                            cert.result = "Fail: " + fail.code + "-" + fail.message;
                        }
                    );
                }
        }, function (errorMessage) {
            cert.result = errorMessage;
        });
                
			});