var htmlYear;
htmlYear = '<div id="year-options" class = "options" data-select="year">';
for (var i = 1960; i < 2003; i++) {
    htmlYear += '<div class="option" value="' + i + '">' + i + '</div>';
}
htmlYear += '</div>';
$('body').append(htmlYear);

$('.select').click(function () {
    $('#' + $(this).attr('id') + '-options').show();
    $('.bk-cover').show();
});

$('body').on('click', '.option', function () {
    $('#' + $(this).parent('.options').attr('data-select')).text($(this).text());
    console.log($(this).text());
    $(this).parent('.options').hide();
    $('#' + $(this).parent('.options').attr('data-select')).children('i').hide();
    $('.bk-cover').hide();
});

  
var htmlMonth;
htmlMonth = '<div id="month-options" class = "options" data-select="month">';
for (var i = 1; i < 13; i++) {
    htmlMonth += '<div class="option" value="' + i + '">' + i + '</div>';
}

htmlMonth += '</div>';
$('body').append(htmlMonth);


var htmlDay;
htmlDay = '<div id="day-options" class = "options" data-select="day">';
for (var i = 1; i < 32; i++) {
    htmlDay += '<div class="option" value="' + i + '">' + i + '</div>';
}

htmlDay += '</div>';
$('body').append(htmlDay);


$('.bk-cover').click(function () {
    $('.options').hide();
    $('.bk-cover').hide();
});