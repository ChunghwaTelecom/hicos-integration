(function (angular) {
    'use strict';

    angular.module('certApp', ['HiCosAppletModule'])
           .controller('certController', ['hiCosApplet', certController]);

    function certController (hiCosApplet) {
        var cert = this;
        
        cert.message = "a";
        cert.success = true;
        
        cert.getVersionInfo = function() {
            hiCosApplet.getVersionInfo().then(
                function(success) {
                    cert.success = true;
                    cert.message = success;
                },
                function(fail) {
                    cert.success = false;
                    cert.message = fail;
                }
            );
        }
        
        cert.getSlotIdListWithToken = function() {
            hiCosApplet.getSlotIdListWithToken().then(
                function(success) {
                    cert.success = true;
                    cert.message = success;
                },
                function(fail) {
                    cert.success = false;
                    cert.message = fail;
                }
            );
        }
                
        cert.getSlotInfoWithToken = function(id) {
            hiCosApplet.getSlotInfoWithToken(id).then(
                function(success) {
                    cert.success = true;
                    cert.message = success;
                },
                function(fail) {
                    cert.success = false;
                    cert.message = fail;
                }
            );
        }

    }

})(angular);
