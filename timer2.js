//datum welches er runterzählt
var countDownDate1 = new Date("jan 01, 2019 0:0:0").getTime();

//updated den Countdown sekündlich
var x = setInterval(function() {

    //nimmt das heute datum
    var now = new Date().getTime();

    //sucht die distanz zwischen heute und dem gesetztem datum
    var distance = countDownDate1 - now;

    //calculiert die zeit für tage stunden minuten und sekunden
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display die ergebnise in das element mit der id="Demo"
    document.getElementById("demo2").innerHTML = days + " " + "Tage " + hours + " " + "Stunden " + minutes + " " +  "Minuten " + seconds + " " + "Sekunden ";
    //wenn der Countdown durch ist schriebe den Text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo2").innerHTML = "EXPIRED";
    }
}, 1000);