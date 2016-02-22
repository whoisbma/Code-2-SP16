var textbox;
var slider;
var paragraph;


function setup() {
  noCanvas();
  paragraph = createP("Starting text");
  textbox = createInput("enter text");
  slider = createSlider(10, 64, 16);

  //--------------------------------
  //when enter is pushed in the textbox
  textbox.changed(updateText);

  //--------------------------------
  //whenever it changes at all
  textbox.input(updateText);
  slider.input(updateSize);

}

function updateText() {
  paragraph.html(textbox.value());
}

function updateSize() {
  paragraph.style("font-size", slider.value() + "pt");
}
