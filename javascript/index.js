function init() {
  initButtons();
  changeSubtitle();
  hover();
}

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

function subtitleFade(subText) {
  $('#subtitle').stop(true,false).fadeTo();
  $('#subtitle').fadeTo(200, 0.01, function() {
    $('#subtitle').text(subText);
    $('#subtitle').fadeTo(200, 1);
  });
}

function changeSubtitle() {
  $('#social a').mouseenter(function() {
    subtitleFade($(this).children().attr("alt"));
  });
  $('#social a').mouseleave(function() {
    subtitleFade("Front-End Developer");
  });
}

function hover() {
  document.onmousemove = function(event) {
    cube = document.getElementById("cube").children;
    for (i = 0; i < cube.length; i++) {
    }
  }
}


init();
