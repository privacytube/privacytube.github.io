var stream = new Worker("js/stream.js")
var but = document.getElementById('s');
var form = document.querySelector("form");
var is = document.getElementById('first');

but.onclick = clicked;
function clicked(e) {
// e.preventDefault;
is.innerHTML = "<span></span>";
var inp = document.getElementById('input').value;
if(inp!=="pewdiepie"&&inp!=="kalvin garrah"&&inp!=="kalvin"&&inp!=="garrah"){

var url = "https://invidious.048596.xyz/api/v1/search?q=" + inp;
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
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  },function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}
