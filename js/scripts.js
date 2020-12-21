$(document).ready(function () {
    $(".clickable").click(function () {
        $("#initally-showing").toggle();
        $("#initally-hidden").toggle();
    });
});