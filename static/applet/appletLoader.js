(function (angular) {
    'use strict';

    angular.module("JavaAppletModule", ['c.urls']);

    angular.module("JavaAppletModule")
        .factory('appletLoader', ['$q', '$log', '$timeout', 'cUrls', appletLoader]);

    function appletLoader($q, $log, $timeout, cUrls) {

        var LOADING = 1;
        var READY = 2;
        var ERROR = 3;

        var loadedApplets = {};

        function load(attributes, parameters, minimumVersion) {
            var deferred = $q.defer();

            if (isJavaAvailable()) {
                if (deployJava && deployJava.getApplet) {
                    if (attributes && attributes.id) {
                        if (parameters && parameters['jnlp_href']) {
                            parameters['jnlp_href'] = cUrls.expandContext(parameters['jnlp_href']);
                        }
                        loadApplet(attributes, parameters, minimumVersion, deferred);

                    } else {
                        deferred.reject("Must have attributes specified for applet loading.");
                    }

                } else {
                    deferred.reject("deployJava.getApplet does not exist or is not compatible with this module.");
                }

            } else {
                deferred.reject("Java Plugin is not installed.");
            }

            return deferred.promise;
        }

        function loadApplet(attributes, parameters, minimumVersion, deferred) {
            var id = attributes.id;

            if (loadedApplets[id]) {
                $log.debug('Applet "' + id + '" has been loaded before, return cached instance.');
                deferred.resolve(loadedApplets[id]);

            } else {
                $(document.body).append('<div id="' + id + 'PlaceHolder"></div>');
                // FIXME 新版的 deployJava.js 沒有 getApplet 函式，該怎麼處理呢?

                minimumVersion = minimumVersion || "1.7";
                var appletElement = deployJava.getApplet(attributes, parameters, minimumVersion);
                $("#" + id + "PlaceHolder").html(appletElement);

                var applet = document[id];
                if (applet) {
                    resolveUntilAppletReady(applet, id, deferred);

                } else {
                    deferred.reject("Applet failed to load.");
                }
            }
        }

        function resolveUntilAppletReady(applet, id, deferred) {
            var status = applet.status;

            switch (status) {
                case undefined:
                case LOADING:
                    $timeout(function () {
                        resolveUntilAppletReady(applet, id, deferred);
                    }, 100);
                    break;

                case READY:
                    // TODO Should we register applet.onStop to cleanup cached instance?
                    loadedApplets[id] = applet;
                    deferred.resolve(applet);
                    break;

                case ERROR:
                default:
                    deferred.reject("Applet failed to load with status: " + status);
            }
        }

        return {
            load: load
        };
    }

    function isJavaAvailable() {
        if (deployJava && deployJava.versionCheck) {
            return deployJava.versionCheck("1.7.0+");
        }
        return false;
    }

}(angular));
