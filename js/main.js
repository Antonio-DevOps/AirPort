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
  // =====================Slider===================
  $('.sliderNewsforTravel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    centerPadding: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.StoreDuty').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  
