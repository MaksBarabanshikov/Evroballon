const ScrollHeader = () => {
    let header = $(".header");

    $(window).scroll(() => {
        let scroll = $(document).scrollTop();

        if (scroll !== 0) {
            header.addClass('scrolled');
        } else {
            header.removeClass("scrolled");
        }
    });
}

export default ScrollHeader