var menu = [{
    title: 'Family',
    subtitle: ['施工中....', '施工中....', '施工中....', '施工中....']
}, {
    title: 'Father',
    subtitle: ['杨 辉', 'IT', '施工中....', '施工中....']
}, {
    title: 'Mother',
    subtitle: ['张 丽', 'Teacher', '施工中....', '施工中....']
}, {
    title: 'Daughte',
    subtitle: ['杨菜菜', 'Baby', '施工中....', '施工中....']
}]
renderMenu(menu)

function renderMenu(menu) {
    var lis = ''
    const deg = 90
    var p2 = document.getElementById('p2')
    for (var i = 0; i < menu.length; i++) {
        var sublis = ''
        var rotateDeg = deg / menu.length
        for (var j = 0; j < menu[i].subtitle.length; j++) {
            var subrotateDeg = deg / menu[i].subtitle.length
            var lineHeight = 600 / menu[i].subtitle.length + 40
            sublis += '<li>' +
                '<a style="transform: rotate(' + (subrotateDeg * j) + 'deg);line-height:' + lineHeight + 'px" href="javascript:;">' +
                '<span>' + menu[i].subtitle[j] + '</span>' +
                '</a>' +
                '</li>'
        }
        var ul = ' <ul class="p3 a' + menu[i].subtitle.length + '">' + sublis + '</ul>'
        lis += '<li class="s2">' +
            '<a style="transform: rotate(' + (rotateDeg * i) + 'deg);" href="javascript:;"><span>' + menu[i].title + '</span></a>' +
            '' + ul + '' +
            '</li>'
    }
    p2.innerHTML = lis
}