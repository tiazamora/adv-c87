var canvas = new fabric.Canvas('myCanvas');

block_img_width = 30;
block_img_height = 30;

var object_of_the_player = "";
var block_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        object_of_the_player = Img;


        object_of_the_player.scaleToWidth(150);
        object_of_the_player.scaleToHeight(140);
        object_of_the_player.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;


        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
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
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("Shift and p are pressed together")
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("Shift and m are pressed together")
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }
    if (keyPressed == '70') {
        new_image('iron_man.png');
        console.log("f");
    }
    if (keyPressed == '66') {
        new_image('spiderman.png');
        console.log("b");
    }
    if (keyPressed == '76') {
        new_image('Hulk leg.png');
        console.log("l");
    }
    if (keyPressed == '82') {
        new_image('thor hand.png');
        console.log("r");
    }
    if (keyPressed == '72') {
        new_image('Cap hand.png');
        console.log("h");
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - blockImgHeight;
        console.log("block image height = " + blockImgHeight);
        console.log("When up arrow key is pressed, X " + playerX + ", Y =" + player_y);

        playerUpdate();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y - blockImgHeight;
        console.log("block image height = " + blockImgHeight);
        console.log("When down arrow key is pressed, X " + playerX + ", Y =" + player_y);
        playerUpdate();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - blockImgWidth;
        console.log("block image width = " + blockImgWidth);
        console.log("when left aerow key is pressed, X " + playerX + ", Y =" + player_y);
        playerUpdate();

    }
}

function right() {
    if (playerX <= 850) {
        playerX = playerX - blockImgWidth;
        console.log("block image width = " + blockImgWidth);
        console.log("when left aerow key is pressed, X " + playerX + ", Y =" + player_y);
        playerUpdate();

    }
}