(function() {
    angular.module('c.urls', [ 'c.environment' ]);

    var cUrls = function(cEnvironment) {

        return {
            expandContext : function(url) {
                var result = /^@\{(.+?)\}$/.exec(url);
                if (result && result.length > 1) {

                    if (result[1].charAt(0) == '/') {
                        return cEnvironment.contextRoot() + result[1];
                    } else {
                        return cEnvironment.contextRoot() + '/' + result[1];
                    }
                }
                return url;
            },
            getContextRoot : function(url) {
                if (url.substring(0, 1) == '/' && url.indexOf(cEnvironment.contextRoot()) != 0) {
                    var regex = new RegExp('^(/[^/?#]+)');
                    var result = url.match(regex);
                    return result[0];
                }
                return cEnvironment.contextRoot();
            }
        };
    };

    angular.module('c.urls').factory('cUrls', [ 'cEnvironment', cUrls ]);
})();
