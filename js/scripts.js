var stage=1
var score1result=0
var turn=0

function start() {
    //GET IMAGE ELEMENT
    //Add hidden class
    var x = document.getElementById("cover"); 
    x.classList.add("hidden");
    var z = document.getElementById("board"); 
    z.classList.remove("hidden");
    var z = document.getElementById("player1"); 
    z.classList.remove("hidden");
    var z = document.getElementById("score1");
    z.classList.remove("hidden");
    var z = document.getElementById("score1result");
    z.classList.remove("hidden");
    var z = document.getElementById("nextbutton");
    z.classList.remove("hidden");
}

function nextround(){
    turn=turn+1
    console.log(turn)
    handlenewturn()
}

var spinnerValue;

function handlenewturn() {
      if (turn==1) {
          if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            }
          else if (spinnerValue =="alive") {
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var y = document.getElementById ("player1");
        y.classList.add("position1");
        y.classList.remove("position0");
        
    } else if (turn==2) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
         var t = document.getElementById("table");
            t.classList.remove("hidden");
        
    } else if (turn==3) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
                var y = document.getElementById("player1");
        y.classList.add("position2");
        y.classList.remove("position1");
    } else if (turn==4) {
        if (spinnerValue =="dead") {
                turn = turn-4;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var t = document.getElementById("table");
            t.classList.remove("hidden");
        
    } else if (turn==5) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
                       var y = document.getElementById("player1");
        y.classList.add("position3");
        y.classList.remove("position2");
        
        
    } else if (turn==6) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
                var t = document.getElementById("table");
            t.classList.remove("hidden");
        
    } else if (turn==7) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
       var y = document.getElementById("player1");
        y.classList.add("position4");
        y.classList.remove("position3");
        
    } else if (turn==8) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var t = document.getElementById("table");
            t.classList.remove("hidden");
    } else if (turn==9) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
                      var y = document.getElementById("player1");
        y.classList.add("position5");
        y.classList.remove("position4");
        
    } else if (turn==10) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var t = document.getElementById("table");
            t.classList.remove("hidden");
        
    } else if (turn==11) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
                       var y = document.getElementById("player1");
        y.classList.add("position6");
        y.classList.remove("position5");
        
    } else if (turn==12) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var t = document.getElementById("table");
            t.classList.remove("hidden");
        
    } else if (turn==13) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {
  
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var y = document.getElementById("player1");
        y.classList.add("position7");
        y.classList.remove("position6");
        
    } else if (turn==14) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var t = document.getElementById("table");
            t.classList.remove("hidden");
        
    } else if (turn==15) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
                              var y = document.getElementById("player1");
        y.classList.add("position8");
        y.classList.remove("position7");
        
    } else if (turn==16) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var t = document.getElementById("table");
            t.classList.remove("hidden");
        
    } else if (turn==17) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
                              var y = document.getElementById("player1");
        y.classList.add("position9");
        y.classList.remove("position8");
        
    } else if (turn==18) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            } else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var t = document.getElementById("table");
            t.classList.remove("hidden");
        
    } else if (turn==19) {
        if (spinnerValue =="dead") {
                turn = turn-6;
                var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("gg");
                g.classList.remove("hidden");
                var e = document.getElementById("end");
                e.classList.remove("hidden");
                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            document.getElementById("end").innerText = score1result;
            }else if (spinnerValue =="alive") {

                var t = document.getElementById("poisonwheel");
                t.classList.add("hidden");
                var s = document.getElementById("wheeltip");
                s.classList.add("hidden");
            }
        var y = document.getElementById("player1");
        y.classList.add("position0");
        y.classList.remove("position9");
        turn=0
    }
    
    
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSpinnerLocation(rotateDeg, spinnerType) {
    
    var absoluteDeg = rotateDeg % 360;
    
    if (spinnerType === "normalSpinner") {
        
        if (absoluteDeg < 134 && absoluteDeg >= 0) {
            //continue
            return "green";
        } else if (absoluteDeg < 181 && absoluteDeg >= 134) {
            //red
            return "red";
        } else {
            //blue section
            return "blue"
        }
        
    } else if (spinnerType === "poisonSpinner") {
        //Other spinner
        if (absoluteDeg < 180 && absoluteDeg >= 0) {
            //continue
            console.log("dead");
            return "dead";
       
        } else {
            //red
            console.log("alive");
            return "alive";
          
            
        }
        
    }
    
}

