var $btn = document.getElementById('btnScreenShot');
$btn.addEventListener('mousedown', onScreenShotClick);


function onScreenShotClick(ev){ //스크린샷 기능
  html2canvas(document.querySelector("#capture")).then(function(canvas) {
    document.getElementById('img-out').appendChild(canvas);
  });
}