// Javascript Document



function clickButton()
{
  var gpa = document.getElementById("origGPA").value;

  document.getElementById("newGPA").innerHTML = createGPA(gpa);
}

function createGPA(nGPA)
{
  if (nGPA.length < 5){
    alert("Must Type in a 4-digit GPA.");
  }
  else {
   x = (nGPA/6)*4;
   neGPA = Math.round(x*1000)/1000;
   return neGPA;
}
}

function clickButtong()
{
  var grade1 = document.getElementById("p1").value;
  var grade2 = document.getElementById("p2").value;
  var grade3 = document.getElementById("p3").value;
  var grade4 = document.getElementById("p4").value;
  var grade5 = document.getElementById("p5").value;
  var grade6 = document.getElementById("p6").value;
  var grade7 = document.getElementById("p7").value;
  var grade8 = document.getElementById("p8").value;

  document.getElementById("ngGPA").innerHTML = calcGPA(grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8);
}

var z = 0;
var y = 0;
var x = 0;
var v = 0;
var u = 0;
var t = 0;
var s = 0;
var r = 0;

function calcGPA(g1, g2, g3, g4, g5, g6, g7, g8)
{
  if (g1 > 100||g2 > 100||g3 > 100||g4 > 100||g5 >100||g6 > 100||g7 >100||g8> 100){
    alert("Enter a plausible number. Do not lie.")
  }
  else {
    firstGrade(g1);
    secondGrade(g2);
    thirdGrade(g3);
    fourthGrade(g4);
    fifthGrade(g5);
    sixthGrade(g6);
    seventhGrade(g7);
    eigthGrade(g8);

    console.log(z, y, x, v, u, t, s, r);
    var b = (z+y+x+v+u+t+s+r)/8;
    console.log(b);
    var final = Math.round(b*1000)/1000;
    return final;
  }
}

function firstGrade(g1){

    if ( g1 > 89){
      z = 4;
    }
    else if (79 < g1){
      z = 3;
    }
    else if (69 < g1){
      z = 2;
    }
    else if (59 < g1){
      z = 1;
    }
    else {
      z = 0;
    }
  }

function secondGrade(g2){
    if (89 < g2 ){
      y = 4;
    }
    else if (79 < g2 ){
      y = 3;
    }
    else if (69 < g2 ){
      y = 2;
    }
    else if (59 < g2 ){
      y = 1;
    }
    else {
      y = 0;
    }
  }

  function thirdGrade(g3){
      if (89 < g3){
        x = 4;
      }
      else if (79 < g3){
        x = 3;
      }
      else if (69 < g3){
        x = 2;
      }
      else if (59 < g3){
        x = 1;
      }
      else {
        x = 0;
      }
    }

    function fourthGrade(g4){
        if (89 < g4){
          v = 4;
        }
        else if (79 < g4){
          v = 3;
        }
        else if (69 < g4){
          v = 2;
        }
        else if (59 < g4){
          v = 1;
        }
        else {
          v = 0;
        }
      }

function fifthGrade(g5){
          if (89 < g5){
            u = 4;
          }
          else if (79 < g5){
            u = 3;
          }
          else if (69 < g5){
            u = 2;
          }
          else if (59 < g5){
            u = 1;
          }
          else {
            u = 0;
          }
        }

function sixthGrade(g6){
            if (89 < g6){
              t = 4;
            }
            else if (79 < g6){
              t = 3;
            }
            else if (69 < g6){
              t = 2;
            }
            else if (59 < g6){
              t = 1;
            }
            else {
              t = 0;
            }
}

function seventhGrade(g7){
              if (89 < g7){
                s = 4;
              }
              else if (79 < g7){
                s = 3;
              }
              else if (69 < g7){
                s = 2;
              }
              else if (59 < g7){
                s = 1;
              }
              else {
                s = 0;
              }
}


function eigthGrade(g8){
                if (89 < g8){
                  r = 4;
                }
                else if (79 < g8){
                  r = 3;
                }
                else if (69 < g8){
                  r = 2;
                }
                else if (59 < g8){
                  r = 1;
                }
                else {
                  r = 0;
                }
}
