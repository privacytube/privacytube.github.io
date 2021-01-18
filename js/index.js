
var stream = new Worker("stream.js")

var but = document.getElementById('s');
var inp = document.getElementById('input').value;


but.onclick = clicked;

function clicked() {


var url = "https://invidiou.site/api/v1/search?q=" + inp;
stream.postMessage(url);


// fetch(url).then(function (response) {
// 	// The API call was successful!
// 	return response.json();
// }).then(function (response) {
//
//
//
//
// for (i in response){
//
//   console.log(response[i]);
//   let element = document.createElement("p");
//
//   element.innerHTML = "<img src='" + response[i].videoThumbnails[4].url +"'><br>"+ response[i].title + " <br>" + response[i].author
//
//   document.body.append(element);
//
// }
//
//
// }).catch(function (err) {
// 	// There was an error
// 	console.warn('Something went wrong.', err);
// });

}
