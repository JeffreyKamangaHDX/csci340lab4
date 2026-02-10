$(document).ready(function(){
    var x = 0;
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function rockPaperScissor(num) {
        if (num == 1){
            return "rock";
        }
        if (num == 2){
            return "paper";
        }
        else{
            return "scissors";
        }
    };
    $('#rock').click(function(){
        x = getRandomInt(1,3);
        $.ajax({
        url: `https://rps101.pythonanywhere.com/api/v1/match?object_one=rock&object_two=${rockPaperScissor(x)}`,
        success: function(results){
            console.log(x);
            console.log(results);
            if (results["winner"] == 'Rock'){
                console.log("You Won!");
                $('#quoteLine').text("Great win! You have been saved from Kanye's quotes.");
            }
            else if (results["winner"] == 'None - Draw'){
                console.log("It was a draw...");
                $('#quoteLine').text("Hmm. You're getting too close to loosing. Kanye's watching...");
            }
            else {
                console.log("You LOST :(");
                $.ajax({
                    url: "https://api.kanye.rest",
                    success: function(q){
                        $('#quoteLine').text(q["quote"]);
                        console.log(q["quote"]);
                    }
                });
            }
            },
        error: function(xhr,status,error){
            console.log(xhr);
            }
        });
    });
    $('#paper').click(function(){
        x = getRandomInt(1,3);
        $.ajax({
        url: `https://rps101.pythonanywhere.com/api/v1/match?object_one=paper&object_two=${rockPaperScissor(x)}`,
        success: function(results){
            console.log(x);
            console.log(results);
            if (results[0] == 'Paper'){
                console.log("You Won!");
                $('#quoteLine').text("Great win! You have been saved from Kanye's quotes.");
            }
            else if (results[0] == 'None - Draw'){
                console.log("It was a draw...");
                $('#quoteLine').text("Hmm. You're getting too close to loosing. Kanye's watching...");
            }
            else{
                console.log("You LOST :(");
                $.ajax({
                    url: "https://api.kanye.rest",
                    success: function(q){
                        $('#quoteLine').text(q["quote"]);
                        console.log(q["quote"]);
                    }
                });
            }
            },
        error: function(xhr,status,error){
            console.log(xhr);
            }
        });
    });
    $('#scissors').click(function(){
        x = getRandomInt(1,3);
        $.ajax({
        url: `https://rps101.pythonanywhere.com/api/v1/match?object_one=scissors&object_two=${rockPaperScissor(x)}`,
        success: function(results){
            console.log(x);
            console.log(results);
            if (results[0] == 'Scissors'){
                console.log("You Won!");
                $('#quoteLine').text("Great win! You have been saved from Kanye's quotes.");
            }
            else if (results[0] == 'None - Draw'){
                console.log("It was a draw...");
                $('#quoteLine').text("Hmm. You're getting too close to loosing. Kanye's watching...");
            }
            else{
                console.log("You LOST :(");
                $.ajax({
                    url: "https://api.kanye.rest",
                    success: function(q){
                        $('#quoteLine').text(q["quote"]);
                        console.log(q["quote"]);
                    }
                });
            }
            },
        error: function(xhr,status,error){
            console.log(xhr);
            }
        });
    });
});