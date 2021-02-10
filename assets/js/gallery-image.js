$(document).ready(function() {
    var slideGallery = $(".lightgallery").lightSlider({
        gallery: true,
        loop: true,
        auto: true,
        controls: false,
        slideMove: 1,
        slideMargin: 24,
        pauseOnHover: true,
        pager: false,
        enableDrag: false,
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '.lightgallery .lslide',
                mousewheel: false,
                pager: false,
                download: false,
                counter: false,
                fullScreen: false,
                thumbnail: false,
                animateThumb: false,
                showThumbByDefault: false,
                zoom: false,
                autoplayControls: false,
                share: false
            });
        },
        responsive : [
            {
                breakpoint:768,
                settings: {
                    enableDrag: true
                  }
            }
        ]
    });
    $('.arrow-prev--gallery').click(function() {
        slideGallery.goToPrevSlide();
    });

    $('.arrow-next--gallery').click(function() {
        slideGallery.goToNextSlide();
    });
});