$(document).ready(function () {
  const mLine = $(".line-center");
  const tab = $(".tab");
  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });
  // Добавляем menu-button
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".header__right")
      .classList.toggle("header__right__visible");
  });
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".line-center")
      .classList.toggle("line-center-active");
  });
  // закрыть окно с промощью Esc
  document.addEventListener("keydown", function (closeModal) {
    if (closeModal.keyCode === 27) {
      var listNavigation = $(".header__right");
      listNavigation.removeClass("header__right__visible");
      var lineCenter = $(".line-center");
      lineCenter.removeClass("line-center-active");
    }
  });

  // слайдер

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters

    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.story__button-right',
      prevEl: '.story__button-left',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 18,

        // direction: 'gorizontal',
      },
      // when window width is >= 480px
      480: {
        spaceBetween: 18,

      },
      // when window width is >= 640px
      640: {

      }
    }



  })
  var mySwiper = new Swiper('.swiper-reviews', {
    // Optional parameters
    slidesPerView: 1,

    loop: true,
    // Navigation arrows

    pagination: {
      el: '.swiper-pagination',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },



  })
  $(function () {
    $('.lazy').Lazy();
  });
});