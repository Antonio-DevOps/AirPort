  // gallery
//   $(document).ready(function () {
//     $('.overlay-btn').on('click', function () {
//         let imgSrc = $(this).attr('src'),
//             $modalbtn = $('<img>');

//         $modalImage.attr('src', imgSrc);


//         $('.ba-modal-content-wrapper').append($modalImage)
//         openModal();
//     })
// });

// let openModal = function () {
//     $('.ba-modal').addClass('ba-modal--open');
//     $('body').addClass('ba-modal-is-open');

//     $(document).on('keydown', function (e) {
//         if (e.keyCode == 27) {
//             closeModal();

//         }
//     });
// }

// let closeModal = function () {
//     $('.ba-modal').removeClass('ba-modal--open');
//     $('body').removeClass('ba-modal-is-open');
//     $('.ba-modal-content-wrapper').empty();
//     $(document).off('keydown', closeModal);
// }

// $('.ba-modal-close').on('click', closeModal);


// // ==================Popup=============================

// const popupLinks = document.querySelectorAll(".overlay-btn");
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const timeout = 800;

// // timeout- должно совпадать с transition

// if (popupLinks.length > 0) {
//   for (let i = 0; i < popupLinks.length; i++) {
//     const popupLink = popupLinks[i];
//     popupLink.addEventListener("click", function(e){
//       const popupName = popupLink.getAttribute('href').replace('#', " ");
//       const curentPopup = document.getElementById(popupName);
//       popupOpen(curentPopup);
//       e.preventDefault();
//     });
//   }
// }

// const popupCloseIcon = document.querySelectorAll('.Popup-Close');
// if (popupCloseIcon.length > 0) {
//   for (let i = 0; i < popupCloseIcon.length; i++) {
//     const el = popupCloseIcon[i];
//     el.addEventListener('click', function (e) {
//       popupClose(el.closest('popup'));
//       e.preventDefault();
//     });
//   }
// }

// // =============Функция для открытия попапа через попап==========



// function popupOpen(curentPopup) {
//   if(curentPopup && unlock) {
//     const popupActive = document.querySelector('.popup.open');
//     if (popupActive) {
//       popupClose(popupActive, false);
//     } else{
//       bodyLock();
//     }
//     curentPopup.classList.add('open');
//     curentPopup.addEventListener("click", function (e){
//       if (!e.target.closest('.popup__content')) {
//         popupClose(e.target.closest('.popup'));
//       }
//     });
//   }
// }
// function popupClose(popupActive, doUnlock = true) {
//   if (unlock) {
//     popupActive.classList.remove('open');
//     if (doUnlock){
//       bodyLock();
//     }
//   }
// }
// // =======Функция для того что бы при нажатии не смещалась кнопка в права=============
// function bodyLock(){
//   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';


//     if(lockPadding.length > 0) {
//   for(let i = 0; i < lockPadding.length; i++) {
//     const el = lockPadding[i];
//     el.style.paddingRight = lockPaddingValue;
//   }
// }
//   body.style.paddingRight = lockPaddingValue;
//   body.classList.add('lock');

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }

// function bodyUnlock() {
//   setTimeout(function (){
//     if(lockPadding.length > 0) {
//     for (let i = 0; i < lockPadding.length; i++) {
//       const el = lockPadding[i];
//       el.style.paddingRight = '0px';
//     }
//   }
//     body.style.paddingRight = '0px';
//     body.classList.remove('lock');
//   },timeout);

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }

// document.addEventListener('keydown', function (e) {
//   if (e.which ===27) {
//     const popupActive = document.querySelector('.popup.open');
//     popupClose(popupActive);
//   }
// })




// //полифилы
// (function (){
//   //проверяем поддержку
//   if(!Element.prototype.closest){
//     //реализуем
//     Element.prototype.closest = function (css) {
//       var node = this;
//       while (node) {
//         if (node.matches(css)) return node;
//         else node = node.parentElement;
//       }
//       return null;
//     };
//   }
// })();
// (function () {
//   //проверяем поддержку
//   if (!Element.prototype.matches) {
//     //определяем свойство
//     Element.prototype.matches = Element.webkitMatchesSelector ||
//       Element.webkitMatchesSelector  ||
//       Element.prototype.mozMatchesSelector ||
//       Element.prototype.msMatchesSelector;
//   }
// })();






































// ===========================================changebackground===========================================
// $(function(){  
//   let i = 0;
//   let images = ['./img/imeg0.jpg','./img/imeg1.jpg','./img/imeg2.jpg','./img/imeg3.png','./img/imeg4.png','./img/imeg5.jpg'];
//   let fonts = ['#000', '#ffa500', '#ffa500', '#000', '#000', '#ffa500'];
//   let image = $('#sectionTablo');
//   let fontStyle = $('.navBar');
//   setInterval(function(){  
//       image.fadeOut(1200, function () {
//           image.css('background-image', 'url(' + images[i] + ')');
//           image.css('transition', 'opacity 900ms linear 0s');
//           image.css('opacity', '1.2');
//           image.fadeIn(1200);
//       });
//       fontStyle.fadeOut(900, function (){
//           fontStyle.css('color', fonts[i]);
//           fontStyle.fadeIn(900);
//       });
//       if(i == (images.length - 1)){
//           i = 0; 
//       } else {
//           i++;                                   fix code
//       }
//   }, 5000);
// })

// $(function(){  
//   var i = 0;
//   var images = ['./img/imeg0.jpg','./img/imeg1.jpg','./img/imeg2.jpg','./img/imeg3.png','./img/imeg4.png','./img/imeg5.jpg'];
//   var image = $('#sectionTablo');
//   // image.css('background-image', 'url(/img/imeg1.jpg)');
//   setInterval(function(){  
//       image.fadeOut(1000, function () {
//           image.css('background-image', 'url(' + images[i] + ')');
//           image.css('transition', 'opacity 900ms linear 0s');
//           image.css('opacity', '0.75');
//           fontStyle.css('color:(' + fonts[i] + ')');
//           image.fadeIn(1000);
//       });
//       if(i == (images.length - 1)){
//           i = 0; 
//       } else {
//           i++;
//       }
//   }, 3000);
// })

// $(function(){
//   let j = 0;
//   var fontStyle = $('.navBar');
//   var fonts = ['#000', '#ffa500', '#ffa500', '#000', '#000', '#ffa500'];

//   setFonts(function(){
//     fontStyle.fadeOut(1000, function (){

//     fontStyle.css('color:(' + fonts[i] + ')');

//     fontStyle.fadeIn(1000);
//     });
//     if(j ==(fonts.length - 1 )){
//       j = 0;
//     }else{
//       j++;
//     }
//   }, 3000);
// })
// =============================================================================================
function opentab(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
// =======================================================================================

let btn = document.getElementsByClassName("overlayBtn");
let Baku = document.getElementById("Baku");
let i = 0;

  // =====================Slider===================