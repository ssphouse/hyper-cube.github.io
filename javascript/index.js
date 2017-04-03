function init() {
  initCube();
  projectHover();
}

function initCube() {
  $(document).ready(function() {
    changeSides();
    changeSubtitle();
  })
  $('h1').click(function() {
    $('#right-side-content').css('display', 'flex');
  });
}

// Control which side we want facing
function changeSides() {
  $('.nav-item').click(function() {
    $('.content-container').css('display', 'none');
    $('.text-box').css('opacity', '0');
    switch($(this).attr('class')) {
      case 'nav-item to-front':
        $('#cube').attr('class', 'show-front');
        $('#body-overlay').css('background', 'rgba(255,255,255,0.5)');
        $('.front-overlay').css('background', 'rgba(142, 68, 140, 0.85)');
        $('#front-side-content').css('display', 'flex');
        break;
      case 'nav-item to-left':
        $('#cube').attr('class', 'show-left');
        $('#body-overlay').css('background', 'rgba(155,222,230,0.5)');
        $('.front-overlay').css('background', 'rgba(142, 68, 140, 0.85)');
        break;
      case 'nav-item to-right':
        $('#cube').attr('class', 'show-right');
        $('#body-overlay').css('background', 'rgba(236, 191, 196, 0.5)');
        $('.front-overlay').css('background', 'rgba(187, 67, 115, 0.85)');
        $('#right-side-content').css('display', 'flex');
        wipeAnimation();
        break;
    }
  });
}

function wipeAnimation() {
  $('.text-overlay').animate({
    width: '0',
    left: '-30%'
  }, 0).fadeIn();
  $('.text-overlay').animate({width: '150%'}, function() {
    $('.text-box').css('opacity', '1');
  });
  $('.text-overlay').animate({left: '150%'}, 'slow').fadeOut();
}

// Fade animation for the subtitle
function subtitleFade(subText) {
  $('#subtitle').stop(true, false).fadeTo();
  $('#subtitle').fadeTo(200, 0.01, function() {
    $('#subtitle').text(subText);
    $('#subtitle').fadeTo(200, 1);
  });
}

// Change subtitle to whatever we're hovering over
function changeSubtitle() {
  $('.icon').mouseenter(function() {
    subtitleFade($(this).attr('title'));
  });
  $('.icon').mouseleave(function() {
    subtitleFade('Front-End Developer');
  });
}

// TODO: Preload images and pick one instead of changing src
// that should remove the issue where images load after the fade in
function imageFade(img) {
  $('#project-preview').stop(true, false).fadeTo();
  $('#project-preview').fadeTo(200, 0.001, function() {
    $('#project-preview').attr('src', img);
    $('#project-preview').fadeTo(700, 0.75);
  });
}

// Change the preview image based off where the link is directed
function projectHover() {
  $('.text-box').hover(function() {
    switch ($(this).parent().attr('href')) {
      case '#':
        imageFade('documents/img/projects/test2.png');
        break;
    }
  }, function() {
    imageFade('documents/img/projects/test.png');
  });
}
init();

/* Hover Effect: Rotate cube to track mouses
  $(document).on("mousemove", function(event) {
    var ax = -($(window).innerWidth()/2- event.pageX)/30;
    var ay = ($(window).innerHeight()/2- event.pageY)/55;
    $('#cube').attr("style", "transform: rotateY("+ax+"deg) translateX(-50%) rotateX("+ay+"deg);" +
      "-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);" +
      "-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
  });
  */
