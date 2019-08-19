$(function(){
  let swiper = new Swiper ('.swiper-container',{
  loop:true,
  slidesPerView: 3,
  // centeredSlides: true,
  // initialSlide: 1,
  autoplay: {
    delay: 5000,
  },

  // effect: 'cube',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    960: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }

  });

   //ドロワーメニュー
   $('.js-hamburger').on('click', function(){
    if($(this).hasClass('on')){
      $('#drower-bg').fadeOut(600);
    }else{
      $('#drower-bg').fadeIn(600);
    }
    $(this).toggleClass('on');
    $('.js-drower').toggleClass('on');
  });

  $('#drower-bg').on('click', function(){
    if($('.js-hamburger').hasClass('on')){
      $(this).fadeOut(600);
      $('.js-hamburger').toggleClass('on');
      $('.js-drower').toggleClass('on');
    }
  });

  $('#hoge').on('click', function(){
  return false;
  });

  //新規登録、ログインでモーダル
  $('.js-register, .js-login').on('click', function(){
    let btn = $('#js-modal-form-btn');
    if($(this).hasClass('js-register')){
      btn.text('登録');
      // textContentと一緒
      btn.removeClass('login').addClass('register');
    }else{
      btn.text('ログイン');
      // textContentと一緒
      btn.removeClass('register').addClass('login');
    }
    $('#modal-bg').fadeIn(600);
    $('.modal-content').fadeIn(800);
  });
  // モーダルを閉じる
  $('.js-modal-close').on('click', function() {
    $('#modal-bg').fadeOut(800);
    $('.modal-content').fadeOut(600);
  });
});