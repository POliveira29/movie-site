$(".slide-movies").slick({
    arrows: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,

            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 426,
            settings: {
                arrows: false,
                slidesToShow: 2,
                adaptiveHeight: true
            }
        }
    ]
});