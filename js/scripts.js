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
                                     score1result = score1result + 4;
           document.getElementById("score1result").innerText = score1result;
        var y = document.getElementById ("player1");
        y.classList.add("position1");
        y.classList.remove("position0");

        
    } else if (turn==2) {
document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        document.getElementById("score1result").innerText = score1result;
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
        console.log (score1result);
        if (score1result>30) {
            var b = document.getElementById("board");
                b.classList.add("hidden");
                var c = document.getElementById("cover");
                c.classList.remove("hidden");
                var g = document.getElementById("win");
                g.classList.remove("hidden");
        } else {
                    turn=0
        }

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
            questionTextElement.innerText = "Which of the following is not a unique determining factor for whether or not a substance is a base?";
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
            questionTextElement.innerText = "A ____ cell is a complex type of cell which has evolved from a more simple type of cell.";
            optionAElement.innerText = "Protogenic";
            optionBElement.innerText = "Euler";
            optionCElement.innerText = "Eukaryotic";
            optionDElement.innerText = "Endothelial";
            break;
        case "10":
            questionTextElement.innerText = "A ____ is a cylindrical organelle located near the nucleus of an animal cell that always occurs in pairs.";
            optionAElement.innerText = "Centromere";
            optionBElement.innerText = "Microtubule";
            optionCElement.innerText = "Cytoskeleton";
            optionDElement.innerText = "Centriole";
            break;
        case "11":
            questionTextElement.innerText = "An organism made up of ____ is called a ____ organism.";
            optionAElement.innerText = "One cell; Multicellular";
            optionBElement.innerText = "Many cells; plenti cellular";
            optionCElement.innerText = "Many cells; Multicellular";
            optionDElement.innerText = "Many cells; cellular";
            break;
        case "12":
            questionTextElement.innerText = "What is the main function of the Golgi Body";
            optionAElement.innerText = "Transport materials throughout the cell";
            optionBElement.innerText = "Stores materials for the cell";
            optionCElement.innerText = "Collects and processes materials to be removed from the cell";
            optionDElement.innerText = "Supports the cell and allows certain substances and others out";
            break;
        case "13":
            questionTextElement.innerText = "Which of the following is not a characteristic of all living things?";
            optionAElement.innerText = "Living things produce waste";
            optionBElement.innerText = "Living things require oxygen";
            optionCElement.innerText = "Living things can sense and respond to changes in the environment";
            optionDElement.innerText = "Living things require energy";
            break;
        case "14":
            questionTextElement.innerText = "In what stage of mitosis do the chromosomes divide?";
            optionAElement.innerText = "Metaphase";
            optionBElement.innerText = "Anaphase";
            optionCElement.innerText = "Telophase";
            optionDElement.innerText = "Prophase";
            break;
        case "15":
            questionTextElement.innerText = "True or False? The division of the cell (cytokinesis) occurs right after the end.";
            optionAElement.innerText = "";
            optionBElement.innerText = "True";
            optionCElement.innerText = "False";
            optionDElement.innerText = "";
            break;
        case "16":
            questionTextElement.innerText = "True or False? The centromere is the piece of the chromosome that connects the upper and lower sister chromatids.";
            optionAElement.innerText = "";
            optionBElement.innerText = "True";
            optionCElement.innerText = "False";
            optionDElement.innerText = "";
            break;
        case "17":
            questionTextElement.innerText = "True or False? Koppen used Temperature, Precipitation, and Plant communities for his climate classification system.";
            optionAElement.innerText = "";
            optionBElement.innerText = "True";
            optionCElement.innerText = "False";
            optionDElement.innerText = "";
            break;
        case "18":
            questionTextElement.innerText = "Frequency and wavelength are ____ related";
            optionAElement.innerText = "Are";
            optionBElement.innerText = "Directly";
            optionCElement.innerText = "Not";
            optionDElement.innerText = "Indirectly";
            break;
        case "19":
            questionTextElement.innerText = "Scratching, crushing or rubbing certain crystals to produce light is known as____?";
            optionAElement.innerText = "Chemiluminescence";
            optionBElement.innerText = "Bioluminescence";
            optionCElement.innerText = "Triboluminescence";
            optionDElement.innerText = "Fluorescence";
            break;
        case "20":
            questionTextElement.innerText = "What is the speed of light?";
            optionAElement.innerText = "3.00 x 10^8 m/s";
            optionBElement.innerText = "3.00 x 10^7 m/s";
            optionCElement.innerText = "3.8 x 10^8 m/s";
            optionDElement.innerText = "3.00 x 10^9 m/s";
            break;
        case "21":
            questionTextElement.innerText = "What is diffuse reflection?";
            optionAElement.innerText = "When light reflects off of an irregular surface";
            optionBElement.innerText = "When light diffuses through a surface while also reflecting";
            optionCElement.innerText = "When light reflects after diffusing through a surface";
            optionDElement.innerText = "When light diffuses through a tiny membrane to only allow a small portion to reflect";
            break;
        case "22":
            questionTextElement.innerText = "What is the index of refraction?";
            optionAElement.innerText = "Ratio of speed of light in a medium to the speed of light in a vacuum";
            optionBElement.innerText = "Ratio of speed of sound in a vacuum to speed of sound in a medium";
            optionCElement.innerText = "Ratio of speed of light in a vacuum to speed of sound in a medium";
            optionDElement.innerText = "Ratio of speed of light in a vacuum to speed of light in a medium";
            break;
        case "23":
            questionTextElement.innerText = "True or False? Light bends towards the normal when the speed of light in the second medium is less than the first and vice versa.  ";
            optionAElement.innerText = "";
            optionBElement.innerText = "";
            optionCElement.innerText = "false";
            optionDElement.innerText = "true";
            break;
        case "24":
            questionTextElement.innerText = "True or False? Cones in eyes detect low levels of light and therefore allow for “night vision”.";
            optionAElement.innerText = "";
            optionBElement.innerText = "true";
            optionCElement.innerText = "false";
            optionDElement.innerText = "";
            break;
        case "25":
            questionTextElement.innerText = "Altitude is ____ and latitude is ____.";
            optionAElement.innerText = "Distance from the equator; height above ground level";
            optionBElement.innerText = "Height above sea level; distance from the north pole";
            optionCElement.innerText = "Height above ground level; distance from the equator";
            optionDElement.innerText = "Height above sea level; distance from equator";
            break;
        case "26":
            questionTextElement.innerText = "The ____ side of a mountain receives little rain, while the ____ side receives lots of rain.";
            optionAElement.innerText = "Leeward; Windward";
            optionBElement.innerText = "Windward; Leeward";
            optionCElement.innerText = "Lindward; Weeward";
            optionDElement.innerText = "Dryward; Wetward";
            break;
        case "27":
            questionTextElement.innerText = "True or False? Most of the energy absorbed by the earth is emitted at lower energy gamma radiation.";
            optionAElement.innerText = "false";
            optionBElement.innerText = "";
            optionCElement.innerText = "true";
            optionDElement.innerText = "";
            break;
        case "28":
            questionTextElement.innerText = "Which of the following is not a greenhouse gas?";
            optionAElement.innerText = "Methane";
            optionBElement.innerText = "Nitrogen";
            optionCElement.innerText = "Carbon Dioxide";
            optionDElement.innerText = "Water Vapour";
            break;
        case "29":
            questionTextElement.innerText = "How much of the incoming solar energy is reflected by the clouds?";
            optionAElement.innerText = "6%";
            optionBElement.innerText = "4%";
            optionCElement.innerText = "19%";
            optionDElement.innerText = "20%";
            break;
        case "30":
            questionTextElement.innerText = "Which of these greenhouse gasses can absorb the most infrared radiation?";
            optionAElement.innerText = "Water Vapour";
            optionBElement.innerText = "Carbon Dioxide";
            optionCElement.innerText = "Methane";
            optionDElement.innerText = "Nitrous Oxide";
            break;
        case "31":
            questionTextElement.innerText = "Which of the following is not a polyatomic ion?";
            optionAElement.innerText = "Nitrite";
            optionBElement.innerText = "Phosphite";
            optionCElement.innerText = "Chlorate";
            optionDElement.innerText = "Phosphate";
            break;
        case "32":
            questionTextElement.innerText = "True or False, an atom is the basic unit of life.";
            optionAElement.innerText = "";
            optionBElement.innerText = "True";
            optionCElement.innerText = "False";
            optionDElement.innerText = "";
            break;
        case "33":
            questionTextElement.innerText = "Rows in a periodic table indicate ______ and columns indicate _______.";
            optionAElement.innerText = "=Valence electrons, number of rings";
            optionBElement.innerText = "Number of rings, valence electrons";
            optionCElement.innerText = "Number of protons, number of electrons";
            optionDElement.innerText = "Number of rings, number of protons";
            break;
        case "34":
            questionTextElement.innerText = "Which of the following is not part of the particle theory?";
            optionAElement.innerText = "Particles grow in size when heated";
            optionBElement.innerText = "All matter is made up of tiny particles.";
            optionCElement.innerText = "The particles of matter are always moving.";
            optionDElement.innerText = "Adding heat to matter makes the particles move faster.";
            break;
        case "35":
            questionTextElement.innerText = "True or False? Etching glass with acid is a chemical change";
            optionAElement.innerText = "";
            optionBElement.innerText = "True";
            optionCElement.innerText = "";
            optionDElement.innerText = "False";
            break;
        case "36":
            questionTextElement.innerText = "True or False? Lithium is more reactive than Iron";
            optionAElement.innerText = "";
            optionBElement.innerText = "False";
            optionCElement.innerText = "True";
            optionDElement.innerText = "";
            break;
        case "37":
            questionTextElement.innerText = "Which of the following is not a transition metal?";
            optionAElement.innerText = "Platinum";
            optionBElement.innerText = "Cobalt";
            optionCElement.innerText = "Caesium";
            optionDElement.innerText = "Iridium";
            break;
        case "38":
            questionTextElement.innerText = "What is the cellular membrane made of?";
            optionAElement.innerText = "Fibers";
            optionBElement.innerText = "Water";
            optionCElement.innerText = "Phospholipids";
            optionDElement.innerText = "Fat";
            break;
        case "39":
            questionTextElement.innerText = "Which organ system is in charge of movement?";
            optionAElement.innerText = "Muscular";
            optionBElement.innerText = "Circulatory";
            optionCElement.innerText = "Nervous";
            optionDElement.innerText = "All of the above";
            break;
        case "40":
            questionTextElement.innerText = "Which organ is in charge of creating amylase?";
            optionAElement.innerText = "Liver";
            optionBElement.innerText = "Pancreas";
            optionCElement.innerText = "Salivary gland";
            optionDElement.innerText = "Gallbladder";
            break;
        case "41":
            questionTextElement.innerText = "What is the process in which cancer cells travel through the bloodstream?";
            optionAElement.innerText = "Chemotherapy";
            optionBElement.innerText = "Homeostasis";
            optionCElement.innerText = "Metabolism";
            optionDElement.innerText = "Metastasis";
            break;
        case "42":
            questionTextElement.innerText = "True or False? The rough endoplasmic reticulum is covered in ribosomes.";
            optionAElement.innerText = "True";
            optionBElement.innerText = "False";
            optionCElement.innerText = "";
            optionDElement.innerText = "";
            break;
        case "43":
            questionTextElement.innerText = "True or False? The mitochondria is the only organelle that creates energy.";
            optionAElement.innerText = "False";
            optionBElement.innerText = "True";
            optionCElement.innerText = "";
            optionDElement.innerText = "";
            break;
        case "44":
            questionTextElement.innerText = "True or False? The Nucleus is within the Nucleolus.";
            optionAElement.innerText = "True";
            optionBElement.innerText = "False";
            optionCElement.innerText = "";
            optionDElement.innerText = "";
            break;
        case "45":
            questionTextElement.innerText = "Which of the following is not a cancer treatment method?";
            optionAElement.innerText = "Chemotherapy";
            optionBElement.innerText = "Antioxidants";
            optionCElement.innerText = "Surgery";
            optionDElement.innerText = "Radiation";
            break;
        case "46":
            questionTextElement.innerText = "True or False? The primary colours of light are red,blue,yellow";
            optionAElement.innerText = "False";
            optionBElement.innerText = "True";
            optionCElement.innerText = "";
            optionDElement.innerText = "";
            break;
        case "47":
            questionTextElement.innerText = "True or False? There is only one type of cone in the human eye.";
            optionAElement.innerText = "";
            optionBElement.innerText = "";
            optionCElement.innerText = "True";
            optionDElement.innerText = "False";
            break;
        case "48":
            questionTextElement.innerText = "What is presbyopia?";
            optionAElement.innerText = "Farsightedness";
            optionBElement.innerText = "Farsightedness due to aging";
            optionCElement.innerText = "Nearsightedness";
            optionDElement.innerText = "None of the above";
            break;
        case "49":
            questionTextElement.innerText = "What is Hyperopia?";
            optionAElement.innerText = "Nearsightedness";
            optionBElement.innerText = "Farsightedness due to aging";
            optionCElement.innerText = "Farsightedness";
            optionDElement.innerText = "None of the above";
            break;
        case "50":
            questionTextElement.innerText = "Which of the following is not part of the eye?";
            optionAElement.innerText = "Retina";
            optionBElement.innerText = "Optic nerve";
            optionCElement.innerText = "Lens";
            optionDElement.innerText = "Eyelid";
            break;
    case "51":
            questionTextElement.innerText = "Refracted rays in a diverging lens ____.";
            optionAElement.innerText = "Come together";
            optionBElement.innerText = "Spread apart";
            optionCElement.innerText = "Stay parallel";
            optionDElement.innerText = "None of the above";
            break;
    case "52":
            questionTextElement.innerText = "Refracted rays in a converging lens____.";
            optionAElement.innerText = "Come together";
            optionBElement.innerText = "Spread apart";
            optionCElement.innerText = "Stay parallel";
            optionDElement.innerText = "None of the above";
            break;
    case "53":
            questionTextElement.innerText = "Which of the following is not a proxy record?";
            optionAElement.innerText = "Coral reefs";
            optionBElement.innerText = "Tree Rings";
            optionCElement.innerText = "Ice Cores";
            optionDElement.innerText = "The Atmosphere";
            break;
    case "54":
            questionTextElement.innerText = "Which of the following do meteorologists not measure?";
            optionAElement.innerText = "Temperature";
            optionBElement.innerText = "UV";
            optionCElement.innerText = "Pollen";
            optionDElement.innerText = "Climate";
            break;
    case "55":
            questionTextElement.innerText = "Which of the following is not a scientist that studies climate?";
            optionAElement.innerText = "Climatologist";
            optionBElement.innerText = "Atmospheric scientist";
            optionCElement.innerText = "Paleoclimatologist";
            optionDElement.innerText = "Climatographer";
            break;
    case "56":
            questionTextElement.innerText = "True or False? The earth absorbs more radiation than it emits.";
            optionAElement.innerText = "False";
            optionBElement.innerText = "True";
            optionCElement.innerText = "";
            optionDElement.innerText = "";
            break;
    case "57":
            questionTextElement.innerText = "What percentage of solar radiation is absorbed by the ocean and land?";
            optionAElement.innerText = "41%";
            optionBElement.innerText = "51%";
            optionCElement.innerText = "61%";
            optionDElement.innerText = "71%";
            break;
    case "58":
            questionTextElement.innerText = "What percentage of solar radiation is reflected by the atmosphere?";
            optionAElement.innerText = "2%";
            optionBElement.innerText = "20%";
            optionCElement.innerText = "6%";
            optionDElement.innerText = "51%";
            break;
    case "59":
            questionTextElement.innerText = "What factors are taken into account for climate zones?";
            optionAElement.innerText = "Temperature";
            optionBElement.innerText = "Precipitation";
            optionCElement.innerText = "Plant communities";
            optionDElement.innerText = "All of the above";
            break;
    case "60":
            questionTextElement.innerText = "True and False. Ice sheets are thin pieces of ice floating in the ocean";
            optionAElement.innerText = "True";
            optionBElement.innerText = "False";
            optionCElement.innerText = "";
            optionDElement.innerText = "";
            break;

            
        
    }
        
    
    questionDiv.classList.remove("hidden");

}

