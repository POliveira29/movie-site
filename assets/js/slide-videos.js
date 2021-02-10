$(".movie-videos__slide").slick({
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 426,
            settings: {
                mobileFirst: true,
                slidesToShow: 1,
                centerMode: true,
                arrows: false
            }

        }
    ]
});
$(".video-link").modalVideo();