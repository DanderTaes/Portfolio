
// create list of numbers until the page ends

const ul = document.getElementById("numbers");

function createNumber(i) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(i.toString()));
    ul.appendChild(li);
}

// px to em

$.fn.toEm = function(settings){
    settings = jQuery.extend({
        scope: 'body'
    }, settings);
    var that = parseInt(this[0],10),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return (that / scopeVal).toFixed(8) + 'em';
};


$.fn.toPx = function(settings){
    settings = jQuery.extend({
        scope: 'body'
    }, settings);
    var that = parseFloat(this[0]),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return Math.round(that * scopeVal) + 'px';
};


//get how many lines there are

var x = document.getElementById("content").clientHeight; 

var xEm = $(x).toEm();
console.log(xEm);
var lines = Math.round(parseFloat(xEm.replace('em', ''))/1.4);
console.log(lines);

if (320 <$(window).width() && $(window).width()< 480) {
    console.log("pequeñaaa")
    lines += 4
}


for (let i = 0; i < lines; i++) {
    createNumber(i+1);
}
