function productCardCounter() {
    const btnInc = $('.product-card__price_inc')
    const btnDec = $('.product-card__price_dec')
    const counter = $('.product-card__price_counter')
    let count = 1

    if (btnDec && btnInc && counter) {
        btnDec.click(function () {
            if (count > 1) {
                --count
                counter.text(count)
            }
        })

        btnInc.click(function () {
            ++count
            counter.text(count)
        })
    }
}

export default productCardCounter