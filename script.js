window.onload = function() {

  var seconds = 20;
  var rest = true;
  var interval;
  var nbExercice=0;

  var intervalTime = 20;
  var breakTime = 10;
  var nbExercices = 17;
  var nbSet = 1;

  var settingsButton = document.getElementById("settings");
  var intervalInput = document.getElementById("intervalTime");
  var breakInput = document.getElementById("breakTime");
  var nbExercicesInput = document.getElementById("nbExercices");
  var nbSetInput = document.getElementById("nbSet");

  var startButton = document.getElementById("start");
  var pauseButton = document.getElementById("pause");
  var resetButton = document.getElementById("reset");

  var statusHeader = document.getElementById("status");
  var secondsSpan = document.getElementById("sec");
  var exerciceSpan = document.getElementById("exercice");

  settingsButton.onclick = function() {
    intervalTime = Math.floor(intervalInput.value * 1);
    breakTime = Math.floor(breakInput.value * 1);
    nbExercices = Math.floor(nbExercicesInput.value * 1);
    nbSet = Math.floor(nbSetInput.value * 1);
    reset();
  }

  startButton.onclick = function() {
    rest = false;
    changeToGo();
    interval = setInterval(countdownSeconds, 1000);
  }

  resetButton.onclick = function() {
    reset();
  }

  function reset() {

    clearInterval(interval);
    seconds = intervalTime;
    secondsSpan.innerText = seconds;
    rest = true;
   nbExercice=0;

    exerciceSpan.innerText = nbExercice +"/"+nbExercices;
    changeToRest();
  }

  pauseButton.onclick = function() {
    clearInterval(interval);
  }

  function countdownSeconds() {
    seconds -= 1;
    secondsSpan.innerText = seconds;
    checkForStateChange();
  }

  function checkForStateChange() {
    if (nbExercice == nbExercices ) {
        changeToFinished();
    }
    if (seconds == 0 && rest == false) {
      seconds = breakTime + 1;
      rest = true;

      nbExercice += 1;
      changeToRest();
    } else if (seconds == 0 && rest == true) {
      seconds = intervalTime + 1;
      rest = false;
      changeToGo();
    }
  }

  function changeToRest() {
    $("body").css("background", "cyan");
    statusHeader.innerText = "Repos";
    exerciceSpan.innerText = (nbExercice+1) +"/"+nbExercices;
  }

  function changeToGo() {
    exerciceSpan.innerText = (nbExercice+1) +"/"+nbExercices;
    $("body").css("background", "pink");
    statusHeader.innerText = "Gaine!";
//console.log($('ul.exercices'));
//console.log($('ul.exercices li'));
    //$('ul.exercices').get(nbExercice).css('display', 'block');
var exo= "#exo"+(nbExercice+1)
//console.log($(exo));
    $(exo).css('display', 'block');
    $(exo).show();
    if (nbExercice>0)        {
        exo= "#exo"+(nbExercice)
        //console.log($(exo));
        $(exo).css('display', 'none');
        $(exo).hide();
        
    }
  }
 function changeToFinished() {
    reset();
    $("body").css("background", "green");
    statusHeader.innerText = "Finished !";
  }
}
