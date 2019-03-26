jQuery(function($) {

    /***
     * 
     ***/  
    if (localStorage.getItem("dark-mode")) {
        $('body').addClass('dark-mode');
    }

    /* ============================================================ */
    /* Responsive Videos */
    /* ============================================================ */

    $(".post-content").fitVids();

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({'scrollTop': 0});
    });

    $('.change-mode-color').on('click', function (e) { 
        e.preventDefault();

        $('body').toggleClass('dark-mode');
        const darkMode = $('body').hasClass('dark-mode'); 
        darkMode ? localStorage.setItem("dark-mode", darkMode) : localStorage.removeItem("dark-mode");
    });
});

hljs.initHighlightingOnLoad();
