function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.right = (sidebar.style.right === '0px') ? '-3000px' : '0px';
  }

var errungenschaften = ["Higgs-Mechanismus", "Dunkle Materie und Dunkle Energie", "Ungleichgewicht zwischen Materie und Antimaterie", "Zustände kurz nach dem Urknall", "Existenz zusätzlicher Raumdimensionen"]
var errungenschaften_text = ["Die Entdeckung des Higgs-Teilchens gelang mit dem Large Hadron Collider (LHC) am CERN. Dies steht im Zusammenhang mit dem Higgs-Mechanismus. Durch den Higgs-Mechanismus wird beschrieben, wie die grundlegende Eigenschaft „Masse“ auf der Ebene der Elementarteilchen zustande kommt.", "Dunkle Materie und Dunkle Energie sind mysteriöse Bestandteile des Universums, die die meisten seiner Masse und Energie ausmachen. Während der LHC nicht direkt auf sie abzielt, könnte er indirekt unser Verständnis davon erweitern, indem er neue Teilchen oder Kräfte entdeckt, die mit ihnen in Zusammenhang stehen könnten. Sein Beitrag zur Erforschung der fundamentalen Physik trägt dazu bei, unser Verständnis des Universums zu vertiefen, was auch unser Verständnis von Dunkler Materie und Dunkler Energie verbessern könnte.", "Kurz nach dem Urknall sollten Materie und Antimaterie zu gleichen Teilen entstanden sein. Heute enthält das Universum aber mehr Materie, aus der Sterne und auch wir selbst bestehen. Die Forschungen am LHC konzentrieren sich auch auf das Ungleichgewicht zwischen Materie und Antimaterie im Universum. Wissenschaftler versuchen zu verstehen, warum im heutigen Universum Materie dominiert, während Antimaterie nur in geringen Mengen vorhanden ist. Durch Kollisionen von Teilchen am LHC können sie die Eigenschaften von Materie und Antimaterie genauer untersuchen und nach Hinweisen suchen, die zur Klärung dieses Ungleichgewichts beitragen könnten.", "Der LHC am CERN hilft bei der Erforschung der Bedingungen kurz nach dem Urknall, als das Universum extrem heiß und dicht war. Durch die Erzeugung von Bedingungen, die denen im frühen Universum ähneln, können Wissenschaftler die fundamentalen Kräfte und Teilchen untersuchen, die in den ersten Sekundenbruchteilen nach dem Urknall existierten. Dies ermöglicht Einblicke in die Entstehung der Materie, die Bildung von Elementarteilchen und die Entwicklung des Universums.", "Unser gewohnter Raum hat drei Dimensionen. Theorien, die über das Standardmodell hinausgehen, schlagen jedoch versteckte und noch unentdeckte Raumdimensionen vor, die bei sehr hohen Energien relevant sein könnten. In einigen dieser Modelle könnten die zusätzlichen Raumdimensionen so groß sein, dass sie mit dem LHC sichtbar gemacht werden können. Daher werden die Daten aus allen LHC-Experimenten gründlich auf Hinweise auf solche zusätzlichen Raumdimensionen untersucht."]

function left(){
    console.log("hi")
    let current = document.getElementById("title").innerHTML;

    let index = errungenschaften.indexOf(current)

    if(index == 0){
        document.getElementById("title").innerHTML = `${errungenschaften[errungenschaften.length-1]}`
        document.getElementById("title-content").innerHTML = `${errungenschaften_text[errungenschaften_text.length-1]}`
    }else{
        document.getElementById("title").innerHTML = `${errungenschaften[index-1]}`
        document.getElementById("title-content").innerHTML = `${errungenschaften_text[index-1]}`
    }
}
  
function right(){
    console.log("dsfa")
    let current = document.getElementById("title").innerHTML;

    let index = errungenschaften.indexOf(current)

    if(index == (errungenschaften.length-1)){
        document.getElementById("title").innerHTML = `${errungenschaften[0]}`
        document.getElementById("title-content").innerHTML = `${errungenschaften_text[0]}`

    }else{
        document.getElementById("title").innerHTML = `${errungenschaften[index+1]}`
        document.getElementById("title-content").innerHTML = `${errungenschaften_text[index+1]}`
    }
}

function myFunction(element){
    let value = element.innerHTML;
    var targetElement;

    if(value == "Large Hadron Collider"){
        targetElement = document.getElementById("LHC");
    }
    if(value == "Geschichte"){
        targetElement = document.getElementById("Geschichte");
    }
    if(value == "Funktionsweise"){
        targetElement = document.getElementById("Funktionsweise");
    }
    if(value == "Errungenschaften"){
        targetElement = document.getElementById("Errungenschaften");
    }
    if(value == "Fakten und Zahlen"){
        targetElement = document.getElementById("zahlen");
    }
    targetElement.scrollIntoView({ behavior: 'smooth' });
}
