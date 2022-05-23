function categoryDropItem() {
    const categoryTitle = $(".category__filter_item")

    if (categoryTitle) {
        categoryTitle.on('click',function () {
            const dropElem = $(this).next()
            dropElem.toggle("visible")
            $(this).children().toggleClass('rotate')
        })
    }
}

export default categoryDropItem