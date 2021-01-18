const text = new TextDecoder();
self.onmessage = function (e) {


fetch(e.data).then(response => response.json()).then(data => {


for (i in data){

  var u = 'https://invidiou.site' + data[i].authorUrl
  var v = 'https://invidiou.site/embed/' + data[i].videoId
  const display =  "<a href='"+ v +"'><img alt='"+ data[i].title +"'src='" + data[i].videoThumbnails[3].url + "'></a><br><a href='"+  v  + "'>" + data[i].title + "</a><br><br><a href='" + u +"'>" + data[i].author + "</a>"
  self.postMessage(display);


}

})




};
