// Javascript Document

function init()
{
  var bib = document.getElementById("textEntry").value;
  document.getElementById("textOutput").innerHTML = "Citation: <br>- ";
}

function clickButton()
{  
  document.getElementById("textOutput").innerHTML = createCitation(bib);
}

function createCitation(newBib)
{
  var citation = "Hello, " + newBib + "!"; 
  return citation;
}
