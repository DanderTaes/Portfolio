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
  
  // function to calculate and create the correct number of list items based on the content height
  function updateNumbers() {
    // calculate the number of lines of content based on its height
    const content = document.getElementById("content");
    const contentHeight = content.clientHeight;
    const contentSizeVH = (100 * contentHeight) / window.innerHeight;
    const numLines = Math.floor(contentSizeVH / 3.2);
    
    // remove any existing list items from the numbers list
    clearNumbers();
    
    // create a list item for each line of content
    for (let i = 1; i <= numLines; i++) {
      createNumber(i);
    }
  }
  
  // create the initial list of numbers
  updateNumbers();
  
  // add a resize event listener to update the list of numbers when the window is resized
  window.addEventListener("resize", updateNumbers);
  