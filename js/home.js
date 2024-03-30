var counter;
function loadApi() {
var httpStuff = new XMLHttpRequest();
httpStuff.onreadystatechange = function () {
if (this.readyState == 4 && this.status == 200) {
var x = JSON.parse(this.responseText);
num = x.length;
document.getElementById("count").innerHTML = `${num} Photos`; // updating th image count
// Implementation of each image object to the HTML DOM
x.forEach((obj) => {
document.getElementById(
"showImage"
).innerHTML += `<div id=${obj.id} class="imgpost" onclick="fadeOut(${obj.id})">
<img
src=${obj.url}
width="600"
height="400"
/>
<div class="descriptions">${obj.title}</div>
</div>`;
});
}
};
httpStuff.open(
"GET",
"https://jsonplaceholder.typicode.com/albums/2/photos",
true
);
httpStuff.send();
}
// Fade Out Feature and then delete the image
function fadeOut(id) {
var element = document.getElementById(id);
var op = 1; // initial opacity
var timer = setInterval(function () {
if (op <= 0.1) {
clearInterval(timer);
element.remove(); //removing the image when timer reaches its end
num--; //updating image count
document.getElementById(
"count"
).innerHTML = `<div>${num} Photos</div>`; //displaying new image count
}
element.style.opacity = op;
op -= 0.1;
}, 50);
}