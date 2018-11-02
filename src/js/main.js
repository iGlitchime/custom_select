$(document).ready(function () {

    $('[data-js="select_theme"]').selectTheme({theme: 'dark'});

    // console.log($('body'));

    //setTimeOut to load it prettier
    //plan:
    // + 1. открывать список
    // + 2. выбирать значение
    // + 3. менять текст в поле над актуальным списком

    // несколько селектов
    // + 4. определять текущий селект  (привязка по id?)
    // + 5. открывать у него свой список
    // + 6. вставлять значение в свое поле

    //7. + список закрывается если кликать по выбранному полю
    //8. + список закрывается если кликать где-то кроме самого списка не меняя значение в поле вывода
    //9. иконка отображается в поле текущего селекта (в его пределах) перед текстовым тегом

    //10. разобраться с анимацией блоков, чтоб их генерация на странице выглядела аккуратнее


    $("html").click(function(event) {
        $('.wrapper-dropdown').removeClass("active");
    });

    $('body').find('[data-js="select_theme"]').map(function (i, el) {
        el.id = 'select_0' + i;
            $('#' + el.id).on('click', function (event) {
                event.stopPropagation();
                $(this).toggleClass('active');
                console.log(this);
            });
            //
            $('#' + el.id + ' li a').on('click', function() {
                $('#' + el.id + ' span').html(this.innerHTML);

                console.log(this.innerHTML);
            });

    });
});

