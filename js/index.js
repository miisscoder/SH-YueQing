var url = 'http://yueqinshop.com';

$('.tab').click(function () {
    $('.tab').attr('data-active', 'false');
    $(this).attr('data-active', 'true');
    var id = $(this).attr('data-tab');
    $('.tabs').attr('data-id', id);
    $('.results').attr('data-active', 'false');
    $('.results[data-tab="' + id + '"]').attr('data-active', 'true');
    if (1 === id) {
        $('.subtabs').hide();
    } else {
        $('.subtabs').show();
    }

    //  post 
    htmlData(Number(id));
});

$('.sub-tab').click(function () {
    $('.sub-tab').attr('data-active', 'false');
    $(this).attr('data-active', 'true');
    var subid = Number($(this).attr('data-id'));
    $('.icon-triangle').css('left', (10 + (subid - 1) * 20) + '%');
    $('.subtabs').attr('data-id', subid);
    var id = $('.tabs').attr('data-id');

    // post 
    htmlData(Number(id));
});

$('.filter-tab').click(function () {
    $('.filter').css('left', '20%');
    $('.cover-bk').show();
});
$('.btn-filter').click(function () {
    $('.filter').css('left', '100%');
    $('.cover-bk').hide();
});

$('body').on('click', '.btn-item',  function () {
    if ($(this).attr('data-active') === 'false') {
        $(this).attr('data-active', 'true');
    } else {
        $(this).attr('data-active', 'false');
    }
});

// 筛选数据导入html
var brands = parameter['Brand'];
var interfaces = parameter['Interface'];
var html = '';
for (var i = 0; i < brands.length; i++) {
    html += '<a href = "javascript:;" class="btn-item" data-active="false">' + brands[i]['name'] + '</a>';
}
$('.btn-items-brands').html(html);
html = '';
for (var i = 0; i < interfaces.length; i++) {
    html += '<a href = "javascript:;" class="btn-item" data-active="false">' + interfaces[i]['name'] + '</a>';
}
$('.btn-items-interfaces').html(html);

//            <div class="item flex start middle">
//                <div class="left flex start middle">
//                    <div class="image">
//                        <img src="http://yueqinshop.com/temp/833b2815d5134c11ad4736fdd84a7c2b.jpg" />
//                    </div>
//                    <div class="text">
//                        <div class="name">Dlabel安卓版</div>
//                        <div class="date">2020-04-07</div>
//                        <div class="detail">
//                            点击下载
//                                </div>
//                    </div>
//                </div>
//                <a href="javascript:;" class="btn-download">下载</a>
//            </div>
//            <a href="javascript:;" class="item">
//                <img src="http://yueqinshop.com/temp/a54a8a7e973642a6a80aa3dee35b60f9.jpg" />
//                <div class="name">佳博</div>
//            </a>
//            <a href="javascript:;" class="item">
//                <div class="name">
//                    2020报错
//                    </div>
//                <div class="read"><span class="number">0</span>人阅读</div>
//                <div class="date">2020-04-10</div>
//            </a>

//'data': [{
//    'type': 1,
//    'id': 1,
//    'title': 'test',
//    'pic': '/images/test.jpg',
//    'link': '/download/test.jpg',
//    'addtme': '2020-10-10 23:49:49',
//    'cnt': '1234',
//    'readtimes': 3
//}]

// 列表数据导入html
function htmlData(type) {
    var html = '';
    for (var i = 0; i < details['data'].length; i++) {
        if (1 === type) {
            html += '<div class="item flex start middle">' +
                '<div class="left flex start middle">' +
                '<div class="image">' +
                '<img src="' + url + details['data'][i]['pic'] + '"/>' +
                '</div>' + 
                '<div class="text">' +
                '<div class="name">' + details['data'][i]['title'] + '</div>' +
                '<div class="date">' + details['data'][i]['addtme'] + '</div>' +
                '<div class="detail">' + details['data'][i]['cnt'] + '</div>' +
                '</div>' +
                '</div>' +
                '<a href="javascript:;" class="btn-download">下载</a>' +
                '</div>';
        } else if (2 === type) {
            html += '<a href="javascript:;" class="item">' +
                '<img src="' + url + details['data'][i]['pic'] + '" />' +
                '<div class="name">' + details['data'][i]['title'] + '</div>' +
                '</a>';
        } else if (3 === type) {
            html += '<a href="javascript:;" class="item">' +
                '<div class="name">' + details['data'][i]['title'] + '</div>' +
                '<div class="read" > <span class="number">' + details['data'][i]['readtimes'] + '</span>人阅读</div > ' +
                '<div class="date" >' + details['data'][i]['addtme'] + '</div > ' +
                '</a>';
        }
    }

    if (details['data'].length === 0) {
        html += '<div class="no-item">没有找到相关信息</div>';
    }

    $('.results[data-tab = "' + type + '"] .items').html(html);

}

htmlData(1);
htmlData(2);
htmlData(3);