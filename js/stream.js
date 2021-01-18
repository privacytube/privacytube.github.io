importScripts("ponyfill.es6.js");

const text = new TextDecoder();
self.onmessage = function (e) {

fetch(e.data)
.then(response => response.json())
.then(data => {


for (i in data){

  var u = 'https://invidiou.site' + data[i].authorUrl
  var v = 'https://invidiou.site/embed/' + data[i].videoId
  const display =  "<a href='"+ v +"'><img src='" + data[i].videoThumbnails[4].url + "'></a><br><a href='"+  v  + "'>" + data[i].title + "</a><br><a href='" + u +"'>" + data[i].author + "</a>"
  self.postMessage(display);


}



});



}
