function btnDropMenu() {
    const btn = $('.dropdown_btn')
    const dropHead = $('.dropdown__header')
    const appWrap = $('.app-wrapper')
    const body = $('body')

    btn.click(function () {
        dropHead.toggle('visible')
        appWrap.toggleClass('shadowed-wrap')
        body.toggleClass('overflow-hidden')
    })
    $(document).mouseup(function (e) {
        if (dropHead.is(":visible")) {
            if (e.target.closest('.dropdown-menu') === null && e.target.closest('.dropdown_btn') === null){
                dropHead.toggle('visible')
                appWrap.toggleClass('shadowed-wrap')
                body.toggleClass('overflow-hidden')
            }
        }
    });
}

export default btnDropMenu