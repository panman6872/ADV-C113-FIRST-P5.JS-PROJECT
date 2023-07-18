function preload() {
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO)
    video.hide();
}

function draw() {
image(video, 130 , 100, 390 , 300)

    fill('green');
    stroke(0, 100 , 0)
    rect(73, 120, 55, 260);
    rect(523, 120, 55, 260);
    rect(100, 70, 460, 55);
    rect(100, 375, 460, 55);
    fill('red')
    circle(550, 400, 70);
    circle(550, 100, 70);
    circle(100, 100, 70);
    circle(100, 400, 70);
}
