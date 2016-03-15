var dropzone1, dropzone2, dropzone3, dropzone4, dropzone5;
var input1, input2, input3, input4, input5;
var button1, button2, button3, button4, button5;

var tokens1 = [];
var tokens2 = [];
var tokens3 = [];
var tokens4 = [];
var tokens5 = [];

var keys = [];

var concordance = {};

function setup() {
  noCanvas();

  input1 = select('#textinput1');
  button1 = select('#submit1');
  button1.mousePressed(handleInput1);
  dropzone1 = select('#dropzone1');
  dropzone1.dragOver(highlight);
  dropzone1.dragLeave(unhighlight);
  dropzone1.drop(gotFile1, unhighlight);

  input2 = select('#textinput2');
  button2 = select('#submit2');
  button2.mousePressed(handleInput2);
  dropzone2 = select('#dropzone2');
  dropzone2.dragOver(highlight);
  dropzone2.dragLeave(unhighlight);
  dropzone2.drop(gotFile2, unhighlight);

  input3 = select('#textinput3');
  button3 = select('#submit3');
  button3.mousePressed(handleInput3);
  dropzone3 = select('#dropzone3');
  dropzone3.dragOver(highlight);
  dropzone3.dragLeave(unhighlight);
  dropzone3.drop(gotFile3, unhighlight);

  input4 = select('#textinput4');
  button4 = select('#submit4');
  button4.mousePressed(handleInput4);
  dropzone4 = select('#dropzone4');
  dropzone4.dragOver(highlight);
  dropzone4.dragLeave(unhighlight);
  dropzone4.drop(gotFile4, unhighlight);

  input5 = select('#textinput5');
  button5 = select('#submit5');
  button5.mousePressed(handleInput5);
  dropzone5 = select('#dropzone5');
  dropzone5.dragOver(highlight);
  dropzone5.dragLeave(unhighlight);
  dropzone5.drop(gotFile5, unhighlight);
}

function highlight() {
  dropzone1.style('background', '#AAA');
  dropzone2.style('background', '#AAA');
  dropzone3.style('background', '#AAA');
  dropzone4.style('background', '#AAA');
  dropzone5.style('background', '#AAA');
}

function unhighlight() {
  dropzone1.style('background', '');
  dropzone2.style('background', '');
  dropzone3.style('background', '');
  dropzone4.style('background', '');
  dropzone5.style('background', '');
}

function gotFile1(file) {
  if (file.type === 'text') {
    tokens1 = input1.value();
    tokens1 = tokens1.split(/\W+/);
  } else {
    alert('not a text file');
  }
}

function gotFile2(file) {
  if (file.type === 'text') {
    tokens2 = input2.value();
    tokens2 = tokens2.split(/\W+/);
  } else {
    alert('not a text file');
  }
}

function gotFile3(file) {
  if (file.type === 'text') {
    tokens3 = input3.value();
    tokens3 = tokens3.split(/\W+/);
  } else {
    alert('not a text file');
  }
}

function gotFile4(file) {
  if (file.type === 'text') {
    tokens4 = input4.value();
    tokens4 = tokens4.split(/\W+/);
  } else {
    alert('not a text file');
  }
}

function gotFile5(file) {
  if (file.type === 'text') {
    tokens5 = input5.value();
    tokens5 = tokens5.split(/\W+/);
  } else {
    alert('not a text file');
  }
}

function handleInput1() {
  tokens1 = input1.value();
  tokens1 = tokens1.split(/\W+/);
  
  keys = [];
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens1[i];
    //if its a new word:
    if (concordance[word] === undefined) {
      concordance[word] = 1;
      keys.push(word);
    } else { // if we've seen this word before:
      concordance[word]++;
    }
  }
  keys.sort(function(a,b) {return concordance[b]-concordance[a]});
  console.log(keys);
}

function handleInput2() {
  tokens2 = input2.value();
  tokens2 = tokens2.split(/\W+/);
}

function handleInput3() {
  tokens3 = input3.value();
  tokens3 = tokens3.split(/\W+/);
}

function handleInput4() {
  tokens4 = input4.value();
  tokens4 = tokens4.split(/\W+/);
}

function handleInput5() {
  tokens5 = input5.value();
  tokens5 = tokens5.split(/\W+/);
}

}