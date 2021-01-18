importScripts("ponyfill.es6.js");

const text = new TextDecoder();
self.onmessage = function (e) {

fetch(e.data)
.then(response => response.json())
.then(data => {


for (i in data){

  var u = 'https://invidiou.site' + data[i].authorUrl
  const display =  "<img src='" + data[i].videoThumbnails[4].url + "'><br>" + data[i].title + "<br><a href='" + u +"'>" + data[i].author + "</a>"
  self.postMessage(display);


}



});



}
