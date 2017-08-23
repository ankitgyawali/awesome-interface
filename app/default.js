$(document).ready(function () {
    // Sidebar Toggle Button Initialization
    $(".sidebar-toggle").click(function (event) {
        var $nextUl = $(event.target).parents().eq(1).find("ul.nav");
        if (event.target.innerText === "Show") {
            event.target.innerText = "Hide";
        } else {
            event.target.innerText = "Show";
        }
        $nextUl.slideToggle("fast", "swing");
    });

    $(document).on("focus", function (e) {
        //console.log("Focussed");
    });

    $(window).on('focus', function () {
        $("body").removeClass("blur");
    });

    $(window).on('blur', function () {
        $("body").addClass("blur");
    });

    // Rangeslider
    $('input[type="range"]').rangeslider({
        // Feature detection
        polyfill: false
    });
});