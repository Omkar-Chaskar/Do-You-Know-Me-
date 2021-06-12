var readlineSync = require('readline-sync');  //import readlineSync
let score = 0;

/*
var userName = readlineSync.question("Who are you ? \n")
console.log("Welcome "+ " "+ userName);

let age = readlineSync.question("What is my age ? \n")
if(22 < age > 22){
  score--;
  console.log("You are wrong"+" "+userName +"\n Score= "+score);
  
}
else{
  score++;
  console.log("You are right "+ userName +"\n Score= "+score);
  
}
*/
/*
var que =["What is my name ?"];
var ans =["omkar"];

var userName = readlineSync.question(que[0]+ "\n")
if(userName == ans){
  console.log("you got my name")
}
else{
  console.log("try to know me")
}
*/

var right = "You are right";
var wrong = "You are wrong";

var que=["What is my age ?","where do I live ?","which is my favorite place ?","What is my favorite food ?","What is my nick Name ?","What do my college friends call me ? ","What is my birth date ? 00/00","Who we love most in our Life ?"];

var  ans=["22","pune","home","chicken roll","lankya","bob","14/02","family"];


function check(){
  let i;
  for(i=0;i<8;i++){
    var response = readlineSync.question(que[i]+"\n")
    
    response = response.toLowerCase();
    
      if(response == ans[i]){        // compare answer from array
        console.log(right);
        score++;                        //increment score
      }
      else{
        console.log(wrong);
       // score--;                         //decrement score
      }
    console.log(" Your score is "+score +"\n");
  }
}


var userName = readlineSync.question("Who are you ? \n")  
console.log("Welcome "+ " "+ userName + " , Lets play a game .");



check(); //function call
 