(function() {
    var environment = angular.module('c.environment', []);
    var cEnvironment = function() {
        var environmentObject = {};

        var setterAndGetter = function(name, value) {
            if (typeof value !== "undefined"
                    && typeof environmentObject[name] === "undefined") {
                environmentObject[name] = value;
            } else {
                return environmentObject[name];
            }
        };

        return {
            contextRoot : function(context) {
                return setterAndGetter('contextRoot', context);
            },
            property : function(name, value) {
                return setterAndGetter(name, value);
            }
        };
    };
    environment.factory('cEnvironment', [ cEnvironment ]);
})();
