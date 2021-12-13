function preload(){
    mousey = loadImage("https://i.postimg.cc/Y0G27Jdv/Mouse.png");
}


function setup() {
    canvas = createCanvas(500, 350);
    canvas.position(530, 250);
    video = createCapture(VIDEO);
    video.size(500, 350);
    video.hide();

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initalized!');
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x-15;
        NoseY = results[0].pose.nose.y-15;
        console.log("nose X = " + NoseX);
        console.log("nose y = " + NoseY);
    }
}


function draw() {
    image(video, 0, 0, 500, 350);
}

function take_snapshot() {
    save('MyLiptastauchPiccy.png');
}

function Moustach() {
    var Mouse = 100;
    console.log("Moustach Filter Added");
}

function Lips() {
    var Stick = 200;
    console.log("Lips Filter Added");
}

function Both() {
    var Moip = 300;
    console.log("Both Filters Added");
}