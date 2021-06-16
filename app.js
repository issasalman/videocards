confirm("press ok to check you are not a bot")
var name = prompt("what is your name?")


alert("welcome to Nvidia RTX website " + name +" we are happy to see you again!!")

var favcard = prompt("what is your fav card from these (3070, 3080  , 3090 )?")


if(favcard == "3070"){
  document.write("<p>"+ "great thing you choosed RTX 3070 you will have fun using it"+"</p>"+"<img src='https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=EVr3070f4'>")
 
}
 else if(favcard == "3080")
{
 document.write("<p>"+ "great thing you choosed RTX 3080 you will have fun using it"+"</p>")



}

else if(favcard == "3090")
{
 document.write("<p>"+ "great thing you choosed RTX 3090 you will have fun using it"+"</p>")
}
else{
  alert("We are  sorry that  we don't have this Model maybe in the future ^^ thanks for your visit")
}



