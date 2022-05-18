function btnHumb() {
    const btn = $('.header__mobile_humb')
    btn.click(function () {
        btn.toggleClass('open')
        $('.header__mobile').toggleClass('open')
        $('.header__mobile_submenu').toggleClass('open')
        $('body').toggleClass('overflow-hidden')
    })
}

export default btnHumb