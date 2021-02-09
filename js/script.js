(function ($) {
  "use strict";

  //meanMenu

  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
  });

  //OwlCarsousel

  $(".brand-active").owlCarousel({
    nav: true,
    navText: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  // data background

  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });
  $("[data-bg-color]").each(function () {
    $(this).css("background", $(this).attr("data-bg-color"));
  });

  // Counter UP

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Magnify PopUp
  $(".project-popup").magnificPopup({
    type: "image",
  });

  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  // slick slider
  $(".testimonails-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".testimonials-img-active",
  });
  $(".testimonials-img-active").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".testimonails-active",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    arrows: false,
  });

  // mainSlider
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: false,
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();
})(jQuery);
