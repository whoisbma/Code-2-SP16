

function setup() {
  var fileSelect = createFileInput(gotFile, 'multiple');
  //The choose file button can be generated fairly easily with p5.js 
  //using createFileInput(). createFileInput() requires only a single 
  //argument, a callback for when the file(s) are loaded. 
  //A second argument 'multiple' is optional if you want to allow
  //the user to select multiple files. In the case of multiple files, 
  //the callback is triggered once for each file.
}

function gotFile(file) {
  //argument passed to gotFile() is a p5.File object
  //contains metadata of name, type, size, and contents
  createDiv(file.name + ', ' + file.type + file.size + ', bytes');
  if (file.type === 'image') {
    createImg(file.data);
  } else if (file.type === 'text') {
    createP(file.data);
  }
}