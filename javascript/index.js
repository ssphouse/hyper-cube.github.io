function init() {
  initButtons();
  changeSubtitle();
}

// Control which side we want facing
function initButtons() {
  $('button').click(function() {
    switch(this.classList[0]) {
      case "to-front":
        $("#cube").attr('class', "show-front");
        break;
      case "to-back":
        $("#cube").attr('class', "show-back");
        break;
      case "to-left":
        $("#cube").attr('class', "show-left");
        break;
      case "to-right":
        $("#cube").attr('class', "show-right");
        break;
      case "to-top":
        $("#cube").attr('class', "show-top");
        break;
      case "to-bottom":
        $("#cube").attr('class', "show-bottom");
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
    subtitleFade($(this).children().attr("alt"));
  });
  $('#social a').mouseleave(function() {
    subtitleFade("Front-End Developer");
  });
}

init();
