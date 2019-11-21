$(document).ready(function() {
    $('.toggles button').click(function() {
        const id = this.id;
        const current = $(`.posts .${id}`);

        $('.post').not(current).hide(500);
        current.show(500);
    });

    $('#showall').click(function() {
        $('.post').show(500);
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 8,
        loop: true,
    });
  });

if ($(window).width() <= 420) {
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
    });
}