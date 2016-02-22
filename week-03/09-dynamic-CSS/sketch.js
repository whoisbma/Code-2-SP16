function setup() {
  for (var i = 0; i < 10; i++) {
    var p = createP('apples');
    // p.style('background-color', 'red'); //styling dynamically
    p.class('apple');
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x,y);
  }
  
  for (var i = 0; i < 10; i++) {
    var p = createP('oranges');
    p.class('orange');
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x,y);
    p.mousePressed(orangeBecomeApple);
  }
  
  //using an anchor tag (or not) to trigger a function callback to change styles
  for (var i = 0; i < 10; i++) {
    // var p = createP('not apples'); //works
    var p = createA('#', 'not apples anchor'); //also works
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x,y);
    p.mousePressed(becomeApple);
  }
}

function becomeApple() {
  this.class('apple');
  this.html('now i am apple');
}

function orangeBecomeApple() {
  this.removeClass('orange');
  this.class('apple');
}