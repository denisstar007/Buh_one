// Слайдер
$(document).ready(function(){
   $(function() {
      $('.slider').slick({
         arrows: true,
         dots: true,
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 1000,
         initialSlider: 0,
         autoplay: false,
         autoplaySpeed: 3000,
         draggable: true,
         swipe: true,
       });
   });

   // Модалные окна
   const modalBackground = $(".madal__bg");
   const closeModal = (e) => {
      modalBackground.removeClass("active");
      $(".modal.active").removeClass("active");
   };

   const sliderModal = $(".content__slider .modal");

   $(".content__slider .slider .btn").on("click", () => {
      sliderModal.addClass("active");
      modalBackground.addClass("active");
   });

   const galleryModal = $(".gallery .modal");

   $(".gallery .gallery__inner img").on("click", () => {
      galleryModal.addClass("active");
      modalBackground.addClass("active");
   });

   modalBackground.on("click", closeModal);

   $(".modal .madal__close").on("click", closeModal);


   $(document).ready(function() {
      $(".accordion-item__trigger").click(function(){
         $(this).parent().toggleClass("accordion-item-active").sliderUp();
      });
   });

});


document.addEventListener('DOMContentLoaded', function(){
      // Яндекс карта
   ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 12,
            controls: ['zoomControl'],
            behaviors: ['drag']
         }, {
            searchControlProvider: 'yandex#search'
         }),

         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
         ),

         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Компания BuhOne',
            balloonContent: 'Бухгалтерские услуги'
         }, {

            iconLayout: 'default#image',
            iconImageHref: '../img/icon.png',
            iconImageSize: [60, 60],
            iconImageOffset: [40, -60]
         }),

         myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Компания BuhOne',
            balloonContent: 'Бухгалтерские услуги',
            iconContent: '12'
         });

      myMap.geoObjects
         .add(myPlacemark)
         .add(myPlacemarkWithContent);
   });

   // Бургер меню
   let burger = document.querySelector('.burger');
   let navUl = document.querySelector('.nav__ul');

   burger.addEventListener('click', function() {
      navUl.classList.toggle('show');
      burger.classList.toggle('activ');
   });
});

