var x;
  
    
function time(){
    document.getElementById("countdown").value = "";

var d1 = new Date (),
    d2 = new Date ( d1 );
d2.setSeconds ( d1.getSeconds() + 20 );
 x= setInterval(function timeout() {

  var now = new Date().getTime();

  var distance = d2 - now;

  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =  "0"+minutes + " : " + seconds ;
  document.getElementById("countdown").style.color = "green";

if(seconds<10){
    document.getElementById("countdown").innerHTML =  "0"+minutes + " : " +"0"+seconds;
    document.getElementById("countdown").style.color = "red";

}
  if (distance < 0) {

    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    alert("Partie Terminée Votre Score Est "+score);
    score=0;
    document.getElementById("score").innerHTML="Score : "+score;
    clearInterval(x);

    time();
   
    document.getElementById("FirstNum").value= Math.floor((Math.random()*100));
    document.getElementById("SecondNum").value= Math.floor((Math.random()*100));
  

  }

}, 1000);
}

var score = 0;
  function test(){

    var num1 = parseInt(document.getElementById("FirstNum").value);
       var num2 = parseInt(document.getElementById("SecondNum").value);
       var result = parseInt(document.getElementById("Result").value);
    document.getElementById("score").innerHTML=+score;
        if(num1+num2==result){
            document.getElementById("box").style.borderColor = "green";
            document.getElementById("countdown").value = " ";
           
            score+=1;
document.getElementById("score").innerHTML="Score : "+score;
clearInterval(x);
time();


 if(score==5){
    alert("Félicitations Votre Score Est "+score);
     score=0;
    document.getElementById("score").innerHTML="Score : "+score;
   


 }
}
      else{
        document.getElementById("score").innerHTML="Score : "+score;
        document.getElementById("box").style.borderColor = "red";
        clearInterval(x);
time();

    }
    }
    function user(){
    var username = prompt("Veuillez Saisir Votre Username");

if (username != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}
   }
    user();