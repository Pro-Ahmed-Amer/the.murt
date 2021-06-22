$(document).ready(function() {

    var scrollButton = $("#scroll-top")

    // Caching The Scroll Top Element

    $(window).scroll(function() {

        if ($(this).scrollTop() >= 500) {

            scrollButton.show();

        } else {

            scrollButton.hide();
        }
    });

    // Click On Button To Scroll Top

    scrollButton.click(function() {

        $("html,body").animate({
            scrollTop: 0
        }, 100);

    });

});