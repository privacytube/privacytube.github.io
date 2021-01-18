importScripts("ponyfill.es6.js");


self.onmessage = function (e) {

let response = await fetch(e.data);

const reader = response.body.getReader();

const contentLength = +response.headers.get('Content-Length');

// Step 3: read the data
let receivedLength = 0; // received that many bytes at the moment
let chunks = []; // array of received binary chunks (comprises the body)
while(true) {
  const {done, value} = await reader.read();

  if (done) {
    break;
  }
  console.log("Value is, " +value);
  chunks.push(value);
  receivedLength += value.length;

  console.log(`Received ${receivedLength} of ${contentLength}`)
}

// Step 4: concatenate chunks into single Uint8Array
let chunksAll = new Uint8Array(receivedLength); // (4.1)
let position = 0;
for(let chunk of chunks) {
  console.log("chunk is, " +chunk)
  // chunksAll.set(chunk, position); // (4.2)
  // position += chunk.length;
}


}
