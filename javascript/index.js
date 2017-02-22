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

function changeSubtitle() {
  $('#social a').mouseenter(function() {
    var link = this;
    $('#subtitle').fadeTo(200, 0.01, function() {
      $('#subtitle').text($(link).children().attr("alt"));
      $('#subtitle').fadeTo(200, 1);
    });
  })
  $('#social a').mouseleave(function() {
    $('#subtitle').fadeTo(200, 0.01, function() {
      $('#subtitle').text("Front-End Developer");
      $('#subtitle').fadeTo(200, 1);
    });
  })
}

function hover() {
  document.onmousemove = function(event) {
    cube = document.getElementById("cube").children;
    for (i = 0; i < cube.length; i++) {
    }
  }
}


init();
