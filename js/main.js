// ===========================================changebackground===========================================
$(function(){  
  var i =0;
  var images = ['../img/imeg0.jpg','../img/imeg1.jpg','../img/imeg2.jpg','../img/imeg3.png','../img/imeg4.png','../img/imeg5.jpg'];
  var image = $('#sectionTablo');
  // image.css('background-image', 'url(/img/imeg1.jpg)');
  setInterval(function(){  
      image.fadeOut(1000, function () {
          image.css('background-image', 'url(' + images[i] +')');
          image.fadeIn(1000);
      });
      if(i == (images.length - 1)){
          i = 0; 
      } else {
          i++;
      }
  }, 20000);
})
// =============================================================================================
function opentab(evt, cityName) {
    var i, tabcontent, tablinks;
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
  
