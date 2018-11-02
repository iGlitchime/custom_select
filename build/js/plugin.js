$.fn.extend({
    selectTheme: function (arg) {
        $(this).toggleClass('select__custom select__custom_' + arg.theme);
        console.log(arg.theme);
    }
});