$('.radio').click(function () {
    $('input[name="gender"]').attr('checked', false);
    $(this).children('input').attr('checked', 'checked');
});

$('.btn-submit').click(function () {
    $('.bk-cover').show();
    $('.modal').show();
});

$('.btn-modal').click(function () {
    $('.bk-cover').hide();
    $('.modal').hide();

});