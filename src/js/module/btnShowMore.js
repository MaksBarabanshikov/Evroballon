function btnShowMore() {
    const btn = $(".category__show-more")
    btn.click(function () {
        let main = $(".category__main ")
        if ( main.height() === 638) {
            main.css({"maxHeight": "2000px"})
            btn.text("Скрыть")
        } else {
            main.css({"maxHeight": "638px"})
            btn.text("Показать больше")
        }
    })
}

export default btnShowMore
