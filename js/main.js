(function () {

    "use strict";

    var setPadding = function () {

        var padding = ($('body').height() - $('.main').height()) / 2;

        padding = Math.max(padding, 50)

        $('.main').css({
            'padding-top'       : Math.max(padding, 50)
        });

    };

    $(document).ready(function () {

        setPadding()

        $(window).on('resize', setPadding);

    });

}());