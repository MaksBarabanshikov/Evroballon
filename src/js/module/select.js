function select() {
    const select = $('.product-card__price_drop')

    if (select) {
        select.click(function (event) {
            const selected = $(this).find('span')
            const icon = $(this).find('i')
            const dropElem = $(this).find('.product-card__price_drop-list')
            const dropItem = $(this).find('.product-card__price_drop-item')

            if (!event.target.closest('.product-card__price_drop-list')) {
                dropElem.css({"margin-top": "10px"})
                dropElem.slideToggle()
                icon.toggleClass('rotate')
            }

            dropItem.click(function () {
                selected.text($(this).text().trim())
                icon.removeClass('rotate')
                dropElem.css({"margin-top": "0px"})
                dropElem.slideUp()
                dropItem.off('click')
            })

        })
    }
}

export default select