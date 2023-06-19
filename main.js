var text_1 = "WELCOME to AI DJ webapp where you can play DJ using your hands in front of your camera";
var text_2 = text_1 + " Note:- Put your left hand in front of camera to play birthday song and right hand to play Harry Potter tittle song";

harry_music = "";
birthday_music = "";

function preload() {
    harry_music = loadSound("harry_potter_music.mp3");
    birthday_music = loadSound("happy_birthday_song.mp3");
}

function welcome() {
    window.alert(text_1);
    console.log(text_1);
}

function wel_note () {
    window.alert(text_2);
    console.log(text_2);
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}