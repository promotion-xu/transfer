
function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 1920) {
    deviceWidth = 1920
  }
  if (deviceWidth <= 600) {
    deviceWidth = 600
  }
  document.documentElement.style.fontSize = (deviceWidth / 19.2) + 'px'
}
fnResize()
window.onresize = function () {
  fnResize()
}