importScripts("ponyfill.es6.js");


self.onmessage = async function (e) {



let response = await fetch(e.data);
const reader = response.body
  .pipeThrough(new TextDecoderStream())
  .getReader();
while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  console.log('Received', value);
}

console.log('Response fully received');

}
