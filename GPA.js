// Javascript Document

function init()
{
  document.getElementById("newGPA").innerHTML = "";
}

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
   x = (nGPA/6.5)*4;
   neGPA = Math.round(x*1000)/1000;
   return neGPA;
}

}
