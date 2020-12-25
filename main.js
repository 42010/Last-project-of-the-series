var canvas = fabric.Canvas("myCanvas");
var block_image_width = 30;
var block_image_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";
d
var block_image_object = "";

function player_update() {
    fabric.Image.fromUrl("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromUrl(get_image, function (Img) {
        block_image_height = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("keyPressed");
    if (e.shiftKey == true && keyPressed == "80") {
        console.log("shift, p pressed");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        console.log("shift, m pressed");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
}

if (keyPressed == "38") {
    up();
    console.log("UP");
}
if (keyPressed == "40") {
    down();
    console.log("DOWN")
}
if (keyPressed == "37") {
    left();
    console.log("LEFT")
}
if (keyPressed == "39") {
    right();
    console.log("RIGHT");
}
if (keyPressed == "87") {
    new_image("wall.jpg");
    console.log("WALL");
}
if (keyPressed == "71") {
    new_image("ground.png");
    console.log("GROUND");
}
if (keyPressed == "76") {
    new_image("light_green.png");
    console.log("LIGHT_GREEN");
}
if (keyPressed == "84") {
    new_image("trunk.jpg");
    console.log("TRUNK");
}
if (keyPressed == "82") {
    new_image("roof.jpg");
    console.log("ROOF");
}
if (keyPressed == "89") {
    new_image("yellow_wall.png");
    console.log("YELLOW_WALL")
}
if (keyPressed == "68") {
    new_image("dark_green.png");
    console.log("DARK_GREEN");
}
if (keyPressed == "85") {
    new_image("different.png");
    console.log("DIFFERENT_IMAGE");
}
if (keyPressed == "67") {
    new_image("cloud.jpg");
    console.log("CLOUD_IMAGE");
}

function up() {
    if (player_y > 0) {
        player_y = player_y - block_image_height;
        console.log("block_image_height");
        console.log("up arrow", player_x + "-" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("block_image_height");
        console.log("down arrow", player_x + "-" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_image_width; 
        console.log("block_image_width");
        console.log("left arrow", player_x + "-" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x <=850){
        player_x = player_x + block_image_width
        console.log("block_image_width");
        console.log("right arrow", player_x + "-" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}