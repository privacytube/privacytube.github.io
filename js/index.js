
var stream = new Worker("js/stream.js")
var but = document.getElementById('s');
var form = document.querySelector("form");


but.onclick = clicked;

function clicked(e) {
e.preventDefault;
var inp = document.getElementById('input').value;
if(inp!=="pewdiepie"&&inp!=="kalvin garrah"&&inp!=="kalvin"&&inp!=="garrah"){

var url = "https://invidiou.site/api/v1/search?q=" + inp;
stream.postMessage(url);

stream.onmessage = function (e) {

  let element = document.createElement("p");

  element.innerHTML = e.data;

  document.getElementById('first').prepend(element);

}


} else {



form.style.display = "none";
}

}
