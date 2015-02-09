/// <reference path="../vendor/dts/underscore/underscore.d.ts" />
/// <reference path="../vendor/dts/zepto/zepto.d.ts" />

$(()=> {
    new Vue({
        el: '#TEXT',
        data: {
            input: $('#SRC').text()
        },
        filters: {
            marked: marked
        }
    });
});
