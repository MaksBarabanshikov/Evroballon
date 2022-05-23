const ScrollHeader = () => {
    let header = $(".header");
    let scrollIn = $(document).scrollTop();
    scrollIn !==0? header.addClass('scrolled'): header.removeClass("scrolled")
    $(window).scroll(() => {
        let scroll = $(document).scrollTop();

        if (scroll !== 0) {
            header.addClass('scrolled')
        } else {
            header.removeClass("scrolled")
        }
    });
}

export default ScrollHeader