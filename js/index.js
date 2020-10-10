$('.radio').click(function () {
    $('input[name="gender"]').attr('checked', false);
    $(this).children('input').attr('checked', 'checked');
});