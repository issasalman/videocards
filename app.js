confirm("Press ok to check you are not a bot!")
var name = prompt("what is your name?")


alert("welcome to Nvidia RTX website " + name + " we are happy to see you again!!")
function favocard(){
var favcard = prompt("what is your fav card from these (3070, 3080  , 3090 )?")

while (favcard != "3070" && favcard != "3080" && favcard != "3090") {
  favcard = prompt("You entered wronge type of RTX Cards please try again later")

}

var rate = prompt("Please Rate Our Products From 1 to 10")
function stars(){
      document.write("<span id='red'>*  </span>")
    }
if (favcard == "3070") {
  
document.write("<div id='ge'>  Great thing you have choosen RTX 3070 you will have fun using it   </div>")

document.write(  "<div id='ge'>  <img src='https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=EVr3070f4'> </div>")

  document.write(`<div id='red1'> Thanks For ${rate} stars Rating  </div>` )

  for (var y = 1; y <= rate && rate >=1 && rate <=10; y++) {
   
   
    
    stars();

  }
  




 








}

else if (favcard == "3080") {

  document.write("<div id='ge'>  Great thing you have choosen RTX 3080 you will have fun using it   </div>")
  document.write(  "<div id='ge'>  <img src='https://i.ebayimg.com/images/g/7FMAAOSw7OZfaMzw/s-l640.jpg'> </div>")

  document.write(`<div id='red1'> Thanks For ${rate} stars Rating  </div>` )
  // var rate = prompt("Please Rate Our Products From 1 to 10")
  for (var y = 1; y <= rate && rate >=1 && rate <=10; y++) {
    stars();
  }

  


  

  
  

  
}

else if (favcard == "3090") {

document.write("<div id='ge'>  Great thing you have choosen RTX 3090 you will have fun using it   </div>")
  document.write(  "<div id='ge'>  <img  src='https://i.ebayimg.com/images/g/7A8AAOSwbBVgyjqY/s-l500.jpg'> </div>")

  document.write(`<div id='red1'> Thanks For ${rate} stars Rating  </div>` )






  // var rate = prompt("Please Rate Our Products From 1 to 10")
  for (var y = 1; y <= rate && rate >=1 && rate <=10; y++) {

    stars();


  }

  

  


  

  
  

  
}
else {
  alert("We are  sorry that  we don't have this Model maybe in the future ^^ thanks for your visit")
  }


}

favocard ();




// // END


// // // if (favcard == "3070") {
// // //   document.write("<p>" + "great thing you choosed RTX 3070 you will have fun using it" + "</p>" + "<img src='https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=EVr3070f4'>")

// // // }
// // // else if (favcard == "3080") {
// // //   document.write("<p>" + "great thing you choosed RTX 3080 you will have fun using it" + "</p>" + '<img src=" https://www.rockinit.co.za/wp-content/uploads/2020/09/ROG-STRIX-RTX3080-10G-GAMING-1.jpg">')



// // // }

// // // else if (favcard == "3090") {
// // //   document.write("<p>" + "great thing you choosed RTX 3090 you will have fun using it" + "</p>" + ' <img  src="https://i.ytimg.com/vi/Ln2Gr77QQc4/maxresdefault.jpg" width="600" height="400" >')
// // // }
// // // else {
// // //   alert("We are  sorry that  we don't have this Model maybe in the future ^^ thanks for your visit")
// // // }


// // if (favcard == "3070") {
// //   document.write("<p>" + "great thing you choosed RTX 3070 you will have fun using it" + "</p>" + "<img src='https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=EVr3070f4'>")

// // }
// // else if (favcard == "3080") {
// //   document.write("<p>" + "great thing you choosed RTX 3080 you will have fun using it" + "</p>" + '<img src=" https://www.rockinit.co.za/wp-content/uploads/2020/09/ROG-STRIX-RTX3080-10G-GAMING-1.jpg">')



// // }

// // else if (favcard == "3090") {
// //   document.write("<p>" + "great thing you choosed RTX 3090 you will have fun using it" + "</p>" + ' <img  src="https://i.ytimg.com/vi/Ln2Gr77QQc4/maxresdefault.jpg" width="600" height="400" >')
// // }
// // else {
// //   alert("We are  sorry that  we don't have this Model maybe in the future ^^ thanks for your visit")
// // }

// if (favcard == "3070") {
//   document.write("<p>" + "great thing you choosed RTX 3070 you will have fun using it" + "</p>" + "<img src='https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=EVr3070f4'>")

// }
// else if (favcard == "3080") {
//   document.write("<p>" + "great thing you choosed RTX 3080 you will have fun using it" + "</p>" + '<img src=" https://www.rockinit.co.za/wp-content/uploads/2020/09/ROG-STRIX-RTX3080-10G-GAMING-1.jpg">')



// }

// else if (favcard == "3090") {
//   document.write("<p>" + "great thing you choosed RTX 3090 you will have fun using it" + "</p>" + ' <img  src="https://i.ytimg.com/vi/Ln2Gr77QQc4/maxresdefault.jpg" width="600" height="400" >')
// }
// else {
//   alert("We are  sorry that  we don't have this Model maybe in the future ^^ thanks for your visit")
// }


