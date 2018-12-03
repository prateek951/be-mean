$(document).ready(function () {
    $(".navbar-toggle").click(function () {
        $(this).toggleClass("active");
        $("#toggle").toggleClass("left");
        $("#nav-side").toggleClass("right");
        $("#nav-menu").toggleClass("pull-right");
    });
});