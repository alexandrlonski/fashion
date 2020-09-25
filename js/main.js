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
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },



  })
  var mySwiper = new Swiper('.swiper-reviews', {
    // Optional parameters
    slidesPerView: 1,

    loop: true,
    // Navigation arrows

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },



  })
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",

      messages: {

        email: {
          required: "We need add your email",
          email: "Email format name@domain.com",
        },

      },
    });
  });
  $(function () {
    $('.lazy').Lazy();
  });
});