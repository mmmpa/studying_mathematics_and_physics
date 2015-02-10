/// <reference path="../vendor/dts/underscore/underscore.d.ts" />
/// <reference path="../vendor/dts/underscore.string/underscore.string.d.ts" />
/// <reference path="../vendor/dts/zepto/zepto.d.ts" />
$(()=> {
    new Vue({
        el: '#TEXT',
        data: {
            input: $('#SRC').text()
        }
    });
});

Vue.filter('haml', function (value) {
    return haml.compileHaml({source: value})();
});

