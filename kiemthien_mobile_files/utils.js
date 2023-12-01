function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

$(function() {
    $('#toggle-right-menu').on('click', function() {
        // $('#home-right-menu').slideToggle();
        $('#home-right-menu').toggleClass('hide-by-slide-right', 'stick-to-right');
        // flip << arrow
        if ($('#home-right-menu').hasClass('hide-by-slide-right')) {
            $("#toggle-right-menu").attr('style', "background-image: url('./kiemthien_mobile_files/media/img/_sprites-aside-3.png'); background-position: -80px -167px;");
        } else {
            $("#toggle-right-menu").attr('style', "background-image: url('./kiemthien_mobile_files/media/img/_sprites-aside-3.png'); background-position: -110px -167px;");
        }
    });
});