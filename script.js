let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")


let students = [ 

  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2F0.jpeg?v=1585117674033",
  name: "Hummu",
  quote:"''Those cucarachas and Their Rise and Shine ''",
  superlative:" Most motivated"
},
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9929.JPG?v=1585131695799",
  name: "Munira",
  quote:"''Brooooooo you should listen to Dave''",
  superlative:"Best playlist"
},
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9931.JPG?v=1585131697764",
  name: "Britney",
  quote:"''Guys don't forget to... ''(she's the goat at remembering everything last minute )",
  superlative:" Teacher's pet"
},
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9930.JPG?v=1585131694488",
  name: "Aisatou",
  quote:" ''I know how you can make $10,000 in a week, give me your chase account''",
  superlative:"Most sketchy"
},
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_5309.JPG?v=1585131781580",
  name: "Baba",
  quote:" ''Did you know that...''(to many things to remember)",
  superlative:" Most likely to become a billionaire from Tik Tok "
},
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9940.PNG?v=1585167679337",
  name: "Taslima aka Taz",
  quote:" ''chupakabra dja-dja ''",
  superlative:" Most likely to become a Muah"
},
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9921.PNG?v=1585117681327",
  name: "Kiya",
  quote:"''OMG I LOVE YOU''",
  superlative:" Best person"
},
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2Fd008f3de-c26e-42f2-a1e7-8c92d2ee7a6b.IMG_3959.jpg?v=1585113205603",
  name: "Djali",
  quote:"''hahahahahah... alright that  wasn't funny''",
  superlative:"Best Smile"
},
   {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9941.PNG?v=1585167677120",
  name: "Miranda",
  quote:"''Those kids are getting me tight right now''",
  superlative:"Best PGC partner"
}, 
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_5630.JPG?v=1585132583420",
  name: "Eric.C",
  quote:"''Bloop-Bloop''",
  superlative:"Most likely to punch an elderly"
}, 
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9938.PNG?v=1585167681047",
  name: "Ruth",
  quote:" ''Hey loser !''",
  superlative:" Most Dramatic"
}, 
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9933.jpg?v=1585132580282",
  name: "Naomi",
  quote:"''Hey that's my wife don't look!''",
  superlative:" Best Wife "
}, 
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9942.PNG?v=1585167670832",
  name: "Jessica",
  quote:"''Mali, do we have PGC tommorow? ''",
  superlative:" Best Artist"
}, 
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9939.PNG?v=1585167680919",
  name: "Adriana",
  quote:"''OH HELLLLLLL NAWWWWWWW  GIRLLLLL''",
  superlative:"most talkative"
},
  {
  profileImage: "https://cdn.glitch.com/0d599950-6f66-4016-9551-60a2a7342767%2FIMG_9937.JPG?v=1585512995014",
  name: "Naila",
  quote:"''Aoussa ...(just starts laughing)''",
  superlative:" best laughter "
}
  
];
  
let count = 0;
document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name; 
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;

nextButton.addEventListener("click", ()=>{
  console.log("next");
  count++;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name; 
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
  if (count==14){
      count= -1;
      }
  if( count == 3){
     alert("you nosy much")
   
}
  if( count == 4){
     alert("I think I've had enough")
   
}
  if( count == 5){
     alert("stop looking in my diary")
   
}
  if( count == 6){
     alert("You mad you not here")
   
}
  if( count == 7){
     alert("It's Okay you are still very important to me")
   
}

});

backButton.addEventListener("click",()=>{
  console.log("back");
  count --;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name; 
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
  if (count == 0){
    count = 15;
  }
if( count == 14){
     alert("you can't believe it or something. Going backwards doesn't mean you will be in my book")
   
}
});
