
const baseSize = 100; // 750 100
function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 1920) {
    deviceWidth = 1920
  }
  if (deviceWidth <= 800) {
    deviceWidth = 800
  }
  document.documentElement.style.fontSize = baseSize * (deviceWidth / 1920) + 'px'
}
fnResize()
window.onresize = function () {
  fnResize()
}