function answer(idClicked) {
    var questionDiv = document.getElementById("question");
    var questionId = questionDiv.dataset.questionSelected;
    
    if (idClicked === "optionA") {
        
            if (questionId === "1" || questionId === "2" || questionId === "20" || questionId === "21" || questionId === "26" || questionId === "27" || questionId === "34" || questionId === "42" || questionId === "46" || questionId === "52" || questionId === "56") {
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
        if (questionId === "4" || questionId === "13" || questionId === "14" || questionId === "16" || questionId === "17" || questionId === "28" || questionId === "31" || questionId === "33" || questionId === "43" || questionId === "44" || questionId === "45" || questionId === "48" || questionId === "51" || questionId === "57" || questionId === "60") {
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
        if (questionId === "3" || questionId === "5" || questionId === "7" || questionId === "8" || questionId === "9" || questionId === "11" || questionId === "12" || questionId === "15" || questionId === "19" || questionId === "24" || questionId === "32" || questionId === "36" || questionId === "37" || questionId === "38" || questionId === "40" || questionId === "49" || questionId === "58") {
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
        if (questionId === "6" || questionId === "10" || questionId === "18" || questionId === "22" || questionId === "23" || questionId === "25" || questionId === "29" || questionId === "30" || questionId === "35" || questionId === "39" || questionId === "41" || questionId === "47" || questionId === "50" || questionId === "53" || questionId === "54" || questionId === "55" || questionId === "59") {
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