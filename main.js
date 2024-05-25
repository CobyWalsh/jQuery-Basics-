$(document).ready(function() {

    // This fuction uses a scroll animation. When the button is clicked is scrolls to the desired section
var page_url = window.location.href;
var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
if(page_id == "section3") {
    $("html, body").animate({
        screenTop: $("scroll-" + page_id).offset().top - 20
    }, 1000);
} else if (page_id == "post") {
    $("html, body").animate({
        screenTop: $("scroll-" + page_id).offset().top
    }, 1000);
}

});