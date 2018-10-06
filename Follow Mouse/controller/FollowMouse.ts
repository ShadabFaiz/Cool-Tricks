var x;
var y;

var ball;

window.onload = (event: Event) => {
    console.log(event);
    console.log('document loaded');
    this.ball =  document.getElementById('ball');
};


document.onmousemove = (ev: MouseEvent) => {
    this.x = ev.clientX; this.y =ev.clientY;
    ball.style.left = this.x;
    ball.style.top = this.y;
   console.log('X:');
};


