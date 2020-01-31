$(document).ready(function(){

  $('select').stbDropdown();

  $('.flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    animationLoop: true,
    slideshowSpeed: 2000,
    startAt:0,
    itemMargin:10,
    pauseOnHover:true,
    pauseOnAction: true,
    controlNav: true,
    directionNav:false
  });

  let bigImg = $('#imgSlider');

  $('.select').on('change', function(){
    let certainHouse = $(this).val();
    if (certainHouse !== "") {
      bigImg.flexslider('stop');
      bigImg.flexslider({
        slideshow: false
      });
    }

    switch (certainHouse) {
      case 'House 1':
      bigImg.flexslider(1);
      break;
      case 'House 2':
      bigImg.flexslider(2);
      break;
      case 'House 3':
      bigImg.flexslider(3);
      break;
      case 'House 4':
      bigImg.flexslider(4);
      break;
      case 'House 5':
      bigImg.flexslider(5);
      break;
      case 'House 6':
      bigImg.flexslider(6);
      break;
      case 'House 7':
      bigImg.flexslider(7);
      break;
      case 'House 8':
      bigImg.flexslider(8);
      break;
      case 'Select':
      bigImg.flexslider('play');
    }

    bigImg.show('slow', function(){
      bigImg.flexslider(certainHouse);
    })
  });
});
