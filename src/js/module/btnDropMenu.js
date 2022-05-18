function btnDropMenu() {
    $('.dropdown_btn').click(function() {
        $('.dropdown__header').toggle('visible')
        $('.app-wrapper').toggleClass('shadowed-wrap')
        $('body').toggleClass('overflow-hidden')
    })
}

export default btnDropMenu