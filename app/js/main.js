$(function () {
  $('.popup').on('click', function (e) {
    e.preventDefault();
    $('.popup').toggleClass('popup--active');
    $('.menu').toggleClass('menu--active');
    $('main').toggleClass('main--active');
  });

  $('.content__btn').on('click', function (e) {
    e.preventDefault();
    $('.content__top-items').toggleClass('content__top-items--active');
  });

  $('.content__top-btn').on('click', function (e) {
    e.preventDefault();
    $('.content__top-subitems').toggleClass('content__top-subitems--active');
  });

  $('.content__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.content__slider-nav',
  });

  $('.content__slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.content__slider-for',
    nextArrow:
      '<button type="button" class="slick-next"><svg class="next"><use xlink:href="images/sprite.svg#next"></use></svg></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><svg class="prev"><use xlink:href="images/sprite.svg#prev"></use></svg></button>',
    vertical: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          vertical: false,
        },
      },
      // {
      //   breakpoint: 561,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     centerPadding: '50px',
      //     slidesToShow: 1,
      //   },
      // },
      // {
      //   breakpoint: 426,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     centerPadding: '10px',
      //     slidesToShow: 1,
      //   },
      // },
    ],
  });

  $('.content__bottom-item').on('click', function () {
    $('.content__bottom-item').removeClass('.content__bottom-item--active');
    $(this).toggleClass('content__bottom-item--active');
  });

  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('.menu__link--active');
    $(this).toggleClass('.menu__link--active');
  });

  // $('.store-features__items').slick({
  //   centerMode: true,
  //   centerPadding: '0px',
  //   arrows: false,
  //   slidesToShow: 4,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1201,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '10px',
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '10px',
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 561,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '50px',
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 426,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '10px',
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });
});
