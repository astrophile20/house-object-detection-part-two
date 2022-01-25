stat = "";
img = "";

function setup() {
    canvas = createCanvas(650, 650);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("object-status").innerHTML = "Status: Detecting Objects";
}

function preload() {
    img = loadImage("TV.jpg");
}

function draw() {
    image(img, 0, 0, 650, 650);
    // fill("#FF0000");
    // text("Dog", 100, 100);
    // noFill();
    // stroke("#FF0000");
    // rect(100, 100, 500, 510);

    // fill("#FF0000");
    // text("Cat", 300, 120);
    // noFill();
    // stroke("#FF0000");
    // rect(300, 125, 250, 510);
}

function modelLoaded() {
    console.log("Model Loaded");
    stat = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}