$(document).ready(function(){
    var questionsArray = [
        {question: "Which rapper used the lyric \"love paper like I'm Michael Scott\"?",
        choices: ["Post Malone", "Kendrick Lamar", "G-Eazy", "Offset"],
        answer: 0},
        {question: "What is Michael Scott's middle name?",
        choices: ["Larry","Gary","Harry","Mary"],
        answer: 1},
        {question: "What is the name of the realtor that Michael dated?",
        choices: ["Anne","Pam","Louise","Carol"],
        answer: 3},
        {question: "Which employee does Michael hit with his car?",
        choices: ["Jim", "Dwight", "Meredith", "Angela"],
        answer: 2},
        {question: "What Dundie did Pam win?",
        choices: ["Best Chair","Whitest Sneakers",'Whitest Teeth','Worst Fiance'],
        answer: 1},
        {question: "What Did Prison Mike hate the most about prison?",
        choices: ["The Dementors",'The food','The guards','The monsters'],
        answer: 0},
        {question: "What food did Kevin drop all over the office carpet?",
        choices: ["Bolognese",'Jumbalaya','Chili','Maple Syrup'],
        answer: 2},
        {question: "Bears, Beets, and what?",
        choices: ["Bros","Booze",'Battlestar Gallactica','Bees'],
        answer: 2},
        {question: "What is the name of the city where The Office takes place?",
        choices: ['Scranton','Springfield','Smallville','Skrillex'],
        answer: 0}
    ];
    restart();

    function restart(){//Prints the question and appropriate choices to document
    var i = 0;
    var l = questionsArray.length
    var rightAnswers = 0;
    var wrongAnswers = 0;

    function loadQuestion(){
    createTimer();
    if (i < l) {
        do {
        $("#game-play").show();
        $("#results").hide();
        $("#question").text(questionsArray[i].question);
        $('#answer-1').text(questionsArray[i].choices[0]);
        $('#answer-2').text(questionsArray[i].choices[1]);
        $('#answer-3').text(questionsArray[i].choices[2]);
        $('#answer-4').text(questionsArray[i].choices[3]);
        console.log(questionsArray[i]);
        break;
    } while (i < questionsArray.length);
    } else if (i ===l) {
        alert ("GAME OVER");
        gameOver();
    }
    }
    loadQuestion();

    function correctAnswer(){
        alert ("Correct choice!");
        i++;
        rightAnswers++;
        clearTimer();
        loadQuestion();
    }

    function incorrectAnswer(){
        alert ("Incorrect choice! The correct answer was " + questionsArray[i].choices[questionsArray[i].answer] + ".");
        i++;
        wrongAnswers++;
        clearTimer();
        loadQuestion();
    }

    function timeUp(){
        alert ("Time's up! The correct answer was " + questionsArray[i].choices[questionsArray[i].answer] + ".");
        i++;
        wrongAnswers++;
        clearTimer();
        loadQuestion();
    }

    function gameOver (){
        clearTimer();
        $("#game-play").hide();
        $("#correct-answers").text("Correct Answers: " + rightAnswers);
        $("#incorrect-answers").text("Incorrect Answers: " + wrongAnswers);
        $("#results").show();
    }
    
    //Code for correct and incorrect choices
    var reply_click = function checkAnswer(){
        var x = questionsArray[i].answer;
        var y = this.innerHTML;
        var z = questionsArray[i].choices[x]
        console.log(x);
        console.log(questionsArray[i].choices[x]);
        console.log(y);
        if (y === z){
            console.log("ok");
            correctAnswer();
        }else {
            console.log("no");
            incorrectAnswer();
        }
    }
    document.getElementById('answer-1').onclick = reply_click;
    document.getElementById('answer-2').onclick = reply_click;
    document.getElementById('answer-3').onclick = reply_click;
    document.getElementById('answer-4').onclick = reply_click;

    //creates the timer countdown
    var timer;
    $("#time-remaining").text("Time remaining: " + timer);
    var makeTimer;

    function createTimer(){
        timer = 30;
        $("#time-remaining").text("Time remaining: " + timer);
        makeTimer = setInterval (function(){
            timer-=1;
            $("#time-remaining").text("Time remaining: " + timer);
            if (timer === 0){
                clearTimer();
                timeUp();
            }
        },1000)
    }
    function clearTimer(){
        clearInterval(makeTimer);
    }
}
    //play again
    $("#replay").click(function(){
        restart();
    });
});