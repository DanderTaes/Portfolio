
// create list of numbers until the page ends

const ul = document.getElementById("numbers");

function createNumber(i) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(i.toString()));
    ul.appendChild(li);
}


//get how many lines there are

var x = document.getElementById("content").clientHeight; 

var contentSizeVH = 100 * x / window.innerHeight;
var lines = contentSizeVH / 3.2
// console.log(x, contentSizeVH, lines);


for (let i = 0; i < lines; i++) {
    createNumber(i+1);
}
