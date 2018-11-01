$(document).ready(function() {
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault(); 
        clickSound.play();
        generateHTML();
    
        timerWrapper();
    
    }); 
    
    $("body").on("click", ".answer", function(event){
        clickSound.play();
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            clearInterval(theClock);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        clickSound.play();
        resetGame();
    }); 
    
    }); 
    
    function generateLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 2000); 
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 2000);  
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 2000);
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 14) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timerWrapper();
    }
    
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = 
    ["Dead creatures revived by white walkers are known as what?",
    "Who created the secret tunnel in the sewers of Casterly Rock?",
    "The Night King was created using a dagger made of what?", 
    "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat skills and what else?", 
    "How did Daenerys hatch her dragon eggs?", 
    "What does the phrase 'Valor Morghulis' stand for?", 
    "Actor Peter Dinklage, Tyrion Lannister, also had a starring role in what fantasy franchise?", 
    "What is the only thing that can put out volatile wildfire?",
    "Besides dragonglass, what is the only other substance capable of defeating a white walker?",
    "How many times has Beric Dondarrion been brought back to life?",
    "Which Stark family direwolf was slain in retaliation for an attack on Prince Joffrey?",
    "Aryas's punishment for stealing from the Many-Face God is what?",
    "The name of King Tommens favorite cat is?",
    "What was the name of Ned Starks greatsword?",
    "Who shoots the flaming arror that subsequently destroys Stannis' fleet in Blackwater Bay?"];
    var answerArray = 
    [["Walkers", "Wights", "Zombies", "Creepy Claws"], 
    ["Tyrion Lannister","Lord Baelish","Jaime Lannister","Varys"], 
    ["Valyrian Steel", "Dragonglass", "Blue Ice", "Obsidian"], 
    ["Pride in drawing first blood","Knowledge of poisons","Nighttime attacks","Ruby-colored armor"], 
    ["Lightning Storm", "Funeral Pyre", "Fireplace", "Frozen Cave"], 
    ["All Men Must Die","All Men Must Serve","All Men Must Live","All Men Must See"], 
    ["Lord of the Rings", "Highlander", "Chronicles of Narnia", "Legend of Zelda"], 
    ["Sand","Water","Sunlight","Dragons Blood"],
    ["Weirwood","Wildfire","Valyrian Steel","Snowballs"],
    ["Three","Five","Seven","Six"],
    ["Ghost","Lady","Summer","Nymeria"],
    ["Death","Memory Loss","Blindness","Deafness"],
    ["Ser Pounce","Prince Fuzzy","Little Lion","Hairball"],
    ["Oathkeeper","Widows Wail","Longclaw","Ice"],
    ["Tyrion","Joffrey","Jaime","Bronn"]
    ];
    var imageArray = ["<img class='center-block img-right' src='img/australia.png'>", "<img class='center-block img-right' src='img/liberia.png'>", "<img class='center-block img-right' src='img/taiwan.png'>", "<img class='center-block img-right' src='img/japan.png'>", "<img class='center-block img-right' src='img/china.png'>", "<img class='center-block img-right' src='img/turkey.png'>", "<img class='center-block img-right' src='img/colombia.png'>", "<img class='center-block img-right' src='img/india.png'>"];
    var correctAnswers = ["B. Wights", "A. Tyrion Lannister", "B. Dragonglass", "B. Knowledge of poisons", "B. Funeral Pyre", "A. All Men Must Die", "C. Chronicles of Narnia", "A. Sand", "C. Valyrian Steel", "D. Six", "B. Lady", "C. Blindness", "A. Ser Pounce", "D. Ice", "D. Bronn"];
    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    var clickSound = new Audio("sound/button-click.mp3");