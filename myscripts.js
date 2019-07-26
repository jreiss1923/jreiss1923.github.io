function changeTextIntern() {
    document.getElementById("intern-text").innerHTML='To learn more about what I did, click the link to the left';
    document.getElementById("date-text-1").innerHTML='<p></p>';
}

function changeTextBackIntern() {
    document.getElementById("intern-text").innerHTML='<h3><span id="intern-text" class="small-text">Software Engineering Intern</span></h3>';
    document.getElementById("date-text-1").innerHTML='<p><span id="date-text-1">October 2018 - August 2019</span></p>';
}

function changeTextTyper(){
    document.getElementById("typer-text").innerHTML='To learn more about what I did, click the link to the left';
    document.getElementById("date-text-3").innerHTML='<p></p>'
}

function changeTextBackTyper(){
    document.getElementById("typer-text").innerHTML='<h3><span class="small-text" id="typer-text">Typing Speed Test</span></h3>';
    document.getElementById("date-text-3").innerHTML='<p><span id="date-text-3">December 2018</span></p>';
}

function changeTextBoggle(){
    document.getElementById("boggle-text").innerHTML='To learn more about what I did, click the link to the right';
    document.getElementById("date-text-2").innerHTML='<p></p>'
}

function changeTextBackBoggle(){
    document.getElementById("boggle-text").innerHTML='<h3><span id="boggle-text" class="small-text">Boggle Solver</span></h3>'
    document.getElementById("date-text-2").innerHTML='<p><span id="date-text-2">July 2019</span></p>'
}

function getBorderColor(){
    var color = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "white";
    
}