!function(){"use strict";(function(){const o=$(".dropdown_btn"),s=$(".dropdown__header"),e=$(".app-wrapper"),t=$("body");o.click((function(){s.toggle("visible"),e.toggleClass("shadowed-wrap"),t.toggleClass("overflow-hidden")})),$(document).mouseup((function(o){s.is(":visible")&&null===o.target.closest(".dropdown-menu")&&null===o.target.closest(".dropdown_btn")&&(s.toggle("visible"),e.toggleClass("shadowed-wrap"),t.toggleClass("overflow-hidden"))}))})(),function(){const o=$(".header__mobile_humb");o.click((function(){o.toggleClass("open"),$(".header__mobile").toggleClass("open"),$(".header__mobile_submenu").toggleClass("open"),$("body").toggleClass("overflow-hidden")}))}(),(()=>{const o=$(".header"),s=$(".header__top"),e=$(".header__list");$(document).scrollTop()>=100?o.addClass("scrolled"):o.removeClass("scrolled"),$(window).scroll((()=>{$(document).scrollTop()>=100?(o.addClass("scrolled"),s.slideUp(500),e.hide()):(o.removeClass("scrolled"),s.slideDown(500),e.show())}))})(),function(){const o=$(".big-slide"),s=$(".slick-response"),e=$(".slick__mobile"),t=$(".slick__novelties"),i=$(".slick__reviews");o&&o.slick({dots:!0,fade:!0,lazyLoad:"ondemand",autoplay:!0}),s&&s.slick({lazyLoad:"ondemand",dots:!0,slidesToShow:8,slidesToScroll:1,autoplay:!0,responsive:[{breakpoint:1400,settings:{dots:!0,slidesToShow:6,slidesToScroll:1}},{breakpoint:1200,settings:{dots:!0,slidesToShow:5,slidesToScroll:1}},{breakpoint:1e3,settings:{dots:!1,slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{dots:!1,slidesToShow:3,slidesToScroll:1}},{breakpoint:576,settings:{dots:!1,slidesToShow:2,slidesToScroll:1}}]}),e&&function(){const o={lazyLoad:"ondemand",dots:!0,adaptiveHeight:!0};$(window).width()<=992&&e.slick(o),$(window).resize((function(){const s=document.querySelector(".benefits");s&&($(window).width()<=992?s.querySelector(".slick-initialized")||e.slick(o):s.querySelector(".slick-initialized")&&e.slick("unslick"))}))}(),t&&t.slick({lazyLoad:"ondemand",dots:!1,slidesToShow:4,slidesToScroll:4,autoplay:!0,responsive:[{breakpoint:992,settings:{dots:!0,slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{dots:!0,slidesToShow:2,slidesToScroll:2}}]}),s&&i.slick({lazyLoad:"ondemand",dots:!1,slidesToShow:2,slidesToScroll:2,responsive:[{breakpoint:1e3,settings:{dots:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:992,settings:{dots:!0,slidesToShow:1,slidesToScroll:1}}]})}(),function(){const o=$(".category__show-more");o&&o.click((function(){let s=$(".category__main ");s.hasClass("category__main_hidden")?(o.text("Показать больше"),s.removeClass("category__main_hidden")):(s.addClass("category__main_hidden"),o.text("Скрыть"))}))}(),function(){const o=$(".category__filter_item");o&&o.on("click",(function(){$(this).next().slideToggle(),$(this).children().toggleClass("rotate")}))}(),function(){const o=$(".category__filter_btn"),s=$(".category__filter");o&&s&&o.on("click",(function(){s.toggle("visible")}))}(),function(){let o=$(".tab-pane"),s=$(".nav .nav-link");o&&s&&s.click((function(){return o.removeClass("active show"),o.filter(this.hash).addClass("active show"),s.removeClass("active"),$(this).addClass("active"),!1}))}(),function(){const o=$(".product-card__price_inc"),s=$(".product-card__price_dec"),e=$(".product-card__price_counter");let t=1;s&&o&&e&&(s.click((function(){t>1&&(--t,e.text(t))})),o.click((function(){++t,e.text(t)})))}(),function(){const o=$(".product-card__price_drop");o&&o.click((function(o){const s=$(this).find("span"),e=$(this).find("i"),t=$(this).find(".product-card__price_drop-list"),i=$(this).find(".product-card__price_drop-item");o.target.closest(".product-card__price_drop-list")||(t.css({"margin-top":"10px"}),t.slideToggle(),e.toggleClass("rotate")),i.click((function(){s.text($(this).text().trim()),e.removeClass("rotate"),t.css({"margin-top":"0px"}),t.slideUp(),i.off("click")}))}))}()}();