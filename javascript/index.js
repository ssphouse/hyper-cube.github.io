function init() {
  initParticles();
  changeSides();
  changeSubtitle();
}

// Create an amount of particles on screen
function initParticles() {
  var height = $(window).height();
  var width = $(window).width();

  var particleCount = 500;
  for(var i = 0; i < particleCount; i++) {
    $('.particle-container').append(
      '<span class="particles" style="top: ' + rand(1, height) + 'px; ' +
      'left: ' + rand(1, width) +
      'px; background-color: rgba(23, 27, 39,'+ rand(0.4, 0.8, true) + ')"</span>'
    );
  }
}

// Get a random number from a set of values and return it as a string
function rand(start, end, decimal=false) {
  var result;
  decimal ?
    result = (Math.random() * end).toFixed(2) :
    result = Math.floor((Math.random() * end) + start);
  return result.toString();
}

// Control which side we want facing
function changeSides() {
  $('button').click(function() {
    switch(this.classList[0]) {
      case 'to-front':
        $('#cube').attr('class', 'show-front');
        break;
      case 'to-back':
        $('#cube').attr('class', 'show-back');
        break;
      case 'to-left':
        $('#cube').attr('class', 'show-left');
        break;
      case 'to-right':
        $('#cube').attr('class', 'show-right');
        break;
      case 'to-top':
        $('#cube').attr('class', 'show-top');
        break;
      case 'to-bottom':
        $('#cube').attr('class', 'show-bottom');
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
  $('#social a').mouseenter(function() {
    subtitleFade($(this).children().attr('alt'));
  });
  $('#social a').mouseleave(function() {
    subtitleFade('Front-End Developer');
  });
}

init();
