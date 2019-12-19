var compliment = "rawr";

inname();

name = name.toLowerCase();
console.log(name);

function peepz(){
if (name == "cole"){
  compliment = "Cole is very sweet, organized, and hard working. He only works his very hardest honestly and efficiently! He is an amazing NHS officer who is always ready to take on any tasks he has been assigned. He is like the perfect intern!";
  comp();
}
else if (name == "rayyan"){
  compliment = "I don't really know Rayyan that well, but from what I can tell. Rayyan is nice and musically talented. He tends to get a little distracted, but he seems like a Matthew where all his work would be extremely good if he put in a lot of effort."
  comp();
}

else if (name == "izzy"||name == "isabella"){
  compliment = "Izzy is an amazingly hard worker. Her work is always well-phrased and detailed. She is also very sweet and accepting, considering she is able to not show any signs of irritation at my constantly blaring voice. Lastly, Izzy is one of the best partners I could ask for, in terms of all these computer science assignments";
  comp();
}

else {
  compliment = "I did not feel like putting in more than this, but I did want to!";
  comp();
}
}
peepz();

console.log(compliment);
