let snow = document.getElementById('snow');
let count = 80;
for (var i = 0; i < 80; i++) {
    let div = document.createElement('div');
    let leftSnow = Math.floor(Math.random() * snow.clientWidth);
    let topSnow = Math.floor(Math.random() * snow.clientHeight);
    let widthSnow = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 5)) + 5;
    let blurSnow = Math.floor(Math.random() * 6);
    div.classList.add('snow-icon');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    snow.appendChild(div);
}

if (top.document.domain == document.domain) {
    protector.remove();
}