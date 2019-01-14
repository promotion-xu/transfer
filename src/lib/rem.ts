
const baseSize = 100; // 750 100
function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 375) {
    deviceWidth = 375
  }
  document.documentElement.style.fontSize = baseSize * (deviceWidth / 750) + 'px'
}
fnResize()
window.onresize = function () {
  fnResize()
}