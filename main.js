score = 0
time = 0

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function clearCanvas(){
    background("white");
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}
function draw(){
    strokeWeight(13);
    stroke(0,0,0);
    checkSketch()
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    if(drawn_sketch == sketch){
        new_score = score + 1
        document.getElementById('score').innerHTML = "Score: " + new_score;
    }
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById('label').innerHTML = "Your Sketch: " + result[0].label;
        document.getElementById('confidence').innerHTML = "Confidence: " + Math.round(result[0].confidence * 100) + "%";
        utterThis = new SpeechSynthesisUtterance (result[0].label);
        synth.speak(utterThis);
    }
}
function checkSketch(){
    timer_counter = time + 1;
    document.getElementById('timer').innerHTML = "Timer: " + timer_counter;
    console.log(timer_counter);
    if(timer_counter = 400){
        timer_counter = 0;
        timer_check = check;
    }
}
