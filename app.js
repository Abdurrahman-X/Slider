var images = ["images/237.jpg", "images/building.jpg", "images/offshore.jpg"];

var previous = document.querySelector(".prev");

var next = document.querySelector(".next");

var num = 0;

previous.addEventListener("click", function() {
    num--;
    var imgEl = document.querySelector("img");
    if (num < 0) {
        num = images.length -1;
    }
    imgEl.src = images[num];
    imgEl.alt = images[num]
});



next.addEventListener("click", function() {
   
    var imgEl = document.querySelector("img");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    imgEl.src = images[num];
    imgEl.alt = images[num]
});

console.log(images);

