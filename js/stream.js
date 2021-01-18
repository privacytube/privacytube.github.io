importScripts("ponyfill.es6.js");



const text = new TextDecoder();
var arr = [];

self.onmessage = async function (e) {



let res = await fetch(e.data);

const reader = res.body.getReader();

while (true) {
  const { value, done } = await reader.read();
  if (done) break;

  console.log('Received', text.decode(value));

for(var p in Object.getOwnPropertyNames(value)) {
  arr[p] = response[p];
}
for (i in arr){
  let display = "<img src='" + arr[i].videoThumbnails[4].url +"'><br>"+ arr[i].title + " <br>" + arr[i].author
  self.postMessage(display);
}



}

console.log('Response fully received');




}
