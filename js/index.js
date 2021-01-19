
var stream = new Worker("js/stream.js")
var but = document.getElementById('s');
var form = document.querySelector("form");
var is = document.getElementById('first');

but.onclick = clicked;

function clicked(e) {
e.preventDefault;
is.innerHTML = "<span></span>";
var inp = document.getElementById('input').value;
if(inp!=="pewdiepie"&&inp!=="kalvin garrah"&&inp!=="kalvin"&&inp!=="garrah"){

var url = "https://invidiou.site/api/v1/search?q=" + inp;
stream.postMessage(url);

stream.onmessage = function (e) {

  let element = document.createElement("p");

  element.innerHTML = e.data;

  document.getElementById('first').append(element);

}


} else {



form.style.display = "none";
}

}


var input = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    but.click();
  }
});
