
function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 375) {
    deviceWidth = 375
  }
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
}
fnResize()
window.onresize = function () {
  fnResize()
}