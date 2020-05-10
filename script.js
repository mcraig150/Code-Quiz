var btn1 = document.querySelector("#btn1");

var btn2 = document.querySelector("#btn2");

var btn3 = document.querySelector("#btn3");

var qst = document.querySelector("#qst");

var questions = "what do you end your lines with in javascript? What does != mean? What is a variable? what is a boolean? what does || mean? What is the first thing in a html document? How do you define classes in css? What function do you use to turn a string into an int? What is the latest version of html? What tag do you use to add a link to the page?"

var quest = questions.split('?');

var answers = ["Semicolon. Period. Comma.", "Equals. Does not equal. True.", "A number. A string. Both.", "A function for adding. A way of commenting. A true false variable.", "Or. And. False.", "<!DOCTYPE>. <footer>. <head>.", "With a period. With a hashtag. With a tilda.", "parseInt. toNum. toInt.", "9. 11. 5", "<img>. <a>. <link>" ]

var correct =[1, 2, 3, 3, 1, 1, 1, 1, 3, 2];

var wrong = false;

var input = 0;

var score = 0;

var count = 0;

var stop = false;


//Starts countdown timer
function timer() {

    //creating timer

    var timeLeft = 120;

    var time = document.querySelector(".timer");

    var countdown = setInterval (function(){
        
        
        if (timeLeft <= 0 || stop ===  true) {
            clearInterval(countdown);
            time.textContent = "Finished!"
        }
        else {
            timeLeft--;
        }

        if(wrong === true) {
            timeLeft -=  10;
            wrong = false;
            console.log("test"); 
        }

        time.textContent = "Seconds remaining: " + timeLeft;


    },1000);

}


//Starts quiz on button  click
function start() {
    
   
    btn1.addEventListener("click", function started(){

        //adding buttons for user input invisible by default
        btn2.style.display = "block";
        btn3.style.display = "block";
        qst.style.display = "block";


        //staring the timmer
        timer();
       
        //starting quiz
        quiz();

        this.removeEventListener("click", started)
       
    });


}


//Function the runs the quiz
function quiz() {

    update();

    //Adding click listeners for anwser input and checking for correct anwser
    btn1.addEventListener("click", function(){
      
        input = 1;

        if (input === correct[count]) {
            score++;

        }
        else {
            console.log("test")
            wrong = true;
        }

        count++;
        update();
    });


    btn2.addEventListener("click", function(){

            
        input = 2;

        if (input === correct[count]) {
            score++;
        }
        else {
            wrong = true;
        }

        count++;
        update();
    });


    btn3.addEventListener("click", function(){
            
        input = 3;

        if (input === correct[count]) {
            score++;
        }
        else {

            wrong = true;
        }

        count++;
        update();
    });

}

function update() {


    if(count < quest.length -1){

        qst.textContent = " " + quest[count];

        var ans = answers[count].split('.'); 

        btn1.textContent = "" + ans[0];
        btn2.textContent = "" + ans[1];
        btn3.textContent = "" + ans[2];
    }
    else {

        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";

        qst.style.textAlign = "center";
        qst.textContent = "Finished your score is: " + score;

        stop = true;
    }




}

start();