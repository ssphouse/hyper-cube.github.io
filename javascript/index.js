function init() {
  initButtons();
  hover();
}

function initButtons() {
  $('h3').click(function() {
    switch(this.classList[0]) {
      case "to-front":
        $("#cube").toggleClass("show-front");
        break;
      case "to-back":
        $("#cube").toggleClass("show-back");
        break;
      case "to-left":
        $("#cube").toggleClass("show-left");
        break;
      case "to-right":
        $("#cube").toggleClass("show-right");
        break;
      case "to-top":
        $("#cube").toggleClass("show-top");
        break;
      case "to-bottom":
        $("#cube").toggleClass("show-bottom");
        break;
    }
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
