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
})