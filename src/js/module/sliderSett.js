function sliderSettings() {
    const bigSlider = $('.big-slide')
    const sliderResponse = $('.slick-response')
    const sliderMobile =  $(".slick__mobile")
    const sliderNovelties = $('.slick__novelties')
    const sliderReviews = $('.slick__reviews')

    function bigSlide() {
        bigSlider.slick({
            dots: true,
            fade: true,
            lazyLoad: 'ondemand',
            autoplay: true
        })
    }
    function slickResponse() {
        sliderResponse.slick({
            lazyLoad: 'ondemand',
            dots: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        dots: true,
                        slidesToShow: 6,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        dots: true,
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        dots: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }
    function slickMobileBigCard() {
        const settings = {
            lazyLoad: 'ondemand',
            dots: true,
            adaptiveHeight: true
        }
        $(window).width() <= 992?
           sliderMobile.slick(settings):
            null

        $(window).resize(function() {
            const slider = document.querySelector('.benefits')
            if (slider) {
                if($(window).width() <= 992) {
                    if (!slider.querySelector('.slick-initialized')) {
                        sliderMobile.slick(settings)
                    }
                } else {
                    if (slider.querySelector('.slick-initialized')) {
                        sliderMobile.slick('unslick')
                    }
                }
            }
        })


    }
    function slickNovelties() {
        sliderNovelties.slick({
            lazyLoad: 'ondemand',
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        })
    }
    function slickReviews() {
        sliderReviews.slick({
            lazyLoad: 'ondemand',
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        })
    }

    if (bigSlider) {
        bigSlide()
    }

    if (sliderResponse) {
        slickResponse()
    }

    if (sliderMobile) {
        slickMobileBigCard()
    }

    if (sliderNovelties) {
        slickNovelties()
    }

    if (sliderResponse) {
        slickReviews()
    }
}

export default sliderSettings