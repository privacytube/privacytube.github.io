importScripts("ponyfill.es6.js");

const text = new TextDecoder();
self.onmessage = async function (e) {



let response = await fetch(e.data);

const reader = response.body.getReader();

while (true) {
  const { value, done } = await reader.read();
  if (done) break;

  console.log('Received', text.decode(value));

var response = JSON.parse(text.decode(value));

for (i in response){
  let display = "<img src='" + response[i].videoThumbnails[4].url +"'><br>"+ response[i].title + " <br>" + response[i].author
  self.postMessage(display);
}



}

console.log('Response fully received');




}
