function init() {
  initCube();
}

function initCube() {
  $(document).ready(function() {
    changeSides();
    changeSubtitle();
  })

  /* Hover Effect: Rotate cube to track mouses
  $(document).on("mousemove", function(event) {
    var ax = -($(window).innerWidth()/2- event.pageX)/30;
    var ay = ($(window).innerHeight()/2- event.pageY)/55;
    $('#cube').attr("style", "transform: rotateY("+ax+"deg) translateX(-50%) rotateX("+ay+"deg);" +
      "-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);" +
      "-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
  });
  */
}

// Control which side we want facing
function changeSides() {
  $('.nav-item').click(function() {
    switch($(this).attr('class')) {
      case 'nav-item to-front':
        $('#cube').attr('class', 'show-front');
        $('#body-overlay').css('background', 'rgba(255,255,255,0.5)');
        $('.front-overlay').css('background', 'rgba(142, 68, 140, 0.85)');
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
        break;
    }
  });
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

/*
 * Create an amount of particles on screen
 * Positions are random. opacity is random to give sense of depth
 * Todo: Move particle related stuff to another file
 */
function initParticles() {
  var height = $(window).height();
  var width = $(window).width();

  var particleCount = 300;
  for(var i = 0; i < particleCount; i++) {
    $('.particle-container').append(
      '<span class="particles" style="top: ' + rand(1, height) + 'px; ' +
      'left: ' + rand(1, width) +
      'px; "</span>'
    );
  }
}

function moveParticle() {
  setInterval(function() {
    $('.particles').each(function() {
      var x = parseInt($(this).css('top').slice(0, -2)) + parseInt(rand(1, 100));
      var y = parseInt($(this).css('left').slice(0, -2)) + parseInt(rand(-30, 100));
      $(this).stop(true, false);
      $(this).css('top', x.toString() + 'px');
      $(this).css('left', y.toString() + 'px');
    });
  }, 4000);
}

function changeParticleColor() {
  setInterval(function() {
    $('.particles').each(function() {
      var red = rand(45, 60);
      var green = rand(20, 30);
      var blue = rand(55, 35);
      var opacity = rand(0.4, 0.85, true);
      $(this).css('background-color', `rgba(${red}, ${green}, ${blue}, ${opacity})`);
    });
  }, 6000);
}

function rand(start, end, decimal=false) {
  var result;
  decimal ?
    result = (Math.random() * end).toFixed(2) :
    result = Math.floor((Math.random() * end) + start);
  return result.toString();
}

init();
