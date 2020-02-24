
  //variables for tests
  var llCourse = " ";
  var llCred = " ";
  var llCredit = " ";
  var llCommentary = " ";

//lang lit credit finder
function utdpcalc(){
  var ut= {
   engahl:[3,4],
   engasl:[3,4], //same class as hl
   spanasl: [6,4],
   spanahl: [27,5,"SPN 601D, 611D, 312L, 327W, 327C",18,4,"SPN 601D, 610D, 611D",22,5,"SPN 506, 507, 312K, 312L, 327W, 327C",16,4,"506,507, 312K, 312L"], //diff course qualification for same score given option
   spanab: [0, 0],
   spansl: [ 10,4],
   spanhl: [16,4,"SPN 506, 508K, 312K, 312L",18,4,"SPN 601D, 610D, 611D"], //diff course qualification for same score given option
   frenchab: [0, 0],
   frenchsl: [12,4],
   frenchhl: [24,6,21,4,5],
   italab: [0, 0],
   italsl: [6,4],
   italhl: [21,4,12,3,6,2],
   germab: [0,0],
   germsl: [10,4],
   sssl: [0,0,3,4],
   sshl: [3,4],
   biosl: [3,4],
   biohl: [3,4,5,6],
   chemsl: [3,4],
   chemhl: [6,9,5],
   physl: [4,4],
   phyhl: [14,5,4,4],
   cssl: [3,4],
   cshl: [3,4], //diff class qualification than sl
   mstudiessl: [3,4,"M 302"], //diff class qualification than math sl
   mathsl: [3,4,"M 305G"],
   mathhl: [4,5,"408C",4,4,"408K"], //diff class from 4 score and 5+ score
   fumath: [7,4],
   va: [3,4],
   msl: [0,0],
   mhl: [3,4],
   th: [3,4]
 };




function ll(){
    console.log("ll3: " + llCourse);
 if (llCourse == "English A: Literature SL"|| llCourse == "English A: Language and Literature SL"){
   if (llCred >= ut.engasl[1]){
     llCredit = ut.engasl[0];
   }
   else if (llCred<ut.engasl[1]){
     llCredit = 0;
   }
   else {
     llCredit = "no input";
}
}

  else if (llCourse == "English A: Literature HL"|| llCourse == "English A: Language and Literature HL"){
    if (llCred >= ut.engahl[1]){
      llCredit = ut.engahl[0];
    }
    else if (llCred<ut.engahl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature SL"|| llCourse == "Spanish A: Language and Literature SL"){
    if (llCred >= ut.spanasl[1]){
      llCredit = ut.spanasl[0];
    }
    else if (llCred < ut.spanasl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature HL"|| llCourse == "Spanish A: Language and Literature HL"){
    if (llCred >= ut.spanahl[1]){
      llCredit = ut.spanahl[0] + " or " + ut.spanahl[6];
      llCommentary = "The 27 credits: " + ut.spanahl[2] + ". The 22 credits: " + ut.spanahl[8];
    }
    else if (llCred == ut.spanahl[4]){
      console.log("rawr")
      llCredit = ut.spanahl[3] + " or " + ut.spanahl[9];
      console.log(llCredit)
      llCommentary = "The 18 credits: " + ut.spanahl[5] + "." + " The 16 credits: " + ut.spanahl[11];
    }
    else if (llCred < ut.spanahl[4]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
}
//lang lit 1st input
llCourse = document.getElementById("langlit").value;
llCred = document.getElementById("llscore").value;
document.getElementById("llcourse").innerHTML = llCourse;
document.getElementById("lltest").innerHTML = llCred;
console.log(llCourse)
console.log(llCred)
  if (llCred !== " "){
    ll();
    console.log(llCredit)
    document.getElementById("llcredit").innerHTML = llCredit;
    document.getElementById("llcommentary").innerHTML = llCommentary;
}
llCourse = " ";
llCred = " ";
llCredit = " ";
llCommentary = " ";


//lang lit 2nd input
llCourse = document.getElementById("langlit2").value;
llCred = document.getElementById("llscore2").value;
if (llCourse !== " "){
document.getElementById("llcourse2").innerHTML = llCourse;
document.getElementById("lltest2").innerHTML = llCred;
  if (llCred !== " "){
   	  ll();
	    document.getElementById("llcredit2").innerHTML = llCredit;
	    document.getElementById("llcommentary2").innerHTML = llCommentary;
}
llCourse = " ";
llCred = " ";
llCredit = " ";
llCommentary = " ";
}




utMI()
}

function utMI(){
  alert("Scroll Down for More Information about UT Austin!")
  document.getElementById("moreInfo").innerHTML = utMIP;


}
