function sliderSettings() {
    function bigSlide() {
        $('.big-slide').slick({
            dots: true,
            fade: true,
            lazyLoad: 'ondemand',
            autoplay: true
        })
    }
    function slickResponse() {
        $('.slick-response').slick({
            lazyLoad: 'ondemand',
            dots: true,
            slidesToShow: 8,
            slidesToScroll: 8,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        dots: true,
                        slidesToShow: 6,
                        slidesToScroll: 6,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        dots: true,
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        dots: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
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
            $(".slick__mobile").slick(settings):
            null

        $(window).resize(function() {
            if($(window).width() <= 992) {
                $(".slick__mobile").slick(settings)
            } else {
                $('.slick__mobile').slick('unslick')
                console.log($(".slick__mobile").slick)
            }
        })


    }
    function slickNovelties() {
        $('.slick__novelties').slick({
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
        $('.slick__reviews').slick({
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

    bigSlide()
    slickResponse()
    slickMobileBigCard()
    slickNovelties()
    slickReviews()
}

export default sliderSettings