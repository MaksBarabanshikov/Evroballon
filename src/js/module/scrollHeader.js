const ScrollHeader = () => {
    const header = $(".header");
    const headerTop = $(".header__top")
    const headerList = $(".header__list")
    let scrollIn = $(document).scrollTop();
    scrollIn >= 100? header.addClass('scrolled'): header.removeClass("scrolled")
    $(window).scroll(() => {
        let scroll = $(document).scrollTop();

        if (scroll >= 100) {
            header.addClass('scrolled')
            headerTop.slideUp(500)
            headerList.hide()
        } else {
            header.removeClass("scrolled")
            headerTop.slideDown(500)
            headerList.show()
        }
    });
}

export default ScrollHeader