function reply_click(innerText) {
    console.log(innerText);
    
    var questionDiv = document.getElementById("question");
    var questionTextElement = document.getElementById("questionText");
    var optionAElement = document.getElementById("optionA");
    var optionBElement = document.getElementById("optionB");
    var optionCElement = document.getElementById("optionC");
    var optionDElement = document.getElementById("optionD");
    
    questionDiv.dataset.questionSelected = innerText;
    
    switch(innerText) {
        case "1":
            questionTextElement.innerText = "An Ionic compound is a compound formed with a ____ and a ____";
            optionAElement.innerText = "Metal and a Nonmetal";
            optionBElement.innerText = "Metal and a Metal";
            optionCElement.innerText = "Nonmetal and a Nonmetal";
            optionDElement.innerText = "A Proton and Electron";
            break;
        case "2":
            questionTextElement.innerText = "A synthesis reaction is when ____";
            optionAElement.innerText = "Two elements or compounds combine into one";
            optionBElement.innerText = "A compound breaks into its elements";
            optionCElement.innerText = "Two cations combine";
            optionDElement.innerText = "Multiple solutions are mixed in order to create one solution";
            break;
        case "3":
            questionTextElement.innerText = "In a single displacement reaction, the ____ replaces the ____ in the compound";
            optionAElement.innerText = "Metal, Nonmetal";
            optionBElement.innerText = "Nonmetal, Nonmetal";
            optionCElement.innerText = "Metal, Metal";
            optionDElement.innerText = "Nonmetal, Metal";
            break;
        case "4":
            questionTextElement.innerText = "Which of the following is not a Hydrocarbon?";
            optionAElement.innerText = "Isopropyl Alcohol";
            optionBElement.innerText = "Graphite";
            optionCElement.innerText = "Ethene";
            optionDElement.innerText = "Asphalt";
            break;
        case "5":
            questionTextElement.innerText = "Which of these is not a unique sign of incomplete combustion";
            optionAElement.innerText = "Orange Flickering Flame";
            optionBElement.innerText = "Soot";
            optionCElement.innerText = "Carbon Dioxide";
            optionDElement.innerText = "Yellow Flickering Flame";
            break;
        case "6":
            questionTextElement.innerText = "Which of the following is not a major cause of bee population decline?";
            optionAElement.innerText = "Contains OH-";
            optionBElement.innerText = "Neutralises acids";
            optionCElement.innerText = "High on the pH scale";
            optionDElement.innerText = "Corrosive";
            break;
        case "7":
            questionTextElement.innerText = "True or False? Water is an acid and a base";
            optionAElement.innerText = "";
            optionBElement.innerText = "true";
            optionCElement.innerText = "false";
            optionDElement.innerText = "";
            break;
        case "8":
            questionTextElement.innerText = "True or False? The term aqueous refers to the liquid state of a substance";
            optionAElement.innerText = "";
            optionBElement.innerText = "true";
            optionCElement.innerText = "false";
            optionDElement.innerText = "";
            break;
        case "9":
            questionTextElement.innerText = "What is the primary food for bees?";
            optionAElement.innerText = "Nectar";
            optionBElement.innerText = "Pollen";
            optionCElement.innerText = "Honey";
            optionDElement.innerText = "Flowers";
            break;
        case "10":
            questionTextElement.innerText = "What does the honey bee population do over the winter?";
            optionAElement.innerText = "Pollinate more flowers";
            optionBElement.innerText = "Migrate to a warmer area";
            optionCElement.innerText = "Take over another hive";
            optionDElement.innerText = "keep the queen warm and patiently wait for spring";
            break;
        case "11":
            questionTextElement.innerText = "How much honey does a small colony of bees need to survive the winter?";
            optionAElement.innerText = "15 pounds";
            optionBElement.innerText = "25 pounds";
            optionCElement.innerText = "35 pounds";
            optionDElement.innerText = "45 pounds";
            break;
        case "12":
            questionTextElement.innerText = "A queen bee lays______ eggs per day?";
            optionAElement.innerText = "10-20";
            optionBElement.innerText = "100-150";
            optionCElement.innerText = "1000-1500";
            optionDElement.innerText = "2450";
            break;
        case "13":
            questionTextElement.innerText = "How many eggs can a queen bee lay in her lifetime?";
            optionAElement.innerText = "1 billion";
            optionBElement.innerText = "1 million";
            optionCElement.innerText = "1 thousand";
            optionDElement.innerText = "1 trillion";
            break;
        case "14":
            questionTextElement.innerText = "What is the role of the male honey bees?";
            optionAElement.innerText = "Protect the hive";
            optionBElement.innerText = "Provide sperm to the queen";
            optionCElement.innerText = "Search for flowers";
            optionDElement.innerText = "Hunt down parasites";
            break;
        case "15":
            questionTextElement.innerText = "What does CCD stand for?";
            optionAElement.innerText = "Criminal Cat Disorder";
            optionBElement.innerText = "Collapse Colony Disorder";
            optionCElement.innerText = "Collony Collapse Disorder";
            optionDElement.innerText = "Colony Cancer Disorder";
            break;
        case "16":
            questionTextElement.innerText = "Why are bees considered Keystone species?";
            optionAElement.innerText = "They are natural predators to keep the food chain balance";
            optionBElement.innerText = "They are at the center of the food web. If you take them out the whole food web will suffer";
            optionCElement.innerText = "They fit through keys";
            optionDElement.innerText = "They are very toxic to humans";
            break;
        case "17":
            questionTextElement.innerText = "What percentage of our crops are bees responsible for?";
            optionAElement.innerText = "20%";
            optionBElement.innerText = "30%";
            optionCElement.innerText = "40%";
            optionDElement.innerText = "50%";
            break;
        case "18":
            questionTextElement.innerText = "What is the role of nurse bee’s?";
            optionAElement.innerText = "They provide medical support";
            optionBElement.innerText = "They help treat the queen";
            optionCElement.innerText = "They feed the worker bees";
            optionDElement.innerText = "They feed the larva";
            break;
        case "19":
            questionTextElement.innerText = "How long have bees been producing honey from flowering plants?";
            optionAElement.innerText = "1 million years";
            optionBElement.innerText = "20 000 years";
            optionCElement.innerText = "10-20 million years";
            optionDElement.innerText = "40+ million years";
            break;
        case "20":
            questionTextElement.innerText = "What is the number one cause of the loss of healthy bee populations?";
            optionAElement.innerText = "Neonicotinoids (toxins)";
            optionBElement.innerText = "Habitat loss";
            optionCElement.innerText = "Starvation";
            optionDElement.innerText = "Poaching";
            break;
        case "21":
            questionTextElement.innerText = "Bee Colonies use their odour to_____?";
            optionAElement.innerText = "Distinguish between friendly or intruder bee's";
            optionBElement.innerText = "Odour for pleasure";
            optionCElement.innerText = "Scare off other colonies or bees";
            optionDElement.innerText = "Mate";
            break;
        case "22":
            questionTextElement.innerText = "Bee’s make occasional trips outside in the winter months for?";
            optionAElement.innerText = "Getting nectar";
            optionBElement.innerText = "Hunting";
            optionCElement.innerText = "Protecting the hive";
            optionDElement.innerText = "Cleansing themselves";
            break;
        case "23":
            questionTextElement.innerText = "What should you do if your hive has been abandoned or is experiencing a heavy loss of bees?";
            optionAElement.innerText = "Buy a new hive";
            optionBElement.innerText = "Search for them";
            optionCElement.innerText = "Wait for them to comeback";
            optionDElement.innerText = "Report it to the Survey/Data Collection to determine the extent of CCD and the current status of honey bee colony production and health";
            break;
        case "24":
            questionTextElement.innerText = "How do bees collect nectar?";
            optionAElement.innerText = "Brushes to their skin";
            optionBElement.innerText = "With their nose";
            optionCElement.innerText = "With their tongue";
            optionDElement.innerText = "Use their tongue";
            break;
        case "25":
            questionTextElement.innerText = "What will happen if the bee population disappears?";
            optionAElement.innerText = "We would have to manually pollinate";
            optionBElement.innerText = "Loss of many crops and crop price rise, honey price rises";
            optionCElement.innerText = "We need to use alternative pollinators";
            optionDElement.innerText = "All of the above";
            break;
        case "26":
            questionTextElement.innerText = "What could be a possible solution for CCD?";
            optionAElement.innerText = "Turn to other pollinators";
            optionBElement.innerText = "Throw garbage at bee hives";
            optionCElement.innerText = "Find a way to make better tasting synthetic honey";
            optionDElement.innerText = "Find out why the problem is occuring";
            break;
        case "27":
            questionTextElement.innerText = "Which community (local,national,global) will suffer from a bee decline?";
            optionAElement.innerText = "ALL will equally suffer";
            optionBElement.innerText = "ALL will equally suffer";
            optionCElement.innerText = "ALL will equally suffer";
            optionDElement.innerText = "ALL will equally suffer";
            break;
        case "28":
            questionTextElement.innerText = "How much of the worlds GDP do the bees support?";
            optionAElement.innerText = "100 billion";
            optionBElement.innerText = "200 billion";
            optionCElement.innerText = "10 billion";
            optionDElement.innerText = "50 billion";
            break;
        case "29":
            questionTextElement.innerText = "What is one unfortunately easy solve to the parasite issue that would work on humans but doesn't work on bees?";
            optionAElement.innerText = "Surgery";
            optionBElement.innerText = "Vaccines";
            optionCElement.innerText = "Pills";
            optionDElement.innerText = "All of the above";
            break;
        case "30":
            questionTextElement.innerText = "What can you do to help the bees?";
            optionAElement.innerText = "Spray pesticides on your lawn";
            optionBElement.innerText = "Make a bee lover sign on the front of your door";
            optionCElement.innerText = "Buy food for them";
            optionDElement.innerText = "Dont spray pesticides on your lawn";
            break;
        case "31":
            questionTextElement.innerText = "What is one of the most efficient ways to help bees and us humans at the same time";
            optionAElement.innerText = "Plant grass";
            optionBElement.innerText = "Make hives in our homes";
            optionCElement.innerText = "Make urban gardens and hives";
            optionDElement.innerText = "Find the Queen Bee and retrieve her to the hive";
            break;
        case "32":
            questionTextElement.innerText = "How much extra honey do bees produce?";
            optionAElement.innerText = "2 times their need";
            optionBElement.innerText = "4 times their need";
            optionCElement.innerText = "3 times their need";
            optionDElement.innerText = "45 times their need";
            break;
        case "33":
            questionTextElement.innerText = "What gender are worker bees?";
            optionAElement.innerText = "Male";
            optionBElement.innerText = "Female";
            optionCElement.innerText = ".";
            optionDElement.innerText = ".";
            break;
        case "34":
            questionTextElement.innerText = "How many types of bees live in a hive?";
            optionAElement.innerText = "Drone, queen, worker, nurse, infants";
            optionBElement.innerText = "Male, female";
            optionCElement.innerText = "Male, queen, worker";
            optionDElement.innerText = "Male, queen, honey collectors";
            break;
        case "35":
            questionTextElement.innerText = "How fast can a bee fly?";
            optionAElement.innerText = "1 km/hour";
            optionBElement.innerText = "10 km/hour";
            optionCElement.innerText = "24 km/hour";
            optionDElement.innerText = "25 km/hour";
            break;
        case "36":
            questionTextElement.innerText = "What happens if a queen dies?";
            optionAElement.innerText = "The colony leaves";
            optionBElement.innerText = "The colony all dies";
            optionCElement.innerText = "The workers pick a new queen and the nurse bees feed it royal jelly";
            optionDElement.innerText = "The oldest nurse bee becomes the new queen bee";
            break;
        case "37":
            questionTextElement.innerText = "What is the main reason bears attack hives?";
            optionAElement.innerText = "Honey";
            optionBElement.innerText = "Bees";
            optionCElement.innerText = "Bee larvae";
            optionDElement.innerText = "To interact with bees";
            break;
        case "38":
            questionTextElement.innerText = "What happens if a worker bee uses her stinger on a non allergic human?";
            optionAElement.innerText = "Human dies";
            optionBElement.innerText = "Both die";
            optionCElement.innerText = "Bee dies";
            optionDElement.innerText = "Both survive";
            break;
        case "39":
            questionTextElement.innerText = "What was honey used for in Ancient Egypt?";
            optionAElement.innerText = "Sweeteners";
            optionBElement.innerText = "To pay taxes";
            optionCElement.innerText = "A royalty treat";
            optionDElement.innerText = "As glue";
            break;
        case "40":
            questionTextElement.innerText = "Why do honey bees make hexagons?";
            optionAElement.innerText = "Just because";
            optionBElement.innerText = "They like hexagons";
            optionCElement.innerText = "Over the years they have evolved into learning that the hexagon is the least time consuming and best shape for their hives";
            optionDElement.innerText = "They dont only make hexagons they make octagons in the winter";
            break;
        case "41":
            questionTextElement.innerText = "There are currently ______ beekeepers in Canada?";
            optionAElement.innerText = "30 000";
            optionBElement.innerText = "43 000";
            optionCElement.innerText = "35 000";
            optionDElement.innerText = "45 000";
            break;
        case "42":
            questionTextElement.innerText = "What is the scientific name of the bee?";
            optionAElement.innerText = "Anthophila";
            optionBElement.innerText = "Arthropoda";
            optionCElement.innerText = "Diptera";
            optionDElement.innerText = "Bos Taurus";
            break;
        case "43":
            questionTextElement.innerText = "Why can bee populated communities and non bee populated communities be equally affected by bee population decline?";
            optionAElement.innerText = "They cant be affected equally";
            optionBElement.innerText = "Since the bee is a keystone species";
            optionCElement.innerText = "The bee will eventually migrate to that area";
            optionDElement.innerText = "The bee population will have no affect on any other area";
            break;
        case "44":
            questionTextElement.innerText = "What is the hive made of?";
            optionAElement.innerText = "Twigs";
            optionBElement.innerText = "Wax";
            optionCElement.innerText = "Feces";
            optionDElement.innerText = "Mud";
            break;
        case "45":
            questionTextElement.innerText = "How many known bee species are there?";
            optionAElement.innerText = "10 000";
            optionBElement.innerText = "20 000";
            optionCElement.innerText = "30 000";
            optionDElement.innerText = "40 000";
            break;
        case "46":
            questionTextElement.innerText = "How long do Killer bees chase when they are agitated before giving up?";
            optionAElement.innerText = "1/4 km";
            optionBElement.innerText = "1/5 km";
            optionCElement.innerText = "1/2 km";
            optionDElement.innerText = "1 km";
            break;
        case "47":
            questionTextElement.innerText = "What do beekeepers use to calm the bees down before they collect the honey?";
            optionAElement.innerText = "Food";
            optionBElement.innerText = "Other insects";
            optionCElement.innerText = "Cheese";
            optionDElement.innerText = "Smoke";
            break;
        case "48":
            questionTextElement.innerText = "Which of the following is not a communication method?";
            optionAElement.innerText = "Pheromones";
            optionBElement.innerText = "Singing";
            optionCElement.innerText = "Dancing";
            optionDElement.innerText = "All of the above";
            break;
        case "49":
            questionTextElement.innerText = "What percentage of plants require bees to pollinate them?";
            optionAElement.innerText = "50%";
            optionBElement.innerText = "72%";
            optionCElement.innerText = "88%";
            optionDElement.innerText = "20%";
            break;
        case "50":
            questionTextElement.innerText = "How many eyes do bees have?";
            optionAElement.innerText = "2";
            optionBElement.innerText = "3";
            optionCElement.innerText = "4";
            optionDElement.innerText = "5";
            break;
        
    }
        
    
    questionDiv.classList.remove("hidden");

}

