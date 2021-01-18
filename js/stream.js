importScripts("ponyfill.es6.js");

const text = new TextDecoder();
self.onmessage = async function (e) {



let response = await fetch(e.data);

const reader = response.body.getReader();

while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  console.log('Received', text.decode(value));
}

console.log('Response fully received');




}
