// let owlCarousel = require('owl.carousel');

$(document).ready ( function () {
    
    $('#phone__car').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:false,
    });
    
    $('#team__car').owlCarousel({
        items: 3,
        dots:true,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            770:{
                items:3
            }
        }
    });
    
    // Menu nav toggle (burger)
    
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        
    });
    
    // $ - взять элемент страницы  # - с id header и присвоить переменной header
    let header = $("#header"),
        // $ - взять элемент страницы  # - с id intro и применить к элементу функцию innerHeight()
        // которая вернет число пикселей отступов сверху для этого элемента (минус 30 пикселей)
        // и присвоить переменной welcomeH
        introH = $("#intro").innerHeight() - 5,
        // число пикселей отступов сверху, по умолчанию ноль
        scrollOffset = 0;
    // Fixed Header
    // вызов функции, которая по числу пикселей отступов сверху сделает верхнее меню фиксированым или нет
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function () {
        // this - для этого же самого элемента страницы window выполнить функцию scrollTop
        // которая вернет число пикселей отступов сверху для этого элемента
        // и присвоить переменной scrollOffset
        scrollOffset = $(this).scrollTop();
        
        // вызов функции
        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        // и если scrollOffset больше или равен ранее полученной переменной introH
        if (scrollOffset >= introH) {
            // то для ранее полученого элемента страницы header будет добавлен класс fixed
            header.addClass("fixed");
        } else {
            // иначе убран
            header.removeClass("fixed");
        }
    }
    // Smooth scroll
    // $ - взять элемент страницы  [data-scroll] - у которого присутствует атрибут data-scroll
    // on - и при действии click - клике мышью, выполнить функцию
    $("[data-scroll]").on("click", function(event) {
        // event - само собитие нажатия мыши, (может содержать информацию о нажатии, например число нажатий)
        // и применить к событию функцию preventDefault() - отменить событие по умолчанию (переход по ссылке)
        event.preventDefault();
        
        // this - взять этот же самый элемент страницы и присвоить переменной $this
        let $this = $(this),
            // this - взять этот же самый элемент страницы и применить к нему функцию data('scroll')
            // которая попытается найти в элементе страницы атрибут data-scroll="" и вернет его значение
            // (это могло бы быть data('height') , тогда бы функция искала атрибут data-height="")
            // и присвоить результат (например #about) переменной blockID
            blockID = $(this).data('scroll'),
            // $ - взять элемент страницы по значению из переменной blockID (например #about)
            // и применить к ней функцию offset() которая вернет объект с числами пикселей отступов
            // top - нам нужны отступы сверху и присвоим число переменной blockOffset
            blockOffset = $(blockID).offset().top;
        
        // $ - взять элемент страницы  # - с id nav при условии что элемент имеет тег <a>
        // и убрать у него класс active
        $("#nav a").removeClass("active");
        // для ранее полученого элемента страницы $this (т.е. [data-scroll]) будет добавлен класс active
        $this.addClass("active");
        
        // $ - взять элемент страницы с тегом body или html т.е. всю страницу
        // и применить к элементу функцию animate в которую будут переданы 2 переменные:
        $("html, body").animate(
            // 1. объект { scrollTop: blockOffset } содержащий атрибут scrollTop,
            // которому будет присвоено ранее рассчитанное значение переменной blockOffset
            {scrollTop: blockOffset},
            // 2. Число (скорость анимации)
            500
        )
        // в результате функция сделает прокрутку с нужным числом пикселей отступов сверху
        
    });
});

