var _this = this;
var x;
var y;
var ball;
window.onload = function (event) {
    console.log(event);
    console.log('document loaded');
    _this.ball = document.getElementById('ball');
};
document.onmousemove = function (ev) {
    _this.x = ev.clientX;
    _this.y = ev.clientY;
    ball.style.left = _this.x;
    ball.style.top = _this.y;
    console.log('X:');
};
