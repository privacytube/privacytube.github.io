importScripts("ponyfill.es6.js");

const text = new TextDecoder();
self.onmessage = = function (e) {

fetch(e.data)
.then(response => response.json())
.then(data => {

console.log(data);

for (i in data){

  const display = data[i].title + "<br>" + data[i].author
  self.postMessage(display);


}



});



}
