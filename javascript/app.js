$(document).ready(function(){

    // function timer(){
    //     console.log ('time up')
    //     $("#time-remaining").append("you lose")
    // }
    // setTimeout(timer,1000);


    var timer = 5;
    $("#time-remaining").text("Time remaining: " + timer);
    var setIntervalId  = setInterval (function(){

        timer -= 1;
        console.log('tick tock')
        console.log(timer);
        $("#time-remaining").text("Time remaining: " + timer);

        if (timer === 0){
            console.log ("time's up");
            clearInterval(setIntervalId);
        }

    },1000)

    

    















});