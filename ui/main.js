console.log('Loaded!');

var img = document.getElementById('bullet');
var marginLeft=o;
function moveright() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
  var interval = setinterval(moveRight,100);
};