// Javascript Document

function init()
{
  var title = document.getElementById("textEntry").value;
  var url = document.getElementById("textUrl").value;
  document.getElementById("textOutput").innerHTML = "Citation: <br>- ";
}

function clickButton()
{  
  document.getElementById("textOutput").innerHTML = createCitation(title, url);
}

function createCitation(newTitle, newUrl)
{
  var citation = '"' + title + '",' + url + '.'; 
  return citation;
}
