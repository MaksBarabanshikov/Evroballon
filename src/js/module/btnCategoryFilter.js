function btnCategoryFilter() {
    const btn = $(".category__filter_btn")
    const filter = $(".category__filter")
    if (btn && filter) {
        btn.on("click", function () {
            filter.toggle("visible")
        })
    }

}

export default btnCategoryFilter