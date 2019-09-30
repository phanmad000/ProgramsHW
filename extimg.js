var click_counter = 0;

var graphic;

var bluesquare;
var col;
var x1;
var y1;

var redsquare;
var x2;
var y2;

function setup(){
  createCanvas(600, 400);
  noStroke();
  fill("#f00");
  rect(280,380,20,20);
  fill("#0f0");
  rect(300,380,20,20);
  fill("#00f");
  rect(320,380,20,20);
  bluesquare = "#00f";
  redsquare = "#f00";
}

function draw(){
  if (mouseIsPressed==true && mouseX<=300 && mouseX>=280 && mouseY>=380){
  col = 1;
}
  else if (mouseIsPressed==true && mouseX<=320 && mouseX>=300 && mouseY>=380){
  col = 2;
  }
  else if (mouseIsPressed==true && mouseX<=340 && mouseX>=301 && mouseY>=380){
  col = 3;
}
    noStroke();
    fill(bluesquare);
    rect(200, 50, 50, 50);

    graphic = loadImage("../../nope.jpg");

  if(mouseIsPressed==true && mouseX<=250 && mouseX>=200 && mouseY<=100 && mouseY>= 50 && col==3){
    click_counter = click_counter + 1;
    }
  if (click_counter==1 && col==3){
    fill("#fff");
    rect(200, 50, 50, 50);
    fill("#00f");
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
    x2 = random(30, 550);
    y2 = random (30, 300);
    rect(x2, y2, 50, 50);
    bluesquare = "#fff0";
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
image(graphic, 0, 0);
}
