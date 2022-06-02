function priceListTabs() {
    let tab = $('.tab-pane')
    let tabNav = $('.nav .nav-link')

    if (tab && tabNav) {
        tabNav.click(function () {
            tab.removeClass('active show')
            tab.filter(this.hash).addClass('active show')
            tabNav.removeClass('active')
            $(this).addClass('active')
            return false
        })
    }

}

export default priceListTabs