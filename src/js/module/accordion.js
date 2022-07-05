function myAccordion() {
    const accordion = $(".category__catalog_accordion-item")
    if (accordion) {
        accordion.children('h4').on('click', function () {
            const item = $(this).parent()
            if (item.hasClass('active')) {
                return item.removeClass('active')
            }
            accordion.removeClass('active')
            item.addClass('active')
        })
    }
}

export default myAccordion