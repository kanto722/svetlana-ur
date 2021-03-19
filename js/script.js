function openDrop(el) {
    $(el).find('.unknow-drop').addClass('unknow-drop__active');
    $(el).find('.rotate').addClass('rotate__active');

}
$(document).mouseup(function (e) {
var container = $(".unknow-drop");
if (container.has(e.target).length === 0){
    $('.unknow-drop').removeClass('unknow-drop__active');
    $('.rotate').removeClass('rotate__active');
}
});
$(document).ready(function() {
    $(".fancybox").fancybox();
});

function openPopup() {
    $('.popup').addClass('popup__active');
    $('body').addClass('popup-active')
    $(document).mouseup(function (e) {
        var container = $(".popup");
        if (container.has(e.target).length === 0){
            $('.popup').removeClass('popup__active');
            $('body').removeClass('popup-active')
        }
    });
}

