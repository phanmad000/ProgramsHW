var click_counter = 0;

var graphic;
var gameboy;

var bluesquare;
var col;
var x1;
var y1;

var redsquare;
var x2;
var y2;

var catx;
var caty;

function setup(){
  gameboy = loadImage("game.png");
  createCanvas(1000, 600);
  noStroke();
  fill("#f00");
  rect(450,450,20,20);
  fill("#0f0");
  rect(470,450,20,20);
  fill("#00f");
  rect(490,450,20,20);
  bluesquare = "#00f";
  redsquare = "#f00";
  graphic = loadImage("nope.jpg");

}

function draw(){
  image(gameboy, 0, 0, 1000, 600);
  if (mouseIsPressed==true && mouseX<470 && mouseX>=450 && mouseY>=450 && mouseY<=470){
  col = 1;
}
  else if (mouseIsPressed==true && mouseX<490 && mouseX>=470 && mouseY>=450 && mouseY<=470){
  col = 2;
  }
  else if (mouseIsPressed==true && mouseX<510 && mouseX>=490 && mouseY>=450 && mouseY<=470){
  col = 3;
}
    noStroke();
    fill(bluesquare);
    rect(320, 200, 50, 50);

  if(mouseIsPressed==true && mouseX<=370 && mouseX>=320 && mouseY<=250 && mouseY>= 200 && col==3){
    click_counter = click_counter + 1;
    }
  if (click_counter==1 && col==3){
    bluesquare = "#fff";
    fill("#fff");
    rect(320, 200, 200, 200);
    if (mouseIsPressed=true && click_counter==1){
      for (var explode = 0; explode < 4; explode++){
        fill("#00f");
        rect(mouseX+explode*20, mouseY-explode*30, 20 - explode*5, 20 - explode*5);
        rect(mouseX-explode*20, mouseY+explode*30, 20 - explode*5, 20 - explode*5);
        rect(mouseX+explode*20, mouseY+explode*30, 20 - explode*5, 20 - explode*5);
        rect(mouseX-explode*20, mouseY-explode*30, 20 - explode*5, 20 - explode*5);
        click_counter = 4;
      }
    }
    fill("#f00");
    x2 = random(280, 600);
    y2 = random (160, 350);
    rect(x2, y2, 50, 50);

    catx = random(280, 600);
    caty = random(160, 350);
    image(graphic, catx, caty, 50, 50);
  }


  if (mouseIsPressed==true && mouseX<=x2+50 && mouseX>=x2 && mouseY<=y2+50 && mouseY>=y2 && col==1){
  click_counter = 2;
}
  if (click_counter==2 && col==1){
    fill("#fff");
    rect(x2, y2, 50, 50);
    if (mouseIsPressed=true && click_counter==2){
      for (var explode = 0; explode < 4; explode++){
        fill("#f00");
        rect(mouseX+explode*20, mouseY-explode*30, 20 - explode*5, 20 - explode*5);
        rect(mouseX-explode*20, mouseY+explode*30, 20 - explode*5, 20 - explode*5);
        rect(mouseX+explode*20, mouseY+explode*30, 20 - explode*5, 20 - explode*5);
        rect(mouseX-explode*20, mouseY-explode*30, 20 - explode*5, 20 - explode*5);
        click_counter = 3;
      }
    }

    redsquare = "#fff0";
  }

}
