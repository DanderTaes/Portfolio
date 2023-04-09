// how many more lines do we have at the end
const wiggleroom = 2
// function to create a list item for each line of content
function createNumber(i) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(i.toString()));
  document.getElementById("numbers").appendChild(li);
}

// function to remove all list items from the numbers list
function clearNumbers() {
  const numbers = document.getElementById("numbers");
  while (numbers.firstChild) {
    numbers.removeChild(numbers.firstChild);
  }
}
var a = 1;
// function to calculate and create the correct number of list items based on the content height
function updateNumbers() {
  // calculate the number of lines of content based on its height
  var lineHeight = 3.2;
  const contentName = document.getElementById("selected").lastChild.id.replace(".py", "");
  const content = document.getElementById(contentName);
 

  const contentHeight = content.clientHeight;
  const contentSizeVH = (100 * contentHeight) / window.innerHeight;
  if (window.innerWidth <= 600) {
    lineHeight = 2;
  }
  const numLines = Math.floor(contentSizeVH / lineHeight);
  // remove any existing list items from the numbers list
  clearNumbers();

  // create a list item for each line of content
  for (let i = 1; i <= numLines+wiggleroom; i++) {
    createNumber(i);
  }
}


// debounce function
function debounce(func, delay) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}

// add a resize event listener to update the list of numbers when the window is resized
window.addEventListener("resize", debounce(updateNumbers, 500));
