function init() {
  hover();
}
function hover() {
  document.onmousemove = function(event) {
    cube = document.getElementById("cube").children;
    for (i = 0; i < cube.length; i++) {
    }
  }
}
init();
