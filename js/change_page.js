//detect when the run button is pressed
function runCodePy(clicked="") {
    var selectedTabName = document.getElementById("selected").lastChild.id.replace(".py", ""); //get name of the selected tab
    if (clicked == ""){
        var code = document.getElementById(selectedTabName+"Code").value;
    }
    else{
        var code = clicked
    }
    const commands = ["projects()", "art()"];
    code = code.replace(/[\s.]+/g, '');
    var codePy = code.toLowerCase().replace("()", ".py");
    var openedTabs = document.getElementsByClassName("tabs");
    var ids = Array.from(openedTabs).map((element) => element.lastChild.id);
    console.log(clicked);
    if (code == "seximal()" || code == "seximalCalculator()" || code == "seximal_calculator()" || code == "calculator()"){
        
        window.open("https://seximalcalculator.dander.es");
    }
    else if (commands.includes(code)){
        if (ids.includes(codePy)) {
            openPage(document.getElementById(codePy).parentElement); //passing the li that we want to open
        }
        else{
            createTabs(codePy);
        }
    }

    else{
        alert("Please enter a valid command");
    }
}

// FAILSAFE, ONLY USE IF U CAN DELETE HOME PAGE
// function home() {
//     var openedTabs = document.getElementsByClassName("tabs");
//     var ids = Array.from(openedTabs).map((element) => element.lastChild.id);
//     if (!ids.includes("home.py")){ //muy cutre sry
//         document.getElementById("navTable").innerHTML+= "<li id='' class='tabs'><a id='pageName' onclick='return openPage.call(this)'>home.py</a> <a id='home.py' class='exit' onclick='return exitWindow.call(this);' target='_blank' style='color: #858585;'>x</a></li>"
//     }
// }


function createTabs(name){ //name with .py
    var tab = document.getElementById("selected");
    const clone = tab.cloneNode(true);
    tab.id = "";
    clone.firstChild.textContent = name;
    let root = clone.firstChild.textContent
    clone.lastChild.id = root; // the x has the id for all the tab
    document.getElementById("navTable").appendChild(clone);
    //change root path
    document.getElementById("rootText").textContent = ("Ander Gaytán > "+ root);
    openPage(clone);
    
}

//select page
function openPage(selected = undefined) { //pass x object

    //remove all selected tabs    
    var openedTabs = document.getElementsByClassName("tabs");
    for( var i = 0; i < openedTabs.length; i++){
        openedTabs[i].id = "";
    }
    var li = this.parentElement;
    if(li != undefined){
        li.id = "selected";
        changePage(li.lastChild.id); //remove the .py from the name
    }
    else if(selected!= undefined){
        selected.id = "selected";
        changePage(selected.lastChild.id);
    }  
    

    
}

//change windows
function changePage(pageName) { //pageName is the name of the page you want to open (with .py)
    document.getElementById("rootText").textContent = ("Ander Gaytán > "+ pageName);
    pageName = pageName.replace(".py","")
    const page = document.getElementById("selected");
    var contents;
    contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
   
    document.getElementById(pageName).style.display = "block";
    updateNumbers();
  }

changePage("home.py");



//detect enter press
const node = document.getElementsByClassName("executableCode");
for (var i = 0; i < node.length; i++) {
    node[i].addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            runCodePy();
        }
    });
}



function exitWindow() {
    let tab = this.parentElement;
    //change to another tab if it was the selected tab
    if (tab.id === "selected"){
        document.getElementById("home.py").parentElement.id ="selected";
        changePage("home.py");
    }
    //delete tab
    if (this.id != "home.py"){
        tab.remove();
    }

}