function init() {
  initParticles();
  changeParticleColor();
  changeSides();
  changeSubtitle();
  moveParticle();
}

// Create an amount of particles on screen
// Positions are random. opacity is random to give sense of depth
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

function rand(start, end, decimal=false) {
  var result;
  decimal ?
    result = (Math.random() * end).toFixed(2) :
    result = Math.floor((Math.random() * end) + start);
  return result.toString();
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
