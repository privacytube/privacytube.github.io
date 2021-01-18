importScripts("ponyfill.es6.js");

const text = new TextDecoder();
self.onmessage = function (e) {

fetch(e.data)
.then(response => response.json())
.then(data => {


for (i in data){

  const display =  "<img src='" + data[i].videoThumbnails[4].url + "'><br>" + data[i].title + "<br>" + data[i].author
  self.postMessage(display);


}



});



}
