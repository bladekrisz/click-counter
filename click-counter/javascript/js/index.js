
var count = 0;

var incButton = document.getElementById("increment");
incButton.onclick = function() {
  count += 1;
  document.getElementById("number").innerHTML = count;
};
var resetButton = document.getElementById("reset");
resetButton.onclick = function() {
	count = 0;
	document.getElementById("number").innerHTML = count;
};

var decButton = document.getElementById("decrement");
decButton.onclick = function() {
  count -= 1;
  document.getElementById("number").innerHTML = count;
};