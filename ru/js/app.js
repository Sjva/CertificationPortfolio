requirejs.config({
    shim: {                  // порядок загрузки зависимостей для модулей(файлов)
        'bootstrap': ['jquery'],
        'contact': ['jquery', 'html5shiv', 'bg_email', 'zepto_email'],
        'send_email': ['contact']
    },
    paths: {
        jquery: 'jquery.min',
        bootstrap: 'bootstrap.min',
        animation: 'wow.min',
        menu: 'menu',
        html5shiv: 'html5shiv.min',
        respond: 'respond.min',
        bg_email: 'stats',
        zepto_email: 'zepto.min',
        contact: 'bg-contact',
        send_email:'send_email'
    }
});

requirejs(['jquery','bootstrap','animation','menu','html5shiv','respond','bg_email','zepto_email', 'contact','send_email'], function () {
    $(".html").animate({width:"80%"},1000);$(".css").animate({width:"85%"},1300);$(".js").animate({width:"40%"},1700);$(".git").animate({width:"75%"},2000);$(".bootstrap").animate({width:"85%"},2300);$(".less").animate({width:"65%"},2600);$(".photoshop").animate({width:"80%"},2900);$(".seo").animate({width:"60%"},3000);
    new WOW().init();
});





