(function () {

    "use strict";

    var setPadding = function () {

        var padding = ($('body').height() - $('.main').height()) / 2;

        padding = Math.max(padding, 50)

        $('.main').css({
            'padding-top'       : Math.max(padding, 50)
        });

    };

    var onload = function () {
        cnt += 1;
        if (cnt === 2) {
            $('html').addClass('ready');
        }
    };

    /*
     * Preload images
     */
    var cnt = 0;

    var imgs = [new Image, new Image];
    imgs[0].onload = onload;
    imgs[1].onload = onload;

    imgs[0].src = "img/background.jpg";
    imgs[1].src = "img/TRwebLogo.svg";

    $(document).ready(function () {
        setPadding()
        $(window).on('resize', setPadding);
    });

}());