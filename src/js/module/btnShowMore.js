function btnShowMore() {
    const btn = $(".category__show-more")
    if (btn) {
        btn.click(function () {
            let main = $(".category__main ")
            if ( main.hasClass('category__main_hidden')) {
                btn.text("Показать больше")
                main.removeClass("category__main_hidden")
            } else {
                main.addClass('category__main_hidden')
                btn.text("Скрыть")
            }
        })
    }
}

export default btnShowMore
