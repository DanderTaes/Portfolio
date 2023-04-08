const ul = document.getElementById("numbers");

function createNumber(i) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(i.toString()));
    ul.appendChild(li);
}

// create temporary li element to get its height
var liTemp = document.createElement("li");
liTemp.innerHTML = "0";
ul.appendChild(liTemp);
var liHeight = liTemp.offsetHeight;
ul.removeChild(liTemp);

var contentHeight = document.getElementById("content").clientHeight;
var numLines = Math.ceil(contentHeight / liHeight);

for (let i = 0; i < numLines; i++) {
    createNumber(i+1);
}
