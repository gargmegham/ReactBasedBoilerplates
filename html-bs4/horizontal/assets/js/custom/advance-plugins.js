(function ($) {
    "use strict";

    var calIcons = {
        time: 'icon icon-time',
        date: 'icon icon-calendar',
        up: 'icon icon-chevrolet-up',
        down: 'icon icon-chevrolet-down',
        previous: 'icon icon-chevrolet-left',
        next: 'icon icon-chevrolet-right',
        clear: 'icon icon-trash'
    };

    $('#date-time-picker-1').datetimepicker({
        icons: calIcons,
        inline: true,
        sideBySide: true
    });

    $('#date-time-picker-2').datetimepicker({
        icons: calIcons,
        format: 'L'
    });

    $('#date-time-picker-3').datetimepicker({
        icons: calIcons,
        viewMode: 'years',
        format: 'MM/YYYY'
    });

})(jQuery);