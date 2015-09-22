(function (angular) {
    'use strict';

    angular.module("HiCosAppletModule", ["HiCosMessagesModule", "JavaAppletModule"]);

    angular.module("HiCosAppletModule")
        .factory("hiCosAppletWrapper", ['$q', '$log', 'hiCosMessagesService', hiCosAppletWrapper
        ]);

    function hiCosAppletWrapper($q, $log, hiCosMessagesService) {

        var applet;

        function appletFunctionWrapper(functionName, numberOfArguments) {
            if (angular.isArray(numberOfArguments)) {
                angular.forEach(numberOfArguments, function (numberOfArguments) {
                    if (!numberOfArguments && numberOfArguments > 4) {
                        throw "No more than 4 arguments is allowed in function registration.";
                    }
                });
            } else {
                if (!numberOfArguments && numberOfArguments > 4) {
                    throw "No more than 4 arguments is allowed in function registration.";
                }
            }

            function promisifiedFunction () {
                var args = Array.prototype.slice.call(arguments, 0);

                var deferred = $q.defer();

                var result;
                var exceptionMessage;
                try {
                    var argumentsCase = -1;
                    if (angular.isArray(numberOfArguments)) {
                        if (numberOfArguments.indexOf(args.length) !== -1) {
                            argumentsCase = args.length;
                        }
                    } else {
                        if (numberOfArguments === args.length) {
                            argumentsCase = numberOfArguments;
                        }
                    }

                    switch (argumentsCase) {
                        case 0:
                            result = applet[functionName]();
                            break;
                        case 1:
                            result = applet[functionName](args[0]);
                            break;
                        case 2:
                            result = applet[functionName](args[0], args[1]);
                            break;
                        case 3:
                            result = applet[functionName](args[0], args[1], args[2]);
                            break;
                        case 4:
                            result = applet[functionName](args[0], args[1], args[2], args[3]);
                            break;
                        default:
                            throw new Error('Number of arguments mismatch, expecting ' + numberOfArguments + ", but got: " + args.length + ".");
                    }

                } catch (exception) {
                    $log.error(exception);
                    exceptionMessage = exception.message;
                }

                if (!exceptionMessage) {
                    var code = applet.getHandleCode();
                    var message = applet.getHandleMessage();

                    if (hiCosMessagesService.getMessage(code) != "unknown") {
                        message = hiCosMessagesService.getMessage(code);
                    }

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
            }

            if (applet.hasOwnProperty(functionName) || applet[functionName]) {
                return promisifiedFunction;

            } else {
                $log.error("\"" + functionName + "\" is undefined in target applet.");
                return function () {
                    return $q.reject("\"" + functionName + "\" is undefined in target applet.");
                };
            }
        }

        return {
            wrap: function (appletToBeWrapped) {
                applet = appletToBeWrapped;
                return {
                    wrapFunction: appletFunctionWrapper
                };
            }
        };
    }

}(angular));