function answer(idClicked) {
    var questionDiv = document.getElementById("question");
    var questionId = questionDiv.dataset.questionSelected;
    
    if (idClicked === "optionA") {
        
        if (questionId === "1" || questionId === "2" || questionId === "20" || questionId === "21" || questionId === "26" || questionId === "27" || questionId === "34" || questionId === "42" || questionId === "46") {
            //correct
            score1result = score1result+2;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
                if (turn==2) {
                    var p = document.getElementById("player1");
                    p.classList.add("position2");
                    p.classList.remove("position1");
            } else if (turn==4) {
                var p = document.getElementById("player1");
                p.classList.add("position3");
                p.classList.remove("position2");
            } else if (turn==6) {
                var p = document.getElementById("player1");
                p.classList.add("position4");
                p.classList.remove("position3");
            } else if (turn==8) {
                var p = document.getElementById("player1");
                p.classList.add("position5");
                p.classList.remove("position4");
            } else if (turn==10) {
                var p = document.getElementById("player1");
                p.classList.add("position6");
                p.classList.remove("position5");
            } else if (turn==12) {
                var p = document.getElementById("player1");
                p.classList.add("position7");
                p.classList.remove("position6");
            } else if (turn==14) {
                var p = document.getElementById("player1");
                p.classList.add("position8");
                p.classList.remove("position7");
            } else if (turn==16) {
                var p = document.getElementById("player1");
                p.classList.add("position9");
                p.classList.remove("position8");
            } else if (turn==18) {
                var p = document.getElementById("player1");
                p.classList.add("position0");
                p.classList.remove("position9");
            }
        } else {
            //incorrect
            turn = turn-2;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
                        score1result = score1result-1;
            document.getElementById("score1result").innerText = score1result;
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var p = document.getElementById("poisonwheel");
            p.classList.remove("hidden");
            var s = document.getElementById("wheeltip");
            s.classList.remove("hidden");
            s.classList.add("spinning");
            setTimeout(function() {
                
                var s = document.getElementById("wheeltip");
                var multiplier = 25 ;
                var rotateDeg = getRandomInt(360 * multiplier, 720  * multiplier);
                s.style.transform = "rotate("+ rotateDeg +"deg)";

                spinnerValue = getSpinnerLocation(rotateDeg, "poisonSpinner");

            },100);
        }
        
    } else if (idClicked === "optionB") {
        if (questionId === "4" || questionId === "13" || questionId === "14" || questionId === "16" || questionId === "17" || questionId === "27" || questionId === "28" || questionId === "31" || questionId === "33" || questionId === "39" || questionId === "43" || questionId === "44" || questionId === "45" || questionId === "48") {
        score1result = score1result+2;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            if (turn==2) {
                    var p = document.getElementById("player1");
                    p.classList.add("position2");
                    p.classList.remove("position1");
            } else if (turn==4) {
                var p = document.getElementById("player1");
                p.classList.add("position3");
                p.classList.remove("position2");
            } else if (turn==6) {
                var p = document.getElementById("player1");
                p.classList.add("position4");
                p.classList.remove("position3");
            } else if (turn==8) {
                var p = document.getElementById("player1");
                p.classList.add("position5");
                p.classList.remove("position4");
            } else if (turn==10) {
                var p = document.getElementById("player1");
                p.classList.add("position6");
                p.classList.remove("position5");
            } else if (turn==12) {
                var p = document.getElementById("player1");
                p.classList.add("position7");
                p.classList.remove("position6");
            } else if (turn==14) {
                var p = document.getElementById("player1");
                p.classList.add("position8");
                p.classList.remove("position7");
            } else if (turn==16) {
                var p = document.getElementById("player1");
                p.classList.add("position9");
                p.classList.remove("position8");
            } else if (turn==18) {
                var p = document.getElementById("player1");
                p.classList.add("position0");
                p.classList.remove("position9");
            }
        } else {
            turn = turn-2;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
                        score1result = score1result-1;
            document.getElementById("score1result").innerText = score1result;
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var p = document.getElementById("poisonwheel");
            p.classList.remove("hidden");
            var s = document.getElementById("wheeltip");
            s.classList.remove("hidden");
            s.classList.add("spinning");
            setTimeout(function() {
                
                var s = document.getElementById("wheeltip");
                var multiplier = 20;
                var rotateDeg = getRandomInt(360 * multiplier, 720  * multiplier);
                s.style.transform = "rotate("+ rotateDeg +"deg)";

                spinnerValue = getSpinnerLocation(rotateDeg, "poisonSpinner");

            },100);
        }
    } else if (idClicked === "optionC") {
        if (questionId === "3" || questionId === "5" || questionId === "7" || questionId === "8" || questionId === "9" || questionId === "11" || questionId === "12" || questionId === "15" || questionId === "19" || questionId === "24" || questionId === "27" || questionId === "32" || questionId === "36" || questionId === "37" || questionId === "38" || questionId === "40" || questionId === "49") {
        score1result = score1result+2;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            if (turn==2) {
                    var p = document.getElementById("player1");
                    p.classList.add("position2");
                    p.classList.remove("position1");
            } else if (turn==4) {
                var p = document.getElementById("player1");
                p.classList.add("position3");
                p.classList.remove("position2");
            } else if (turn==6) {
                var p = document.getElementById("player1");
                p.classList.add("position4");
                p.classList.remove("position3");
            } else if (turn==8) {
                var p = document.getElementById("player1");
                p.classList.add("position5");
                p.classList.remove("position4");
            } else if (turn==10) {
                var p = document.getElementById("player1");
                p.classList.add("position6");
                p.classList.remove("position5");
            } else if (turn==12) {
                var p = document.getElementById("player1");
                p.classList.add("position7");
                p.classList.remove("position6");
            } else if (turn==14) {
                var p = document.getElementById("player1");
                p.classList.add("position8");
                p.classList.remove("position7");
            } else if (turn==16) {
                var p = document.getElementById("player1");
                p.classList.add("position9");
                p.classList.remove("position8");
            } else if (turn==18) {
                var p = document.getElementById("player1");
                p.classList.add("position0");
                p.classList.remove("position9");
            }
        } else {
            turn = turn-2;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
                        score1result = score1result-1;
            document.getElementById("score1result").innerText = score1result;
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var p = document.getElementById("poisonwheel");
            p.classList.remove("hidden");
            var s = document.getElementById("wheeltip");
            s.classList.remove("hidden");
            s.classList.add("spinning");
            setTimeout(function() {
                
                var s = document.getElementById("wheeltip");
                var multiplier = 15;
                var rotateDeg = getRandomInt(360 * multiplier, 720  * multiplier);
                s.style.transform = "rotate("+ rotateDeg +"deg)";

                spinnerValue = getSpinnerLocation(rotateDeg, "poisonSpinner");

            },100);
            
        }
    } else if (idClicked === "optionD") {
        if (questionId === "6" || questionId === "10" || questionId === "18" || questionId === "22" || questionId === "23" || questionId === "25" || questionId === "27" || questionId === "29" || questionId === "30" || questionId === "35" || questionId === "41" || questionId === "47" || questionId === "50") {
        score1result = score1result+2;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            if (turn==2) {
                    var p = document.getElementById("player1");
                    p.classList.add("position2");
                    p.classList.remove("position1");
            } else if (turn==4) {
                var p = document.getElementById("player1");
                p.classList.add("position3");
                p.classList.remove("position2");
            } else if (turn==6) {
                var p = document.getElementById("player1");
                p.classList.add("position4");
                p.classList.remove("position3");
            } else if (turn==8) {
                var p = document.getElementById("player1");
                p.classList.add("position5");
                p.classList.remove("position4");
            } else if (turn==10) {
                var p = document.getElementById("player1");
                p.classList.add("position6");
                p.classList.remove("position5");
            } else if (turn==12) {
                var p = document.getElementById("player1");
                p.classList.add("position7");
                p.classList.remove("position6");
            } else if (turn==14) {
                var p = document.getElementById("player1");
                p.classList.add("position8");
                p.classList.remove("position7");
            } else if (turn==16) {
                var p = document.getElementById("player1");
                p.classList.add("position9");
                p.classList.remove("position8");
            } else if (turn==18) {
                var p = document.getElementById("player1");
                p.classList.add("position0");
                p.classList.remove("position9");
            }
            
        } else {
            score1result = score1result-1;
            document.getElementById("score1result").innerText = score1result;
            var s = document.getElementById("question");
            s.classList.add("hidden");
            var t = document.getElementById("table");
            t.classList.add("hidden");
            
            var x = document.getElementById("wheel");
            x.classList.add("hidden");
            var p = document.getElementById("poisonwheel");
            p.classList.remove("hidden");
            var s = document.getElementById("wheeltip");
            s.classList.remove("hidden");
            s.classList.add("spinning");
            setTimeout(function() {
                
                var s = document.getElementById("wheeltip");
                var multiplier = 10;
                var rotateDeg = getRandomInt(10 * multiplier, 1000  * multiplier);
                s.style.transform = "rotate("+ rotateDeg +"deg)";

                spinnerValue = getSpinnerLocation(rotateDeg, "poisonSpinner");

            },100);
        }
    } 
    
}