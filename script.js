// Javascript Document

function init()
{
  document.getElementById("textOutput").innerHTML = "Enter your name and then click the button.";
}

function clickButton()
{
  var name = document.getElementById("textEntry").value;
  
  document.getElementById("textOutput").innerHTML = createGreeting(name);
}

function createGreeting(newName)
{
  var greeting = "Hello, " + newName + "!"; 
  return greeting;
}
